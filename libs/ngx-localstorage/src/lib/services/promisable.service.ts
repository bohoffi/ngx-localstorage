import { NgxLocalstorageConfiguration } from '../interfaces/storage-configuration';
import { StorageSerializer } from '../interfaces/storage-serializer';
import { isSerializer, isString } from '../utils/guards';
import { constructKey } from '../utils/key-utils';

/**
 * Provides a Promise based service to access the localstorage.
 * @deprecated will be removed with v5
 */
export class PromisableService {

  /**
   * Creates a new instance
   */
  constructor(
    private readonly configuration: NgxLocalstorageConfiguration,
    private readonly defaultSerializer: StorageSerializer,
    private readonly storage: Storage | null
  ) { }

  /**
   * Gets the number of entries in the applications local storage.
   */
  public count(): Promise<number | undefined> {
    return new Promise((resolve, reject) => {
      try {
        resolve(this.storage?.length);
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
  public getKey(index: number): Promise<string | null | undefined> {
    return new Promise((resolve, reject) => {
      if (index < 0) {
        reject(new Error('index has to be 0 or greater'));
      }
      try {
        resolve(this.storage?.key(index));
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
  public set<T = unknown>(key: string, value: T, prefixOrSerializer?: string | StorageSerializer): Promise<boolean>;
  public set<T = unknown>(key: string, value: T, prefixOrSerializer: string | StorageSerializer): Promise<boolean>;
  public set<T = unknown>(key: string, value: T, prefixOrSerializer: string, serializer: StorageSerializer): Promise<boolean>;
  public set<T = unknown>(key: string, value: T, prefixOrSerializer?: string | StorageSerializer, serializer?: StorageSerializer): Promise<boolean> {
    return new Promise((resolve, reject) => {
      try {

        const prefix = isString(prefixOrSerializer) ? prefixOrSerializer : undefined;
        serializer = isSerializer(prefixOrSerializer)
          ? (prefixOrSerializer as StorageSerializer)
          // eslint-disable-next-line no-extra-boolean-cast
          : !!serializer
            ? serializer
            : this.defaultSerializer;

        if (this.configuration.allowNull
          || (!this.configuration.allowNull && `${value}` !== 'null' && value !== null && value !== undefined)) {
          this.storage?.setItem(constructKey(key, prefix, this.configuration.prefix, this.configuration.delimiter), serializer.serialize(value));
        } else {
          resolve(this.remove(key, prefix));
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
  public get<T = unknown>(key: string, prefixOrSerializer?: string | StorageSerializer): Promise<T | null | undefined>;
  public get<T = unknown>(key: string, prefixOrSerializer: string | StorageSerializer): Promise<T | null | undefined>;
  public get<T = unknown>(key: string, prefixOrSerializer: string, serializer: StorageSerializer): Promise<T | null | undefined>;
  public get<T = unknown>(key: string, prefixOrSerializer?: string | StorageSerializer, serializer?: StorageSerializer): Promise<T | null | undefined> {
    return new Promise((resolve, reject) => {
      try {

        const prefix = isString(prefixOrSerializer) ? prefixOrSerializer : undefined;
        serializer = isSerializer(prefixOrSerializer)
          ? (prefixOrSerializer as StorageSerializer)
          // eslint-disable-next-line no-extra-boolean-cast
          : !!serializer
            ? serializer
            : this.defaultSerializer;

        const constructedKey = constructKey(key, prefix, this.configuration.prefix, this.configuration.delimiter);
        const storageItem = this.storage?.getItem(constructedKey);
        resolve(storageItem ? serializer.deserialize(storageItem) : null);
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
  public remove(key: string, prefix?: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      try {
        this.storage?.removeItem(constructKey(key, prefix, this.configuration.prefix, this.configuration.delimiter));
        resolve(true);
      } catch (error) {
        reject(error);
      }
    });
  }

  /**
   * Clears all entries of the applications local storage.
   */
  public clear(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      try {
        this.storage?.clear();
        resolve(true);
      } catch (error) {
        reject(error);
      }
    });
  }
}
