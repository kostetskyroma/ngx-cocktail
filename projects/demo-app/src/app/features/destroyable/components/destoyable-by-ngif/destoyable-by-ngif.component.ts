import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Features } from '@ngx-cocktail/common';
import { DestroyableFeature } from '@ngx-cocktail/destroyable';
import { DestroyableByNgifChildComponent } from '../destoyable-by-ngif-child';


@Component({
  selector: 'app-destoyable-by-ngif',
  templateUrl: './destoyable-by-ngif.component.html',
  styleUrls: ['./destoyable-by-ngif.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [DestroyableByNgifChildComponent],
})
@Features([DestroyableFeature()])
export class DestroyableByNgifComponent {
  public show: boolean = false;
}
