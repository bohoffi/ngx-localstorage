import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'ngx-localstorage';

interface StoredObject {
  id: number;
  name: string;
}

@Component({
  selector: 'ngx-localstorage-storage-service',
  templateUrl: './storage-service.component.html',
  styles: []
})
export class StorageServiceComponent implements OnInit {

  entryCount = 0;
  storedObject: StoredObject;

  constructor(private lss: LocalStorageService) {
    this.lss.set<StoredObject>('demo-key', {
      id: 1,
      name: 'John Doe'
    })
  }

  ngOnInit() {
    this.entryCount = this.lss.count();

    this.storedObject = this.lss.get<StoredObject>('demo-key');
  }
}
