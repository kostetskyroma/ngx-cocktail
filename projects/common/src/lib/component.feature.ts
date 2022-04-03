import { ɵComponentDef, ɵComponentType, Type } from '@angular/core';

import { Writable } from './writable.type';
import { DirectiveFeature } from './directive.feature';

export interface ComponentFeature extends DirectiveFeature {
  <T>(componentDef: ɵComponentDef<T>): void;
  ngInherit?: true;
}

export function ComponentFeatures<T>(
  componentType: Type<T>,
  features: ComponentFeature[],
  factory: () => T
) {
  const componentDef: Writable<ɵComponentDef<T>> = (
    componentType as ɵComponentType<T>
  ).ɵcmp as ɵComponentDef<T>;

  Object.assign(componentDef, {
    features: [...(componentDef.features || []), ...features],
  } as ɵComponentDef<T>);

  componentDef.factory = componentDef.factory ?? factory;

  for (const feature of componentDef.features as ComponentFeature[]) {
    feature(componentDef);
  }
}
