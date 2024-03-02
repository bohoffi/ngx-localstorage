import { AfterViewInit, DestroyRef, Directive, ElementRef, EventEmitter, Input, Output, inject, numberAttribute } from '@angular/core';
import { valuePathAttribute } from '../utils/coercion';
import { ValueAccessor } from '../interfaces/value-accessor';
import { getPropByPath, setPropByPath } from '../utils/property-utils';
import { debounceTime, fromEvent, map } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Directive({
  standalone: true
})
export class NativeValueAccessorDirective implements AfterViewInit, ValueAccessor {
  /**
   * The event to hook onto value changes.
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

  @Output()
  public readonly valueChange = new EventEmitter<unknown>();

  private readonly elementRef = inject(ElementRef);
  private readonly destroyRef = inject(DestroyRef);

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

  public writeValue(value: unknown, falsyTransformer?: () => unknown): void {
    setPropByPath(this.elementRef.nativeElement, this.getValuePath(), value, falsyTransformer);
  }

  public getValue(): unknown {
    return getPropByPath(this.elementRef.nativeElement, this.getValuePath());
  }

  private getValuePath(): string[] {
    return this.valuePath.length ? this.valuePath : ['value'];
  }
}
