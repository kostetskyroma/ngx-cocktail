import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Features } from '@ngx-cocktail/common';
import { DestroyableFeature } from '@ngx-cocktail/destroyable';
import { interval, Observable, takeUntil } from 'rxjs';

@Component({
  selector: 'app-destroyable',
  templateUrl: './destroyable.component.html',
  styleUrls: ['./destroyable.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
@Features([DestroyableFeature()])
export class DestroyableComponent implements OnInit {
  public destroyed$!: Observable<unknown>;

  constructor() {}

  ngOnInit(): void {
    interval(1000)
      .pipe(takeUntil(this.destroyed$))
      .subscribe((value) => {
        console.log('value', value);
      });
  }
}
