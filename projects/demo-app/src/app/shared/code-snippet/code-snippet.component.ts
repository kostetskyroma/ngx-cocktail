import {
  ChangeDetectionStrategy,
  Component,
  Input,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-code-snippet',
  templateUrl: './code-snippet.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class CodeSnippetComponent {
  @Input({ required: true }) code!: string;
  @Input() label?: string;
  @Input() labelClass?: string;

  readonly copied = signal(false);

  async copyToClipboard(): Promise<void> {
    try {
      await navigator.clipboard.writeText(this.code);
      this.copied.set(true);
      setTimeout(() => this.copied.set(false), 2000);
    } catch {
      // Clipboard API not available
    }
  }
}
