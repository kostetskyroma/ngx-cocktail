import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'destroyable',
    loadChildren: () =>
      import('./features/destroyable').then((m) => m.DestroyableModule),
  },
  {
    path: 'title',
    loadChildren: () =>
      import('./features/title/title.module').then((m) => m.TitleModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
