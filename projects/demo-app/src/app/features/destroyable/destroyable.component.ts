import { Component, ChangeDetectionStrategy } from '@angular/core';

import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-destroyable',
  templateUrl: './destroyable.component.html',
  styleUrls: ['./destroyable.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  standalone: true,
})
export class DestroyableComponent {}
