import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { DestroyableCleanComponent, CLEAN_SOURCE } from './clean/destroyable-clean.component';
import { DestroyableLeakyComponent, LEAKY_SOURCE } from './leaky/destroyable-leaky.component';
import { EventLogPanelComponent } from '../../../shared/event-log-panel/event-log-panel.component';
import { CodeSnippetComponent } from '../../../shared/code-snippet/code-snippet.component';

const BEFORE_CODE = `// ❌ The traditional way — boilerplate every time
@Component({ ... })
export class MyComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();

  ngOnInit() {
    interval(1000)
      .pipe(takeUntil(this.destroy$))
      .subscribe(val => { ... });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}`;

const AFTER_CODE = `// ✅ With @ngx-cocktail/destroyable
@Component({ ... })
@Features([DestroyableFeature()])
export class MyComponent implements OnInit {
  destroyed$!: Observable<unknown>;

  ngOnInit() {
    interval(1000)
      .pipe(takeUntil(this.destroyed$))
      .subscribe(val => { ... });
  }
  // No ngOnDestroy needed.
}`;

@Component({
  selector: 'app-destroyable-demo',
  templateUrl: './destroyable-demo.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    DestroyableCleanComponent,
    DestroyableLeakyComponent,
    EventLogPanelComponent,
    CodeSnippetComponent,
  ],
})
export class DestroyableDemoComponent {
  readonly showClean = signal(false);
  readonly showLeaky = signal(false);
  readonly beforeCode = BEFORE_CODE;
  readonly afterCode = AFTER_CODE;
  readonly cleanSource = CLEAN_SOURCE;
  readonly leakySource = LEAKY_SOURCE;
}
