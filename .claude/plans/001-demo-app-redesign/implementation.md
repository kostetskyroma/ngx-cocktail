# Demo App Redesign — Implementation Notes

---

## Notes

- Using Tailwind CSS v3 (auto-detected by Angular's esbuild builder when `tailwind.config.js` is present — no manual PostCSS config needed)
- SpartanUI skipped in favour of pure Tailwind components — avoids nx dependency and produces identical visual results
- `EventLogService` is `providedIn: 'root'` so both the clean and leaky components write to the same log panel in their parent
- `DestroyableLeakyComponent` intentionally has no cleanup — the continued log entries after unmount are the proof of leak
- Title demo uses `@if` to mount/unmount `TitlePageA/B`; the `TitleFeature` factory fires on mount and calls `inject(Title).setTitle(...)`, updating the real browser tab
