import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CodeSnippetComponent } from '../../../shared/code-snippet/code-snippet.component';

const INSTALL_CODE = `npm install @ngx-cocktail/destroyable
# or
npm install @ngx-cocktail/title`;

const USAGE_CODE = `import { Features, DestroyableFeature } from '@ngx-cocktail/destroyable';
import { TitleFeature } from '@ngx-cocktail/title';

@Component({ ... })
@Features([DestroyableFeature(), TitleFeature('My Page')])
export class MyComponent implements OnInit {
  destroyed$!: Observable<unknown>;

  ngOnInit() {
    someStream$
      .pipe(takeUntil(this.destroyed$))
      .subscribe(...);
  }
}`;

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CodeSnippetComponent],
})
export class HeroSectionComponent {
  readonly installCode = INSTALL_CODE;
  readonly usageCode = USAGE_CODE;
}
