import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'ngx-localstorage-directive',
  templateUrl: './directive.component.html'
})
export class DirectiveComponent {
  defaultFalsyTransformer: () => any = () => false;

  protected model: string | null = null;

  protected readonly control = new FormControl<string | undefined>(undefined, {
    nonNullable: true
  });
}
