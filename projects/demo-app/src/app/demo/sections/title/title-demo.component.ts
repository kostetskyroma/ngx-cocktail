import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
  inject,
  signal,
} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TitlePageAComponent } from './page-a/title-page-a.component';
import { TitlePageBComponent } from './page-b/title-page-b.component';
import { CodeSnippetComponent } from '../../../shared/code-snippet/code-snippet.component';

type ActivePage = 'none' | 'a' | 'b';

const SNIPPET_CODE = `import { Features, TitleFeature } from '@ngx-cocktail/title';

@Component({ ... })
@Features([TitleFeature('My Page Title')])
export class MyPageComponent {}

// The title is set at Ivy factory time — before ngOnInit.
// Works with lazy-loaded routes, no Router setup required.`;

@Component({
  selector: 'app-title-demo',
  templateUrl: './title-demo.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [TitlePageAComponent, TitlePageBComponent, CodeSnippetComponent],
})
export class TitleDemoComponent implements OnInit, OnDestroy {
  private readonly titleService = inject(Title);
  private readonly cdr = inject(ChangeDetectorRef);

  readonly activePage = signal<ActivePage>('none');
  readonly currentTitle = signal('');
  readonly snippetCode = SNIPPET_CODE;

  private observer?: MutationObserver;

  ngOnInit(): void {
    // Watch <title> element for changes made by TitleFeature
    this.observer = new MutationObserver(() => {
      this.currentTitle.set(this.titleService.getTitle());
      this.cdr.markForCheck();
    });
    const titleEl = document.querySelector('title');
    if (titleEl) {
      this.observer.observe(titleEl, { childList: true });
    }
    this.currentTitle.set(this.titleService.getTitle());
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  selectPage(page: ActivePage): void {
    this.activePage.set(page);
    // Give Angular one tick to mount the component and fire TitleFeature
    setTimeout(() => {
      this.currentTitle.set(this.titleService.getTitle());
      this.cdr.markForCheck();
    });
  }
}
