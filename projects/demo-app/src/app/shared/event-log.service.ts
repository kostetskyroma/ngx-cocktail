import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

export type LogType = 'info' | 'success' | 'warn' | 'error';

export interface LogEntry {
  id: number;
  timestamp: Date;
  message: string;
  type: LogType;
  source: string;
}

let nextId = 0;
const MAX_ENTRIES = 50;

@Injectable({ providedIn: 'root' })
export class EventLogService {
  private readonly _entries$ = new BehaviorSubject<LogEntry[]>([]);
  readonly entries$ = this._entries$.asObservable();

  entriesFor$(source: string) {
    return this.entries$.pipe(
      map((entries) => entries.filter((e) => e.source === source))
    );
  }

  log(message: string, type: LogType = 'info', source = 'app'): void {
    const entries = this._entries$.getValue();
    const next: LogEntry[] = [
      ...entries.slice(-(MAX_ENTRIES - 1)),
      { id: nextId++, timestamp: new Date(), message, type, source },
    ];
    this._entries$.next(next);
  }

  clear(source?: string): void {
    if (source) {
      this._entries$.next(
        this._entries$.getValue().filter((e) => e.source !== source)
      );
    } else {
      this._entries$.next([]);
    }
  }
}
