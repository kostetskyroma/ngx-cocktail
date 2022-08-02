import { OnDestroy, ɵDirectiveDef, Type } from '@angular/core';
import { Writable } from '@ngx-cocktail/common';

import { Destroyed } from './destroyable.class';
import { Destroyable } from './destroyable.interface';

export function DestroyableFeature() {
  return <T extends Type<unknown>>(
    directiveDef: Writable<ɵDirectiveDef<T>>
  ) => {
    const { factory, type } = directiveDef;
    const { ngOnDestroy } = directiveDef.type.prototype as OnDestroy;

    directiveDef.factory = () => {
      const instance = factory?.(type) as T;
      const destroyed = Reflect.construct(Destroyed, []) as Destroyable;

      Object.assign(instance, destroyed);

      directiveDef.type.prototype.ngOnDestroy = function () {
        ngOnDestroy?.call(this);
        destroyed.ngOnDestroy?.call(this);
      };

      return instance;
    };
  };
}
