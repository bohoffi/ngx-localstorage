import { Injectable, Inject, OnDestroy, EventEmitter, inject, InjectFlags } from '@angular/core';

import { NgxLocalstorageConfiguration } from '../interfaces/storage-configuration';
import { NGX_LOCAL_STORAGE_CONFIG, NGX_LOCAL_STORAGE_DEFAULT_CONFIG } from '../tokens/storage-config';
import { NGX_LOCAL_STORAGE_SERIALIZER } from '../tokens/storage-serializer';
import { StorageSerializer } from '../interfaces/storage-serializer';
import { filter, fromEvent, Observable, Subscription } from 'rxjs';
import { STORAGE, STORAGE_SUPPORT } from '../tokens/storage';
import { WINDOW } from '../tokens/window';
import { isSerializer, isServiceOptions, isString } from '../utils/guards';
import { constructKey } from '../utils/key-utils';
import { ServiceOptions } from '../interfaces/service-options';

const defaultConfig = NGX_LOCAL_STORAGE_DEFAULT_CONFIG();

/**
 * Provides a service to access the localstorage.
 */
@Injectable({ providedIn: 'root' })
export class LocalStorageService extends Observable<StorageEvent> implements OnDestroy {

  /**
   * Configuration used by the service.
   */
  public readonly config: NgxLocalstorageConfiguration;

  private readonly onError = new EventEmitter<string | Error | unknown>();
  private readonly subscriptions = new Subscription();

  private readonly serializer = inject(NGX_LOCAL_STORAGE_SERIALIZER);

  private readonly storageSupport = inject(STORAGE_SUPPORT);

  private readonly storage = inject(STORAGE, InjectFlags.Optional);

  private readonly window = inject(WINDOW, InjectFlags.Optional);

  /**
   * Creates a new instance.
   */
  constructor(
    @Inject(NGX_LOCAL_STORAGE_CONFIG) _config?: NgxLocalstorageConfiguration
  ) {
    super(subscriber => {
      if (!this.storageSupport) {
        subscriber.error(new Error(`Choosen storage '${this.config?.storageType}' is not available`));
      }

      if (this.window) {
        this.subscriptions.add(
          fromEvent<StorageEvent>(this.window, 'storage')
            .pipe(
              filter(event => !!event)
            )
            .subscribe(event => subscriber.next(event))
        );
      }

      this.subscriptions.add(
        this.onError.subscribe(error => subscriber.error(error))
      );
    });

    this.config = { ...defaultConfig, ..._config };
  }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  /**
   * Gets the number of entries in the applications storage.
   */
  public count(): number | undefined {
    try {
      return this.storage?.length;
    } catch (error: unknown) {
      this.error(error);
      return undefined;
    }
  }

  /**
   * Returns the nth (defined by the index parameter) key in the storage.
   * The order of keys is user-agent defined, so you should not rely on it.
   * @param index An integer representing the number of the key you want to get the name of. This is a zero-based index.
   */
  public getKey(index: number): string | null | undefined {
    if (index < 0) {
      this.error(new Error('index has to be 0 or greater'));
    }
    try {
      return this.storage?.key(index);
    } catch (error) {
      this.error(error);
      return undefined;
    }
  }

  /**
   * Adds the value with the given key or updates an existing entry.
   * @param key Key to store.
   * @param value Value to store.
   * @param prefixOrSerializer Optional prefix or serializer to overwrite the configured one.
   * @deprecated from v5 use the new signature `set<T>(key, value, options)`
   */
  public set<T = unknown>(key: string, value: T, prefixOrSerializer?: string | StorageSerializer): void;
  /**
   * Adds the value with the given key or updates an existing entry.
   * @param key Key to store.
   * @param value Value to store.
   * @param prefix Optional prefix to overwrite the configured one.
   * @param serializer Optional serializer.
   * @deprecated from v5 use the new signature `set<T>(key, value, options)`
   */
  public set<T = unknown>(key: string, value: T, prefix?: string, serializer?: StorageSerializer): void;
  /**
   * Adds the value with the given key or updates an existing entry.
   * @param key Key identifying the wanted entry.
   * @param value Value to store.
   * @param options Options for overwriting configuration with the following properties:
   * * `prefix`: (Optional) Prefix to overwrite the configured one.
   * * `serializer`: (Optional) Serializer to overwrite the configured one.
   */
  public set<T = unknown>(key: string, value: T, options?: ServiceOptions): void;
  /**
   * Adds the value with the given key or updates an existing entry.
   * @param key Key to store.
   * @param value Value to store.
   * @param options Optional prefix, serializer or options to overwrite the configuration.
   * @param serializer Optional serializer.
   */
  public set<T = unknown>(key: string, value: T, options?: string | StorageSerializer | ServiceOptions, serializer?: StorageSerializer): void {

    const [prefix, storageSerializer] = this.processServiceOptions(options, serializer);

    if (
      this.config.allowNull ||
      (!this.config.allowNull &&
        `${value}` !== 'null' &&
        value !== null &&
        value !== undefined)
    ) {
      this.storage?.setItem(constructKey(key, prefix, this.config.prefix, this.config.delimiter), storageSerializer.serialize(value));
    } else {
      this.remove(key, prefix);
    }
  }

  /**
   * Gets the entry specified by the given key or null.
   * @param key Key identifying the wanted entry.
   * @param prefixOrSerializer  Optional prefix or serializer to overwrite the configured one.
   * @deprecated from v5 use the new signature `get<T>(key, options)`
   */
  public get<T = unknown>(key: string, prefixOrSerializer?: string | StorageSerializer): T | null | undefined;
  /**
   * Gets the entry specified by the given key or null.
   * @param key Key identifying the wanted entry.
   * @param prefix  Prefix to overwrite the configured one.
   * @param serializer Serializer to overwrite the configured one.
   * @deprecated from v5 use the new signature `get<T>(key, options)`
   */
  public get<T = unknown>(key: string, prefix: string, serializer: StorageSerializer): T | null | undefined;
  /**
   * Gets the entry specified by the given key if existing - otherwise `null`.
   * @param key Key identifying the wanted entry.
   * @param options Options for overwriting configuration with the following properties:
   * * `prefix`: (Optional) Prefix to overwrite the configured one.
   * * `serializer`: (Optional) Serializer to overwrite the configured one.
   */
  public get<T = unknown>(key: string, options?: ServiceOptions): T | null | undefined;
  /**
   * Gets the entry specified by the given key or null.
   * @param key Key identifying the wanted entry.
   * @param options Optional prefix, serializer or options to overwrite the configuration.
   * @param serializer Optional serializer.
   */
  public get<T = unknown>(key: string, options?: string | StorageSerializer | ServiceOptions, serializer?: StorageSerializer): T | null | undefined {

    const [prefix, storageSerializer] = this.processServiceOptions(options, serializer);

    try {
      const constructedKey = constructKey(key, prefix, this.config.prefix, this.config.delimiter);
      const storageItem = this.storage?.getItem(constructedKey);
      return storageItem ? storageSerializer.deserialize<T>(storageItem) : null;
    } catch (error) {
      this.error(error);
      return null;
    }
  }

  /**
   * Removes the entry specified by the given key.
   * @param key Key identifying the entry to remove.
   * @param prefix Optional prefix to overwrite the configured one.
   */
  public remove(key: string, prefix?: string): void {
    try {
      this.storage?.removeItem(constructKey(key, prefix, this.config.prefix, this.config.delimiter));
    } catch (error) {
      this.error(error);
    }
  }

  /**
   * Clears all entries of the applications local storage.
   */
  public clear(): void {
    try {
      this.storage?.clear();
    } catch (error) {
      this.error(error);
    }
  }

  /**
   * Triggers the service to emit the given error.
   * @param error Error to emit through the service.
   */
  public error(error: string | Error | unknown): void {
    this.onError.emit(error);
  }

  private processServiceOptions(options?: string | StorageSerializer | ServiceOptions, serializer?: StorageSerializer): [string | undefined, StorageSerializer] {
    let prefix: string | undefined;

    if (isServiceOptions(options)) {
      prefix = options.prefix;
      serializer = options.serializer || this.serializer;
    } else {
      prefix = isString(options) ? options : undefined;

      if (isSerializer(options)) {
        serializer = options;
      } else {
        serializer = serializer || this.serializer;
      }
    }

    return [prefix, serializer];
  }
}
