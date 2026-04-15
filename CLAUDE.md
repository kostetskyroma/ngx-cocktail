# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Run the demo app
npm start

# Run all tests (demo-app by default)
npm test

# Run tests for a specific project
ng test common
ng test destroyable
ng test title
ng test demo-app

# Build a single library (outputs to dist/<name>/)
npm run build:common
npm run build:destroyable
npm run build:title

# Build the demo app
npm run build
```

To publish a library after building: `cd dist/<name> && npm publish`.

## Architecture

This is an **Angular monorepo** (`angular.json`) with three publishable libraries and one demo app under `projects/`.

### How the feature system works

The core idea is to augment Angular Ivy's internal `ɵcmp`/`ɵdir` definition objects at component-definition time (not instance time) by appending functions to their `features` array.

**`@ngx-cocktail/common`** — the foundation:
- `Features` decorator (`feature.decorator.ts`): wraps a `Promise.resolve().then(...)` microtask to run after Ivy has attached `ɵcmp`/`ɵdir` to the class. It delegates to `ComponentFeatures` or `DirectiveFeatures`.
- `ComponentFeatures` / `DirectiveFeatures` (`component.feature.ts`, `directive.feature.ts`): append the provided feature functions to the def's `features` array, then call each feature immediately with the def.
- `ComponentFeature` / `DirectiveFeature`: interfaces for feature functions; accept the Ivy def object. Optional `ngInherit?: true` marks a feature as inheritable by subclasses.
- `Writable<T>`: utility type that strips `readonly` from Ivy defs (needed since Ivy defs are deeply readonly).

**Feature implementation pattern** — each feature wraps `directiveDef.factory` to intercept component instantiation:
```
original factory → feature wraps it → new factory assigned to def
```

**`@ngx-cocktail/destroyable`**:
- `DestroyableFeature()` wraps the factory to `Reflect.construct` a `Destroyed` instance and `Object.assign` its properties (`destroyed$`) onto the component instance. It also chains `ngOnDestroy` so both the original and the feature's cleanup run.
- `Destroyed` (abstract class): holds a `Symbol`-keyed private `Subject` and exposes `destroyed$` as its observable.

**`@ngx-cocktail/title`**:
- `TitleFeature(title)` wraps the factory to call `inject(Title)` and `titleService.setTitle(title)` during component instantiation. Since `inject()` works during construction, it correctly resolves the DI context.
- Both feature packages re-export `Features` from `@ngx-cocktail/common` — consumers only need one import.

### Writing a custom feature

A feature is a function `(def: ɵComponentDef<T> | ɵDirectiveDef<T>) => void`. To run logic at instantiation time, wrap `def.factory`:

```typescript
import { ComponentFeature, Writable } from '@ngx-cocktail/common';
import { ɵComponentDef } from '@angular/core';

export function MyFeature(): ComponentFeature {
  return <T>(def: Writable<ɵComponentDef<T>>) => {
    const { factory, type } = def;
    def.factory = () => {
      const instance = factory?.(type) as T;
      // mutate instance here
      return instance;
    };
  };
}
```

### Demo app

`projects/demo-app/` is a standalone Angular app that exercises both features via lazy-loaded routes (`/destroyable`, `/title`). It is not published to npm — its `package.json` dependencies reference the published packages, so the locally-built `dist/` packages must be linked or the npm versions installed for the demo to function correctly.

### Branch conventions

Release branches follow the pattern `release/vN` (e.g. `release/v20`). Each maps to the corresponding Angular major version. `master` is the integration branch.
