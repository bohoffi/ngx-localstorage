import { Component } from '@angular/core';

@Component({
  selector: 'ngx-localstorage-directive',
  templateUrl: './directive.component.html',
  styles: []
})
export class DirectiveComponent {

  defaultFalsyTransformer: () => any = () => false;
}
