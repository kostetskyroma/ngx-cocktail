import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
  signal,
} from '@angular/core';
import { interval } from 'rxjs';
import { EventLogService } from '../../../../shared/event-log.service';

export const LEAKY_SOURCE = 'leaky';

// Intentionally no @Features decorator and no cleanup — demonstrates the leak
@Component({
  selector: 'app-destroyable-leaky',
  templateUrl: './destroyable-leaky.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class DestroyableLeakyComponent implements OnInit {
  private readonly log = inject(EventLogService);
  readonly counter = signal(0);

  ngOnInit(): void {
    this.log.log('component mounted', 'warn', LEAKY_SOURCE);
    this.log.log('starting interval — no cleanup!', 'warn', LEAKY_SOURCE);

    // No takeUntil, no unsubscribe, no ngOnDestroy
    interval(1000).subscribe((tick) => {
      this.counter.set(tick + 1);
      this.log.log(`tick ${tick + 1} (still running after unmount?)`, 'warn', LEAKY_SOURCE);
    });
  }
}
