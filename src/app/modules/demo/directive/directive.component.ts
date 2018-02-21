import {Component} from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['../base/base.scss']
})
export class DirectiveComponent {

  defaultFalsyTransformer: () => any = () => false;
}
