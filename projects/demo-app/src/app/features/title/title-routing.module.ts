import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TitleNestedComponent, TitleNestedSecondComponent } from './components';
import { TitleComponent } from './title.component';

const routes: Routes = [
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

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TitleRoutingModule {}
