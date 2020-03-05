import { NgxLocalstorageConfiguration } from '../interfaces/storage-configuration';
import { StorageSerializer } from '../interfaces/storage-serializer';
import { constructKey } from '../utils';

export class PromisableService {

  constructor(
    private configuration: NgxLocalstorageConfiguration,
    private defaultSerializer: StorageSerializer
  ) { }

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
   * Adds the value with the given key or updates an existing entry.
   * @param key     Key to store.
   * @param value   Value to store.
   * @param prefixOrSerializer  Optional prefix or serializer to overwrite the configured one.
   * @param serializer  Optional serilizer.
   */
  public set(key: string, value: any, prefixOrSerializer?: string | StorageSerializer): Promise<boolean>;
  public set(key: string, value: any, prefixOrSerializer: string | StorageSerializer): Promise<boolean>;
  public set(key: string, value: any, prefixOrSerializer: string, serializer: StorageSerializer): Promise<boolean>;
  public set(key: string, value: any, prefixOrSerializer?: string | StorageSerializer, serializer?: StorageSerializer): Promise<boolean> {
    return new Promise((resolve, reject) => {
      try {

        const prefix = typeof prefixOrSerializer === 'string' ? prefixOrSerializer : undefined;
        serializer = (prefixOrSerializer as StorageSerializer)
          ? (prefixOrSerializer as StorageSerializer)
          : !!serializer
            ? serializer
            : this.defaultSerializer;

        if (this.configuration.allowNull
          || (!this.configuration.allowNull && value !== 'null' && value !== null && value !== undefined)) {
          localStorage.setItem(constructKey(key, prefix, this.configuration.prefix), serializer.serialize(value));
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
   * @param prefixOrSerializer  Optional prefix or serializer to overwrite the configured one.
   * @param serializer  Optional serilizer.
   */
  public get(key: string, prefixOrSerializer?: string | StorageSerializer): Promise<any | null | undefined>;
  public get(key: string, prefixOrSerializer: string | StorageSerializer): Promise<any | null | undefined>;
  public get(key: string, prefixOrSerializer: string, serializer: StorageSerializer): Promise<any | null | undefined>;
  public get(key: string, prefixOrSerializer?: string | StorageSerializer, serializer?: StorageSerializer): Promise<any | null | undefined> {
    return new Promise<any | null | undefined>((resolve, reject) => {
      try {

        const prefix = typeof prefixOrSerializer === 'string' ? prefixOrSerializer : undefined;
        serializer = (prefixOrSerializer as StorageSerializer)
          ? (prefixOrSerializer as StorageSerializer)
          : !!serializer
            ? serializer
            : this.defaultSerializer;

        resolve(serializer.deserialize(localStorage.getItem(constructKey(key, prefix, this.configuration.prefix))));
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
        localStorage.removeItem(constructKey(key, prefix, this.configuration.prefix));
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
