import { ɵDirectiveDef, ɵDirectiveType, Type } from '@angular/core';

import { Writable } from './writable.type';

export interface DirectiveFeature {
  <T>(directiveDef: ɵDirectiveDef<T>): void;
  ngInherit?: true;
}

export function DirectiveFeatures<T>(
  directiveType: Type<T>,
  features: DirectiveFeature[],
  factory: () => T
) {
  const directiveDef: Writable<ɵDirectiveDef<T>> = (
    directiveType as ɵDirectiveType<T>
  ).ɵdir as ɵDirectiveDef<T>;

  Object.assign(directiveDef, {
    features: [...(directiveDef.features || []), ...features],
  } as ɵDirectiveDef<T>);

  directiveDef.factory = directiveDef.factory ?? factory;

  for (const feature of directiveDef.features as DirectiveFeature[]) {
    feature(directiveDef);
  }
}
