import { AfterViewInit, DestroyRef, Directive, ElementRef, EventEmitter, Input, Output, booleanAttribute, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { filter } from 'rxjs/operators';
import { LocalStorageService } from '../services/ngx-localstorage.service';
import { ControlValueAccessorDirective } from './control-value-accessor.directive';
import { NativeValueAccessorDirective } from './native-value-accessor.directive';
import { injectAccessor } from '../interfaces/value-accessor';

/**
 * Provide a directive to directly interact with stored values.
 */
@Directive({
  selector: '[ngxLocalStorage]',
  standalone: true,
  hostDirectives: [
    ControlValueAccessorDirective,
    {
      directive: NativeValueAccessorDirective,
      inputs: ['forEvent', 'valuePath', 'storageDebounce']
    }
  ]
})
export class LocalStorageDirective implements AfterViewInit {
  /**
   * The key to use with localstorage.
   */
  @Input('ngxLocalStorage')
  public key = '';

  /**
   * The keys prefix to use.
   */
  @Input()
  public prefix?: string;

  /**
   * Flag if the bound elements value should be initialized from storage.
   */
  @Input({
    transform: booleanAttribute
  })
  public initFromStorage = false;

  /**
   * An optional transformer to handle falsy values.
   */
  @Input()
  public falsyTransformer?: () => unknown;

  /**
   * Event which gets fired when a bound value got stored.
   */
  @Output()
  public storedValue = new EventEmitter<unknown>();

  private readonly destroyRef = inject(DestroyRef);

  private readonly accessor = injectAccessor();

  /**
   * Creates a new instance.
   */
  constructor(private readonly elementRef: ElementRef, private readonly storageService: LocalStorageService) {}

  /**
   * AfterViewInit lifecycle hook.
   */
  public ngAfterViewInit(): void {
    this.initKey();

    this.storageService
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        // TODO: filter should be more accurate
        filter((ev: StorageEvent) => !!ev.key && ev.key.indexOf(this.key) >= 0)
      )
      .subscribe((ev: StorageEvent) => {
        this.accessor.writeValue(ev.newValue, this.falsyTransformer);
      });

    this.checkInitFromStorage();
    this.accessor.valueChange.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(value => {
      this.storageService.set(this.key, value, {
        prefix: this.prefix
      });

      this.storedValue.emit(value);
    });
  }

  /**
   * Initalizes the from either the given value or the elements id or name property.
   */
  private initKey(): void {
    if (!this.key) {
      if (!this.elementRef.nativeElement.id && !this.elementRef.nativeElement.name) {
        this.storageService.error(new Error('No key or element id or name supplied!'));
      }
      this.key = this.elementRef.nativeElement.id || this.elementRef.nativeElement.name;
    }
  }

  /**
   * Initializes the elements value from storage.
   */
  private checkInitFromStorage(): void {
    if (this.initFromStorage) {
      const storedValue = this.storageService.get(this.key, {
        prefix: this.prefix
      });

      try {
        this.accessor.writeValue(storedValue, this.falsyTransformer);
      } catch (error) {
        this.storageService.error(error);
      }
    }
  }
}
