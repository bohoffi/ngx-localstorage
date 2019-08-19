/**
 * Created by bohoffi on 22.05.2017.
*/
import {NgxLocalstorageConfiguration} from '../interfaces';
import { constructKey } from '../utils';

export class PromisableService {

  private readonly _prefix: string;
  private readonly _allowNull: boolean;

  constructor(config?: NgxLocalstorageConfiguration) {
    if (config) {
      this._prefix = config.prefix || this._prefix;
      this._allowNull = config.allowNull || this._allowNull;
    }
  }

  /**
   * Gets the number of entries in the applications local storage.
   */
  count(): Promise<number> {
    return new Promise((resolve, reject) => {
      try {
        resolve(localStorage.length);
      } catch (error) {
        reject(error);
      }
    });
  }

  /**
   * Returns the nth (defined by the index parameter) key in the storage.
   * The order of keys is user-agent defined, so you should not rely on it.
   * @param index   An integer representing the number of the key you want to get the name of. This is a zero-based index.
   */
  getKey(index: number): Promise<string | null> {
    return new Promise<string | null>((resolve, reject) => {
      if (index < 0) {
        reject(new Error('index has to be 0 or greater'));
      }
      try {
        resolve(localStorage.key(index));
      } catch (error) {
        reject(error);
      }
    });
  }

  /**
   * Adds tha value with the given key or updates an existing entry.
   * @param key     Key to store.
   * @param value   Value to store.
   * @param prefix  Optional prefix to overwrite the configured one.
   */
  set(key: string, value: string, prefix?: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      try {
        if (this._allowNull
          || (!this._allowNull && value !== 'null' && value !== null && value !== undefined)) {
          localStorage.setItem(constructKey(key, prefix), value);
        } else {
          return this.remove(key, prefix);
        }
        resolve(true);
      } catch (error) {
        reject(error);
      }
    });
  }

  /**
   * Gets the entry specified by the given key or null.
   * @param key     Key identifying the wanted entry.
   * @param prefix  Optional prefix to overwrite the configured one.
   */
  get(key: string, prefix?: string): Promise<string | null> {
    return new Promise<string | null>((resolve, reject) => {
      try {
        resolve(localStorage.getItem(constructKey(key, prefix)));
      } catch (error) {
        reject(error);
      }
    });
  }

  /**
   * Removes the entry specified by the given key.
   * @param key     Key identifying the entry to remove.
   * @param prefix  Optional prefix to overwrite the configured one.
   */
  remove(key: string, prefix?: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      try {
        localStorage.removeItem(constructKey(key, prefix));
        resolve(true);
      } catch (error) {
        reject(error);
      }
    });
  }

  /**
   * Clears all entries of the applications local storage.
   */
  clear(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      try {
        localStorage.clear();
        resolve(true);
      } catch (error) {
        reject(error);
      }
    });
  }
}
