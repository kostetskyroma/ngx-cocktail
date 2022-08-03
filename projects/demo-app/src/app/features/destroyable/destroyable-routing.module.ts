import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DestroyableComponent } from './destroyable.component';
import {
  DestroyableByNgifComponent,
  DestroyableByPathComponent,
} from './components';

const routes: Routes = [
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

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DestroyableRoutingModule {}
