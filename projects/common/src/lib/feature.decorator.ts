import { ɵComponentType, ɵDirectiveType, Type } from '@angular/core';
import { ComponentFeature, ComponentFeatures } from './component.feature';
import { DirectiveFeature, DirectiveFeatures } from './directive.feature';

type Feature = DirectiveFeature | ComponentFeature;

function FeaturesDecorator(features: Feature[]) {
  return <T>(componentType: Type<T>) => {
    // queueMicrotask defers execution to the next microtask checkpoint, after
    // Angular's JIT compiler has finished attaching ɵcmp/ɵdir to the class.
    // Without this deferral, ɵcmp/ɵdir may not yet be present when the decorator runs.
    queueMicrotask(() => {
      const def = componentType as ɵDirectiveType<T> & ɵComponentType<T>;

      if (!def.ɵcmp && !def.ɵdir) {
        throw new Error('Ivy is not enabled.');
      }

      if (def.ɵcmp) {
        ComponentFeatures(def, features, def.ɵfac as () => T);
      }
      if (def.ɵdir) {
        DirectiveFeatures(def, features, def.ɵfac as () => T);
      }
    });
  };
}

export { FeaturesDecorator as Features };
