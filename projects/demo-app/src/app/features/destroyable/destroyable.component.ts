import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-destroyable',
  templateUrl: './destroyable.component.html',
  styleUrls: ['./destroyable.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DestroyableComponent {}
