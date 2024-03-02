import { EventEmitter, inject } from '@angular/core';
import { ControlValueAccessorDirective } from '../directives/control-value-accessor.directive';
import { NativeValueAccessorDirective } from '../directives/native-value-accessor.directive';

export interface ValueAccessor {
  valueChange: EventEmitter<unknown>;
  writeValue(value: unknown, falsyTransformer?: () => unknown): void;
  getValue(): unknown;
}

export function injectAccessor(): ValueAccessor {
  const controlAccessor = inject(ControlValueAccessorDirective);
  if (controlAccessor.ngControl) {
    return controlAccessor;
  }
  return inject(NativeValueAccessorDirective);
}
