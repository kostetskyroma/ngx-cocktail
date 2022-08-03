import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { Features } from '@ngx-cocktail/common';
import { DestroyableFeature } from '@ngx-cocktail/destroyable';

@Component({
  selector: 'app-destoyable-by-ngif',
  templateUrl: './destoyable-by-ngif.component.html',
  styleUrls: ['./destoyable-by-ngif.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
@Features([DestroyableFeature()])
export class DestroyableByNgifComponent {
  public show: boolean = false;
}
