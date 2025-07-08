import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: 'destroyable',
    loadChildren: () =>
      import('./features/destroyable').then((m) => m.destroyableRoutes),
  },
  {
    path: 'title',
    loadChildren: () => import('./features/title').then((m) => m.titleRoutes),
  },
];
