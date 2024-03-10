import { AfterViewInit, DestroyRef, Directive, ElementRef, EventEmitter, Input, inject, numberAttribute } from '@angular/core';
import { valuePathAttribute } from '../utils/coercion';
import { ValueAccessor } from '../interfaces/value-accessor';
import { getPropByPath, setPropByPath } from '../utils/property-utils';
import { debounceTime, fromEvent, map } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

/**
 * Directive handling native control binding.
 *
 * @usageNotes
 *
 * ### Example binding a text input
 *
 * ```html
 * <input
 *   type="text"
 *   id="demo-text-input"
 *   ngxLocalStorage="native-text-input"
 *   initFromStorage
 *   prefix="demo"
 *   forEvent="input"
 *   valuePath="value"
 * />
 * ```
 *
 */
@Directive({
  standalone: true
})
export class NativeValueAccessorDirective implements AfterViewInit, ValueAccessor {
  /**
   * The event to hook onto for observing value changes.
   */
  @Input()
  public forEvent?: string;

  /**
   * Provides a path to access the bound elements value property.
   */
  @Input({
    transform: valuePathAttribute
  })
  public valuePath: string[] = [];

  /**
   * An optional debounce for storage write access after value changes.
   */
  @Input({
    transform: numberAttribute
  })
  public storageDebounce = 0;

  /**
   * Emitter for value changes.
   */
  public readonly valueChange = new EventEmitter<unknown>();

  private readonly elementRef = inject(ElementRef);
  private readonly destroyRef = inject(DestroyRef);

  /**
   * Sets up event observer for value changes.
   */
  public ngAfterViewInit(): void {
    if (this.forEvent) {
      fromEvent(this.elementRef.nativeElement, this.forEvent)
        .pipe(
          takeUntilDestroyed(this.destroyRef),
          debounceTime(this.storageDebounce),
          map(() => this.getValue())
        )
        .subscribe(this.valueChange);
    }
  }

  /**
   * Writes the value to the control.
   * @param value Value to write
   * @param falsyTransformer *optional* transformer handling falsy values
   */
  public writeValue(value: unknown, falsyTransformer?: () => unknown): void {
    setPropByPath(this.elementRef.nativeElement, this.getValuePath(), value, falsyTransformer);
  }

  /**
   * Gets the current control value.
   */
  public getValue(): unknown {
    return getPropByPath(this.elementRef.nativeElement, this.getValuePath());
  }

  private getValuePath(): string[] {
    return this.valuePath.length ? this.valuePath : ['value'];
  }
}
