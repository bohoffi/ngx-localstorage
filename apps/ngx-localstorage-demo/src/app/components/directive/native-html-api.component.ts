import { Component } from '@angular/core';
import { LocalStorageDirective } from 'ngx-localstorage';

@Component({
  standalone: true,
  templateUrl: './native-html-api.component.html',
  imports: [LocalStorageDirective]
})
export class NativeHtmlApiComponent {
  protected readonly defaultFalsyTransformer: () => unknown = () => false;
}
