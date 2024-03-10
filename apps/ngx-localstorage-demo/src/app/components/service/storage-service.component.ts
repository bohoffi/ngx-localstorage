// snippet-from-file="./storage-service.component.ts"

import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { LocalStorageService } from 'ngx-localstorage';

interface StoredObject {
  id: number;
  name: string;
}

@Component({
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './storage-service.component.html'
})
export class StorageServiceComponent {
  // snippet "Injecting the service"
  protected readonly storageService = inject(LocalStorageService);
  // snippet

  // snippet "Reading from storage"
  protected readonly storedObject = this.storageService.get<StoredObject>('demo-key');
  // snippet

  constructor() {
    // snippet "Writing to storage"
    this.storageService.set<StoredObject>('demo-key', {
      id: 1,
      name: 'John Doe'
    });
    // snippet
  }
}
