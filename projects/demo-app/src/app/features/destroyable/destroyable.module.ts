import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DestroyableComponent } from './destroyable.component';
import {
  DestroyableByNgifComponent,
  DestroyableByPathComponent,
  DestroyableByNgifChildComponent,
} from '../destroyable/components';
import { DestroyableRoutingModule } from './destroyable-routing.module';

@NgModule({
  declarations: [
    DestroyableComponent,
    DestroyableByNgifComponent,
    DestroyableByNgifChildComponent,
    DestroyableByPathComponent,
  ],
  imports: [CommonModule, DestroyableRoutingModule],
})
export class DestroyableModule {}
