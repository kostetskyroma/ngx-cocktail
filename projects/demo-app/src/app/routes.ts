import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./demo/demo.component').then((m) => m.DemoComponent),
  },
  { path: '**', redirectTo: '' },
];
