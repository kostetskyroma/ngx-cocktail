import { Directive } from '@angular/core';
import { Subject } from 'rxjs';
import { Destroyable } from './destroyable.interface';

const destroySubject = Symbol('destroyed');

@Directive()
export abstract class Destroyed implements Destroyable {
  private readonly [destroySubject] = new Subject();
  readonly destroyed$ = this[destroySubject].asObservable();

  ngOnDestroy() {
    this[destroySubject].next(null);
    this[destroySubject].complete();
  }
}
