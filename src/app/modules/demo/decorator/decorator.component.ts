import {Component} from '@angular/core';
import {ngxLocalStorage} from '../../ngx-localstorage/lib/decorators';

@Component({
  selector: 'app-decorator',
  templateUrl: './decorator.component.html',
  styleUrls: ['../base/base.scss']
})
export class DecoratorComponent {

  @ngxLocalStorage({key: 'cbox1', prefix: 'demo', nullTransformer: () => false})
  boundBoolean: boolean;

  @ngxLocalStorage({key: 'txt1', prefix: 'demo'})
  boundText: string;
}
