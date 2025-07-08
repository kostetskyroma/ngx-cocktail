import { Routes } from '@angular/router';
import { TitleNestedComponent, TitleNestedSecondComponent } from './components';
import { TitleComponent } from './title.component';

export const titleRoutes: Routes = [
  {
    path: '',
    component: TitleComponent,
    children: [
      {
        path: 'nested',
        component: TitleNestedComponent,
      },
      {
        path: 'nested-2',
        component: TitleNestedSecondComponent,
      },
    ],
  },
];
