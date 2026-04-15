import {
  AfterViewChecked,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  ViewChild,
  inject,
} from '@angular/core';
import { AsyncPipe, DatePipe } from '@angular/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { EventLogService, LogEntry, LogType } from '../event-log.service';

@Component({
  selector: 'app-event-log-panel',
  templateUrl: './event-log-panel.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [AsyncPipe, DatePipe],
})
export class EventLogPanelComponent
  implements OnInit, OnChanges, AfterViewChecked
{
  @Input() source?: string;
  @ViewChild('scrollContainer') scrollContainer?: ElementRef<HTMLElement>;

  private readonly logService = inject(EventLogService);
  private readonly cdr = inject(ChangeDetectorRef);

  entries$!: Observable<LogEntry[]>;
  private pendingScroll = false;

  ngOnInit(): void {
    this.initStream();
  }

  ngOnChanges(): void {
    this.initStream();
  }

  ngAfterViewChecked(): void {
    if (this.pendingScroll) {
      const el = this.scrollContainer?.nativeElement;
      if (el) el.scrollTop = el.scrollHeight;
      this.pendingScroll = false;
    }
  }

  clear(): void {
    this.logService.clear(this.source);
  }

  badgeClass(type: LogType): string {
    const map: Record<LogType, string> = {
      success: 'bg-emerald-500/20 text-emerald-400 ring-1 ring-emerald-500/30',
      warn: 'bg-amber-500/20 text-amber-400 ring-1 ring-amber-500/30',
      error: 'bg-red-500/20 text-red-400 ring-1 ring-red-500/30',
      info: 'bg-sky-500/20 text-sky-400 ring-1 ring-sky-500/30',
    };
    return map[type];
  }

  private initStream(): void {
    const base$ = this.source
      ? this.logService.entriesFor$(this.source)
      : this.logService.entries$;

    this.entries$ = base$.pipe(
      tap(() => {
        this.pendingScroll = true;
        this.cdr.markForCheck();
      })
    );
  }
}
