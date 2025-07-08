import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Features } from '@ngx-cocktail/common';
import { DestroyableFeature } from '@ngx-cocktail/destroyable';
import { interval, Observable, takeUntil } from 'rxjs';
import { warnStyle, successStyle } from './../../constants';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-destoyable-by-path',
  templateUrl: './destoyable-by-path.component.html',
  styleUrls: ['./destoyable-by-path.component.scss'],
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
@Features([DestroyableFeature()])
export class DestroyableByPathComponent implements OnInit {
  public destroyed$!: Observable<unknown>;

  ngOnInit(): void {
    console.log(
      '%cDestroyableByPathComponent: start counting ...',
      successStyle
    );

    interval(1000)
      .pipe(takeUntil(this.destroyed$))
      .subscribe((value) => {
        console.log(
          `%cDestroyableByPathComponent: counter ${value}`,
          warnStyle
        );
      });

    this.destroyed$.subscribe(() =>
      console.log(
        '%cDestroyableByPathComponent: I have destroyed all subscriptions',
        successStyle
      )
    );
  }

  ngOnDestroy() {
    console.log(
      '%cDestroyableByPathComponent: ngOnDestroy hook has been executed',
      successStyle
    );
  }
}
