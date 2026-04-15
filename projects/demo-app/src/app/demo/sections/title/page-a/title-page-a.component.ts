import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Features, TitleFeature } from '@ngx-cocktail/title';

@Component({
  selector: 'app-title-page-a',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
@Features([TitleFeature('Demo: Page A')])
export class TitlePageAComponent {}
