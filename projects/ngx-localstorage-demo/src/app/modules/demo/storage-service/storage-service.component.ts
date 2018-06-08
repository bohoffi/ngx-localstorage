import { Component, OnInit } from '@angular/core';
import {LocalStorageService} from '../../../../../../ngx-localstorage/src/public_api';

@Component({
  selector: 'app-storage-service',
  templateUrl: './storage-service.component.html',
  styleUrls: ['../base/base.scss']
})
export class StorageServiceComponent implements OnInit {

  entryCount = 0;

  constructor(private lss: LocalStorageService) { }

  ngOnInit() {
    this.entryCount = this.lss.count();
  }
}
