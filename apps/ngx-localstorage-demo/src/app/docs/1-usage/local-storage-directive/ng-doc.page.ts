import { NgDocPage } from '@ng-doc/core';
import UsageCategory from '../ng-doc.category';
import { NativeHtmlApiComponent } from '../../../components/directive/native-html-api.component';
import { ReactiveFormsApiComponent } from '../../../components/directive/reactive-forms-api.component';

const LocalStorageDirective: NgDocPage = {
  title: `LocalStorageDirective`,
  mdFile: './index.md',
  route: `directive`,
  category: UsageCategory,
  order: 1,
  demos: {
    NativeHtmlApiComponent,
    ReactiveFormsApiComponent
  }
};

export default LocalStorageDirective;
