import { Directive, OnDestroy } from "@angular/core";
import { Subject } from "rxjs";

import { IDestroyable } from "./destroyable.interface";

const destroySubject = Symbol("destroyed");

@Directive({
  selector: "[appDestroyable]",
})
export class Destroyable implements IDestroyable, OnDestroy {
  private readonly [destroySubject] = new Subject();
  readonly destroyed$ = this[destroySubject].asObservable();

  ngOnDestroy() {
    this[destroySubject].next(null);
    this[destroySubject].complete();
  }
}
