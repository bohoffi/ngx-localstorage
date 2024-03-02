import { DestroyRef, Directive, EventEmitter, OnInit, inject } from '@angular/core';
import { ValueAccessor } from '../interfaces/value-accessor';
import { NgControl } from '@angular/forms';
import { isString } from '../utils/guards';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Directive({
  standalone: true
})
export class ControlValueAccessorDirective implements OnInit, ValueAccessor {
  public readonly valueChange = new EventEmitter<unknown>();
  public readonly ngControl = inject(NgControl, { optional: true, self: true });

  private readonly destroyRef = inject(DestroyRef);

  public ngOnInit(): void {
    this.ngControl?.valueChanges?.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(value => {
      this.valueChange.emit(value);
    });
  }

  public writeValue(value: unknown, falsyTransformer?: (() => unknown) | undefined): void {
    const transformedValue = (!value || (isString(value) && value === 'false')) && !!falsyTransformer ? falsyTransformer() : value;
    this.ngControl?.valueAccessor?.writeValue(transformedValue);
  }
  public getValue(): unknown {
    return this.ngControl?.value;
  }
}
