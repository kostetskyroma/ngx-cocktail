import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Features } from '@ngx-cocktail/common';
import { DestroyableFeature } from '@ngx-cocktail/destroyable';
import { interval, Observable, takeUntil } from 'rxjs';
import { warnStyle, successStyle } from '../../constants';

@Component({
  selector: 'app-destoyable-by-ngif-child',
  templateUrl: './destoyable-by-ngif-child.component.html',
  styleUrls: ['./destoyable-by-ngif-child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
@Features([DestroyableFeature()])
export class DestroyableByNgifChildComponent implements OnInit {
  public destroyed$!: Observable<unknown>;

  ngOnInit(): void {
    console.log(
      '%cDestroyableByNgifChildComponent: start counting ...',
      successStyle
    );
    interval(1000)
      .pipe(takeUntil(this.destroyed$))
      .subscribe((value) => {
        console.log(
          `%cDestroyableByNgifChildComponent: counter ${value}`,
          warnStyle
        );
      });

    this.destroyed$.subscribe(() => {
      console.log(
        '%cDestroyableByNgifChildComponent: I have destroyed all subscriptions',
        successStyle
      );
    });
  }

  ngOnDestroy() {
    console.log(
      '%cDestroyableByNgifChildComponent: ngOnDestroy hook has been executed',
      successStyle
    );
  }
}
