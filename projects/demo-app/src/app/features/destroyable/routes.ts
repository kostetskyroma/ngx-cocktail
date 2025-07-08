import { Routes } from '@angular/router';
import { DestroyableComponent } from './destroyable.component';
import {
  DestroyableByNgifComponent,
  DestroyableByPathComponent,
} from './components';

export const destroyableRoutes: Routes = [
  {
    path: '',
    component: DestroyableComponent,
  },
  {
    path: 'ng-if',
    component: DestroyableByNgifComponent,
  },
  {
    path: 'path',
    component: DestroyableByPathComponent,
  },
];
