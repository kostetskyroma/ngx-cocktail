import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
  inject,
  signal,
} from '@angular/core';
import { Observable, interval } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Features, DestroyableFeature } from '@ngx-cocktail/destroyable';
import { EventLogService } from '../../../../shared/event-log.service';

export const CLEAN_SOURCE = 'clean';

@Component({
  selector: 'app-destroyable-clean',
  templateUrl: './destroyable-clean.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
@Features([DestroyableFeature()])
export class DestroyableCleanComponent implements OnInit, OnDestroy {
  destroyed$!: Observable<unknown>;

  private readonly log = inject(EventLogService);
  readonly counter = signal(0);

  ngOnInit(): void {
    this.log.log('component mounted', 'success', CLEAN_SOURCE);
    this.log.log('starting interval subscription', 'info', CLEAN_SOURCE);

    interval(1000)
      .pipe(takeUntil(this.destroyed$))
      .subscribe((tick) => {
        this.counter.set(tick + 1);
        this.log.log(`tick ${tick + 1}`, 'info', CLEAN_SOURCE);
      });

    this.destroyed$.subscribe(() => {
      this.log.log('destroyed$ fired — all subscriptions cleaned up', 'success', CLEAN_SOURCE);
    });
  }

  ngOnDestroy(): void {
    this.log.log('ngOnDestroy called', 'success', CLEAN_SOURCE);
  }
}
