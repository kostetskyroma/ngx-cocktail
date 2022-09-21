import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TitleRoutingModule } from './title-routing.module';
import { TitleComponent } from './title.component';
import { TitleNestedComponent } from './components/title-nested/title-nested.component';
import { TitleNestedSecondComponent } from './components/title-nested-second/title-nested-second.component';

@NgModule({
  declarations: [
    TitleComponent,
    TitleNestedComponent,
    TitleNestedSecondComponent,
  ],
  imports: [CommonModule, TitleRoutingModule],
})
export class TitleModule {}
