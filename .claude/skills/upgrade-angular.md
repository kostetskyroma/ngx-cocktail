# Upgrade to a new Angular major version

You are helping upgrade the ngx-cocktail monorepo to a new Angular major version.

First, ask the user which Angular version they are upgrading to if they did not provide it in their invocation. Then execute the following steps one at a time, confirming success at each step before proceeding.

## Step 1 — Run `ng update`

Run the official Angular update command. Replace `{N}` with the target major version:

```bash
npx ng update @angular/core@{N} @angular/cli@{N} @angular/build@{N} --allow-dirty
```

This updates Angular packages, TypeScript, ng-packagr, and runs official migration schematics. Report which package versions were installed.

## Step 2 — Build all libraries and run tests

Build all three libraries:
```bash
npm run build:common && npm run build:destroyable && npm run build:title
```

Then run the test suites:
```bash
ng test common --watch=false --browsers=ChromeHeadless
ng test destroyable --watch=false --browsers=ChromeHeadless
ng test title --watch=false --browsers=ChromeHeadless
ng test demo-app --watch=false --browsers=ChromeHeadless
```

Note: Karma exits with code 1 when 0 spec files are found — this is not a real test failure for the three libraries (they have no spec files yet).

### Highest-risk files (private Ivy APIs — inspect first if there are build errors)

| File | APIs used |
|------|-----------|
| `projects/common/src/lib/feature.decorator.ts` | `ɵcmp`, `ɵdir`, `ɵfac` |
| `projects/common/src/lib/component.feature.ts` | `ɵComponentDef`, `ɵComponentType`, `.features[]`, `.factory` |
| `projects/common/src/lib/directive.feature.ts` | `ɵDirectiveDef`, `ɵDirectiveType`, `.features[]`, `.factory` |
| `projects/destroyable/src/lib/destoyable.feature.ts` | `ɵDirectiveDef`, `.factory`, `.type` |
| `projects/title/src/lib/title.feature.ts` | `ɵDirectiveDef`, `.factory` |

### Known demo-app test issues (fix if they appear)
- Standalone components must be in `imports`, not `declarations`, in `TestBed.configureTestingModule`
- Components that import `RouterLink` need `provideRouter([])` in test providers
- `polyfills` in `angular.json` test config must be an array, not a string

## Step 3 — Update library `package.json` files

Update all three files: `projects/common/package.json`, `projects/destroyable/package.json`, `projects/title/package.json`

For each:
- `"version"` → `"{N}.0.0"`
- peerDependency `@angular/common` → `"^{N}.0.0"`
- peerDependency `@angular/core` → `"^{N}.0.0"`
- peerDependency `@ngx-cocktail/common` (destroyable + title only) → `"^{N}.0.0"`
- Add `"angular {N}"` and `"ng {N}"` to `keywords`

## Step 4 — Update root `package.json`

- `"version"` → `"{N}.0.0"`
- `@ngx-cocktail/common`, `@ngx-cocktail/destroyable`, `@ngx-cocktail/title` deps → `"^{N}.0.0"`
- Add `"angular {N}"` and `"ng {N}"` to `keywords`

## Step 5 — Rebuild dist and verify

```bash
npm run build:common && npm run build:destroyable && npm run build:title
```

Verify that `dist/common/package.json`, `dist/destroyable/package.json`, and `dist/title/package.json` all show `peerDependencies` pointing to `^{N}.0.0`.

## Step 6 — Publish

Ask the user to confirm before publishing. Then run:

```bash
cd dist/common && npm publish
cd dist/destroyable && npm publish
cd dist/title && npm publish
```
