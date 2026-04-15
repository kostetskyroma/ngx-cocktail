# Demo App Redesign — Plan

## Context

The current demo app is nearly unusable as a showcase. Templates contain placeholder text (`<p>title works!</p>`), the Destroyable demo only outputs to the browser console, and there is no visual design or explanatory content. The goal is a **single-page product showcase** — a developer lands on the page and understands the library's value in 5–10 seconds. All demos must actually exercise the library (`@Features`, `DestroyableFeature()`, `TitleFeature()`), not simulate it — the demo app also serves as an integration test.

---

## Approach

Single scrollable page with four sections:

1. **Hero** — name, tagline, install command
2. **Destroyable** — before/after code diff left, side-by-side live demo right (clean vs. leaky component, in-app event log)
3. **Title** — code snippet left, mock browser chrome right (buttons swap `TitleFeature` components via `@if`, tab title actually changes)
4. **Write Your Own** — static code snippet showing the custom feature pattern

**Tech additions (demo-app only):** TailwindCSS (auto-detected by Angular's esbuild builder via `tailwind.config.js`).

---

## New Architecture

### Routing

```typescript
[
  { path: '', loadComponent: () => import('./demo/demo.component') },
  { path: '**', redirectTo: '' }
]
```

### Component Tree

```
DemoComponent
├── HeroSectionComponent
├── DestroyableDemoComponent
│   ├── DestroyableCleanComponent   — @Features([DestroyableFeature()])
│   └── DestroyableLeakyComponent   — no feature, no cleanup
├── TitleDemoComponent
│   ├── TitlePageAComponent         — @Features([TitleFeature('Demo: Page A')])
│   └── TitlePageBComponent         — @Features([TitleFeature('Demo: Page B')])
└── CustomFeatureSectionComponent
```

`@if` blocks are the mount/unmount mechanism — this is exactly how the library behaves in real apps.

---

## Files to Create

All paths relative to `projects/demo-app/src/app/`.

| File | Purpose |
|---|---|
| `demo/demo.component.{ts,html}` | Page root |
| `demo/sections/hero/hero-section.component.{ts,html}` | Hero section |
| `demo/sections/destroyable/destroyable-demo.component.{ts,html}` | Destroyable section wrapper |
| `demo/sections/destroyable/clean/destroyable-clean.component.{ts,html}` | Real DestroyableFeature |
| `demo/sections/destroyable/leaky/destroyable-leaky.component.{ts,html}` | Real leaking component |
| `demo/sections/title/title-demo.component.{ts,html}` | Title section wrapper |
| `demo/sections/title/page-a/title-page-a.component.ts` | TitleFeature('Demo: Page A') |
| `demo/sections/title/page-b/title-page-b.component.ts` | TitleFeature('Demo: Page B') |
| `demo/sections/custom-feature/custom-feature-section.component.{ts,html}` | Static snippet |
| `shared/event-log.service.ts` | In-app log store |
| `shared/event-log-panel/event-log-panel.component.{ts,html}` | Scrollable log widget |
| `shared/code-snippet/code-snippet.component.{ts,html}` | Code display + copy |
| `tailwind.config.js` (repo root) | Tailwind content paths |

## Files to Modify

| File | Change |
|---|---|
| `package.json` | Add `tailwindcss` dev dependency |
| `projects/demo-app/src/styles.scss` | Tailwind directives |
| `projects/demo-app/src/app/routes.ts` | Single route |
| `projects/demo-app/src/app/app.component.{ts,html,scss}` | Minimal shell |

## Files to Delete

```
projects/demo-app/src/app/features/destroyable/
projects/demo-app/src/app/features/title/
```

---

## Implementation Order

1. Install Tailwind, update `styles.scss`, simplify `AppComponent` + `routes.ts`
2. `EventLogService` → `EventLogPanelComponent` → `CodeSnippetComponent`
3. `DestroyableCleanComponent` → `DestroyableLeakyComponent` → `DestroyableDemoComponent`
4. `TitlePageA/B` → `TitleDemoComponent`
5. `CustomFeatureSectionComponent` → `HeroSectionComponent` → `DemoComponent`
6. Delete old `features/` folders
