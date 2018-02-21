import { Component, OnInit } from '@angular/core';
import {LocalStorageService} from '../../ngx-localstorage/lib/services/local-storage.service';

@Component({
  selector: 'app-storage-service',
  templateUrl: './storage-service.component.html',
  styleUrls: ['../base/base.scss']
})
export class StorageServiceComponent implements OnInit {

  entryCount: number = 0;

  constructor(private lss: LocalStorageService) { }

  ngOnInit() {
    this.entryCount = this.lss.count()
  }
}
