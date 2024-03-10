// snippet-from-file="./event-stream.component.ts"

import { ChangeDetectionStrategy, Component, DestroyRef, inject } from '@angular/core';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { LocalStorageService } from 'ngx-localstorage';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { BehaviorSubject } from 'rxjs';

@Component({
  standalone: true,
  imports: [AsyncPipe, JsonPipe],
  templateUrl: './event-stream.component.html',
  styleUrls: ['./event-stream.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventStreamComponent {
  // snippet "Injecting the service"
  protected readonly storageService = inject(LocalStorageService);
  // snippet

  protected events = new BehaviorSubject<StorageEvent[]>([]);

  // snippet "Subscribe to the service"
  protected readonly events$ = this.storageService.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(event => {
    this.events.next([...this.events.value, event]);
  });
  // snippet

  constructor(private readonly destroyRef: DestroyRef) {}
}
