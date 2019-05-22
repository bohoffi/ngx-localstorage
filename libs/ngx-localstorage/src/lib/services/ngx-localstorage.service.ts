import {Injectable, Optional, Inject} from '@angular/core';

import {ModuleConfig} from '../interfaces';
import {PromisableService} from './promisable.service';
import {defaultConfig} from '../utils';
import { ModuleConfigToken } from '../token';

@Injectable({providedIn: 'root'})
export class LocalStorageService {
  private readonly _prefix: string;
  private readonly _allowNull: boolean;
  private readonly _promisable: PromisableService;

  constructor(@Inject(ModuleConfigToken) config?: ModuleConfig) {
    if (config) {
      this._prefix = config.prefix || defaultConfig.prefix;
      this._allowNull = config.allowNull || defaultConfig.allowNull;
    }
    this._promisable = new PromisableService({
      allowNull: this._allowNull,
      prefix: this._prefix
    });
  }

  asPromisable(): PromisableService {
    return this._promisable;
  }

  /**
   * Gets the number of entries in the applications local storage.
   */
  count(): number | undefined {
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
  getKey(index: number): string | null | undefined {
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
  set(key: string, value: string, setAsJson: boolean = false, prefix?: string): void {
    if (
      this._allowNull ||
      (!this._allowNull &&
        value !== 'null' &&
        value !== null &&
        value !== undefined)
    ) {
			let valueToStore: any;
			if (setAsJson) {
				valueToStore = JSON.stringify(value);
			} else {
				valueToStore = value;
			}
			localStorage.setItem(`${prefix || this._prefix}_${key}`, valueToStore);
    } else {
      this.remove(key, prefix);
    }
  }

  /**
   * Gets the entry specified by the given key or null.
   * @param key     Key identifying the wanted entry.
   * @param prefix  Optional prefix to overwrite the configured one.
   */
  get(key: string, getAsJson: boolean = false, prefix?: string): string | null | undefined {
    try {
			if (getAsJson) {
				return JSON.parse(localStorage.getItem(`${prefix || this._prefix}_${key}`));
			} else {
				return localStorage.getItem(`${prefix || this._prefix}_${key}`);
			}
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * Removes the entry specified by the given key.
   * @param key     Key identifying the entry to remove.
   * @param prefix  Optional prefix to overwrite the configured one.
   */
  remove(key: string, prefix?: string): void {
    try {
      localStorage.removeItem(`${prefix || this._prefix}_${key}`);
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * Clears all entries of the applications local storage.
   */
  clear(): void {
    try {
      localStorage.clear();
    } catch (error) {
      console.error(error);
    }
  }
}
