import { NgDocPage } from '@ng-doc/core';
import UsageCategory from '../ng-doc.category';
import { StorageServiceComponent } from '../../../components/service/storage-service.component';
import { EventStreamComponent } from '../../../components/service/event-stream.component';

const LocalStorageService: NgDocPage = {
  title: `LocalStorageService`,
  mdFile: './index.md',
  route: `service`,
  category: UsageCategory,
  order: 2,
  demos: {
    StorageServiceComponent,
    EventStreamComponent
  }
};

export default LocalStorageService;
