import { ɵComponentType, ɵDirectiveType, Type } from "@angular/core";
import { ComponentFeature, ComponentFeatures } from "./component.feature";
import { DirectiveFeature, DirectiveFeatures } from "./directive.feature";

type Feature = DirectiveFeature | ComponentFeature;

function FeaturesDecorator(features: Feature[]) {
  return <T>(componentType: Type<T>) => {
    Promise.resolve().then(() => {
      const def: any = componentType as ɵDirectiveType<T> & ɵComponentType<T>; // TODO: fix any

      if (!def.ɵcmp && !def.ɵdir) {
        throw new Error("Ivy is not enabled.");
      }

      if (def.ɵcmp) {
        ComponentFeatures(def, features, def.ɵfac);
      }
      if (def.ɵdir) {
        DirectiveFeatures(def, features, def.ɵfac);
      }
    });
  };
}

export { FeaturesDecorator as Features };
