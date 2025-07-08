import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-destroyable',
  templateUrl: './destroyable.component.html',
  styleUrls: ['./destroyable.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, RouterLink],
  standalone: true,
})
export class DestroyableComponent {}
