import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeroSectionComponent } from './sections/hero/hero-section.component';
import { DestroyableDemoComponent } from './sections/destroyable/destroyable-demo.component';
import { TitleDemoComponent } from './sections/title/title-demo.component';
import { CustomFeatureSectionComponent } from './sections/custom-feature/custom-feature-section.component';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    HeroSectionComponent,
    DestroyableDemoComponent,
    TitleDemoComponent,
    CustomFeatureSectionComponent,
  ],
})
export class DemoComponent {}
