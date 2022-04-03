import { OnDestroy, ɵDirectiveDef, Type } from '@angular/core';
import { Writable } from '@ngx-cocktail/common';
import { Observable } from 'rxjs';

import { Destroyable } from './destroyable.class';
import { IDestroyable } from './destroyable.interface';

export function DestroyableFeature<R>(
  selector?: (x: R) => Observable<unknown>
) {
  return <T extends Type<unknown>>(
    directiveDef: Writable<ɵDirectiveDef<T>>
  ) => {
    const { factory, type } = directiveDef;
    const { ngOnDestroy } = directiveDef.type.prototype as OnDestroy;

    directiveDef.factory = () => {
      const instance = factory?.(type) as T;
      const destroyable = Reflect.construct(Destroyable, []) as IDestroyable;

      Object.assign(instance, destroyable);

      Object.assign(directiveDef, {
        onDestroy() {
          ngOnDestroy?.call(instance);
          destroyable.ngOnDestroy?.call(instance);
        },
      });

      return instance;
    };
  };
}
