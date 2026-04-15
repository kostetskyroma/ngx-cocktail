# Demo App Redesign — Testing Checklist

---

## Functional

- [ ] `npm start` — app serves, single page loads, no console errors
- [ ] Mount clean component: counter starts, log shows "tick" events with green badge
- [ ] Unmount clean component: counter stops, log shows "destroyed — subscriptions cleaned up"
- [ ] Mount leaky component: counter starts, log shows "tick" events with orange badge
- [ ] Unmount leaky component: counter **continues** ticking in log, "LEAKED" badge appears
- [ ] Click "Page A" button: browser tab title changes to "Demo: Page A", mock browser UI updates
- [ ] Click "Page B" button: browser tab title changes to "Demo: Page B", mock browser UI updates
- [ ] Copy button on each code snippet writes to clipboard (check with paste)

## Regression

- [ ] `ng test demo-app` — test suite passes
- [ ] `ng test common` — passes
- [ ] `ng test destroyable` — passes
- [ ] `ng test title` — passes
