import { Component } from '@angular/core';
import { LocalStorageDirective } from 'ngx-localstorage';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [LocalStorageDirective, ReactiveFormsModule],
  templateUrl: './reactive-forms-api.component.html'
})
export class ReactiveFormsApiComponent {
  protected readonly formGroup = new FormGroup({
    checkbox: new FormControl<boolean>(false),
    text: new FormControl<string>('')
  });

  protected readonly defaultFalsyTransformer: () => unknown = () => false;
}
