import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'ngx-localstorage';

@Component({
  selector: 'app-storage-service',
  templateUrl: './storage-service.component.html',
  styleUrls: ['../base/base.scss']
})
export class StorageServiceComponent implements OnInit {

  entryCount = 0;
  storedObject: any;

  constructor(private lss: LocalStorageService) {
    this.lss.set('demo-key', {
      id: 1,
      name: 'John Doe'
    })
  }

  ngOnInit() {
    this.entryCount = this.lss.count();

    this.storedObject = this.lss.get('demo-key') as { id: number; name: string; };
  }
}
