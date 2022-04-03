import { OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';

export interface Destroyable extends Partial<OnDestroy> {
  readonly destroyed$: Observable<unknown>;
  ngOnDestroy?(): void;
}
