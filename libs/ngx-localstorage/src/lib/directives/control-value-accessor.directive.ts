import { DestroyRef, Directive, EventEmitter, OnInit, inject } from '@angular/core';
import { ValueAccessor } from '../interfaces/value-accessor';
import { NgControl } from '@angular/forms';
import { isString } from '../utils/guards';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

/**
 * Directive handling `ReactiveForms` binding.
 *
 * @usageNotes
 *
 * ### Example binding a text input
 *
 * ```html
 * <input
 *   type="text"
 *   id="demo-text-input"
 *   controlValueAccessor
 *   initFromStorage
 *   prefix="demo"
 *   [formControl]="textControl"
 * />
 * ```
 */
@Directive({
  standalone: true
})
export class ControlValueAccessorDirective implements OnInit, ValueAccessor {
  /**
   * Emitter for value changes.
   */
  public readonly valueChange = new EventEmitter<unknown>();
  /**
   * The control to bind to.
   */
  public readonly ngControl = inject(NgControl, { optional: true, self: true });

  private readonly destroyRef = inject(DestroyRef);

  /**
   * Sets up event observer for value changes.
   */
  public ngOnInit(): void {
    this.ngControl?.valueChanges?.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(value => {
      this.valueChange.emit(value);
    });
  }

  /**
   * Writes the value to the control.
   * @param value Value to write
   * @param falsyTransformer *optional* transformer handling falsy values
   */
  public writeValue(value: unknown, falsyTransformer?: (() => unknown) | undefined): void {
    const transformedValue = (!value || (isString(value) && value === 'false')) && !!falsyTransformer ? falsyTransformer() : value;
    this.ngControl?.valueAccessor?.writeValue(transformedValue);
  }

  /**
   * Gets the current control value.
   */
  public getValue(): unknown {
    return this.ngControl?.value;
  }
}
