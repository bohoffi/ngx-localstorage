import {Component} from '@angular/core';
import {ngxLocalStorage} from "../../ngx-localstorage/lib/decorators";

@Component({
  selector: 'app-decorator',
  templateUrl: './decorator.component.html',
  styleUrls: ['./decorator.component.less']
})
export class DecoratorComponent {

  @ngxLocalStorage({key: 'cbox1', prefix: 'demo'})
  boundCheckBox: boolean;
}
