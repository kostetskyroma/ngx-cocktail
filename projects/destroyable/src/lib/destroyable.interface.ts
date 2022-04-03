import { OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';

export interface IDestroyable extends Partial<OnDestroy> {
  readonly destroyed$: Observable<unknown>;
  ngOnDestroy?(): void;
}
