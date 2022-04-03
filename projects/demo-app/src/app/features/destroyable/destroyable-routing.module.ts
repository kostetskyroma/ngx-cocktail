import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DestroyableComponent } from './destroyable.component';

const routes: Routes = [
  {
    path: '',
    component: DestroyableComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DestroyableRoutingModule {}
