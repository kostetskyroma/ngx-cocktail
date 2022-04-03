import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DestroyableComponent } from './destroyable.component';
import { DestroyableRoutingModule } from './destroyable-routing.module';

@NgModule({
  declarations: [DestroyableComponent],
  imports: [CommonModule, DestroyableRoutingModule],
})
export class DestroyableModule {}
