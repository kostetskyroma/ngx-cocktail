import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CodeSnippetComponent } from '../../../shared/code-snippet/code-snippet.component';

const CUSTOM_CODE = `import { ComponentFeature, Writable } from '@ngx-cocktail/common';
import { ɵComponentDef } from '@angular/core';

export function LogRenderFeature(): ComponentFeature {
  return <T>(def: Writable<ɵComponentDef<T>>) => {
    const { factory, type } = def;
    def.factory = () => {
      console.log(\`[\${type.name}] instantiated\`);
      return factory?.(type) as T;
    };
  };
}

// Then use it like any built-in feature:
@Component({ ... })
@Features([LogRenderFeature(), DestroyableFeature()])
export class MyComponent { ... }`;

@Component({
  selector: 'app-custom-feature-section',
  templateUrl: './custom-feature-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CodeSnippetComponent],
})
export class CustomFeatureSectionComponent {
  readonly customCode = CUSTOM_CODE;
}
