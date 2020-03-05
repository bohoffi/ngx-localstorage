import { Injectable, Inject } from '@angular/core';

import { NgxLocalstorageConfiguration } from '../interfaces/storage-configuration';
import { PromisableService } from './promisable.service';
import { defaultConfig } from '../utils';
import { NGX_LOCAL_STORAGE_CONFIG } from '../tokens/storage-config';

@Injectable({ providedIn: 'root' })
export class LocalStorageService {
  private readonly configuration: NgxLocalstorageConfiguration;
  private readonly promisable: PromisableService;

  constructor(
    @Inject(NGX_LOCAL_STORAGE_CONFIG) config?: NgxLocalstorageConfiguration
  ) {
    this.configuration = { ...defaultConfig, ...config };

    this.promisable = new PromisableService(this.configuration);
  }

  public get config(): NgxLocalstorageConfiguration {
    return this.configuration;
  }

  public asPromisable(): PromisableService {
    return this.promisable;
  }

  /**
   * Gets the number of entries in the applications local storage.
   */
  public count(): number | undefined {
    try {
      return localStorage.length;
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * Returns the nth (defined by the index parameter) key in the storage.
   * The order of keys is user-agent defined, so you should not rely on it.
   * @param index   An integer representing the number of the key you want to get the name of. This is a zero-based index.
   */
  public getKey(index: number): string | null | undefined {
    if (index < 0) {
      console.error(new Error('index has to be 0 or greater'));
    }
    try {
      return localStorage.key(index);
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * Adds tha value with the given key or updates an existing entry.
   * @param key     Key to store.
   * @param value   Value to store.
   * @param prefix  Optional prefix to overwrite the configured one.
   */
  public set(key: string, value: string, prefix?: string): void {
    if (
      this.configuration.allowNull ||
      (!this.configuration.allowNull &&
        value !== 'null' &&
        value !== null &&
        value !== undefined)
    ) {
      localStorage.setItem(this.constructKey(key, prefix), value);
    } else {
      this.remove(key, prefix);
    }
  }

  /**
   * Gets the entry specified by the given key or null.
   * @param key     Key identifying the wanted entry.
   * @param prefix  Optional prefix to overwrite the configured one.
   */
  public get(key: string, prefix?: string): string | null | undefined {
    try {
      return localStorage.getItem(this.constructKey(key, prefix));
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * Removes the entry specified by the given key.
   * @param key     Key identifying the entry to remove.
   * @param prefix  Optional prefix to overwrite the configured one.
   */
  public remove(key: string, prefix?: string): void {
    try {
      localStorage.removeItem(this.constructKey(key, prefix));
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * Clears all entries of the applications local storage.
   */
  public clear(): void {
    try {
      localStorage.clear();
    } catch (error) {
      console.error(error);
    }
  }

  private constructKey(key: string, prefix?: string): string {
    const prefixToUse = prefix || this.configuration.prefix;
    if (prefixToUse) {
      return `${prefixToUse}_${key}`;
    }
    return key;
  }
}
