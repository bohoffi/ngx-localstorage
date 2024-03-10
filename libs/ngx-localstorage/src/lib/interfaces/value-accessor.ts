import { EventEmitter, inject } from '@angular/core';
import { ControlValueAccessorDirective } from '../directives/control-value-accessor.directive';
import { NativeValueAccessorDirective } from '../directives/native-value-accessor.directive';

/**
 * Base implementation contract for value accessors.
 */
export interface ValueAccessor {
  /**
   * Emitter for value changes.
   */
  valueChange: EventEmitter<unknown>;
  /**
   * Writes the value to the control.
   * @param value Value to write
   * @param falsyTransformer *optional* transformer handling falsy values
   */
  writeValue(value: unknown, falsyTransformer?: () => unknown): void;
  /**
   * Gets the current control value.
   */
  getValue(): unknown;
}

/**
 * Injects the matching value accessor depending on whether an `NgControl` is bound or not.
 * @returns directive mathing the binding mode
 */
export function injectAccessor(): ValueAccessor {
  const controlAccessor = inject(ControlValueAccessorDirective);
  if (controlAccessor.ngControl) {
    return controlAccessor;
  }
  return inject(NativeValueAccessorDirective);
}
