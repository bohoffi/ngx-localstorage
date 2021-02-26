import { Injectable, Inject } from '@angular/core';

import { NgxLocalstorageConfiguration } from '../interfaces/storage-configuration';
import { PromisableService } from './promisable.service';
import { defaultConfig, constructKey, isSerializer } from '../utils';
import { NGX_LOCAL_STORAGE_CONFIG } from '../tokens/storage-config';
import { NGX_LOCAL_STORAGE_SERIALIZER } from '../tokens/storage-serializer';
import { StorageSerializer } from '../interfaces/storage-serializer';

/**
 * Provides a service to access the localstorage.
 */
@Injectable({ providedIn: 'root' })
export class LocalStorageService {

  private readonly promisable: PromisableService;
  private readonly storage: Storage;

  /**
   * Creates a new instance.
   */
  constructor(
    @Inject(NGX_LOCAL_STORAGE_SERIALIZER) private readonly defaultSerializer: StorageSerializer,
    @Inject(NGX_LOCAL_STORAGE_CONFIG) public readonly config?: NgxLocalstorageConfiguration
  ) {
    this.config = { ...defaultConfig, ...config };
    this.storage = this.config.storage;

    this.promisable = new PromisableService(this.config, this.defaultSerializer);
  }

  /**
   * Returns a service variant based on Promises.
   */
  public asPromisable(): PromisableService {
    return this.promisable;
  }

  /**
   * Gets the number of entries in the applications local storage.
   */
  public count(): number | undefined {
    try {
      return this.storage.length;
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
      return this.storage.key(index);
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * Adds the value with the given key or updates an existing entry.
   * @param key     Key to store.
   * @param value   Value to store.
   * @param prefixOrSerializer  Optional prefix or serializer to overwrite the configured one.
   */
  public set(key: string, value: any, prefixOrSerializer?: string | StorageSerializer): void;
  /**
   * Adds the value with the given key or updates an existing entry.
   * @param key     Key to store.
   * @param value   Value to store.
   * @param prefixOrSerializer  prefix or serializer to overwrite the configured one.
   */
  public set(key: string, value: any, prefixOrSerializer: string | StorageSerializer): void;
  /**
   * Adds the value with the given key or updates an existing entry.
   * @param key     Key to store.
   * @param value   Value to store.
   * @param prefix  Optional prefix to overwrite the configured one.
   * @param serializer  Optional serilizer.
   */
  public set(key: string, value: any, prefix: string, serializer: StorageSerializer): void;
  /**
   * Adds the value with the given key or updates an existing entry.
   * @param key     Key to store.
   * @param value   Value to store.
   * @param prefixOrSerializer  Optional prefix or serializer to overwrite the configured one.
   * @param serializer  Optional serilizer.
   */
  public set(key: string, value: any, prefixOrSerializer?: string | StorageSerializer, serializer?: StorageSerializer): void {

    const prefix = typeof prefixOrSerializer === 'string' ? prefixOrSerializer : undefined;
    serializer = isSerializer(prefixOrSerializer)
      ? (prefixOrSerializer as StorageSerializer)
      : !!serializer
        ? serializer
        : this.defaultSerializer;

    if (
      this.config.allowNull ||
      (!this.config.allowNull &&
        value !== 'null' &&
        value !== null &&
        value !== undefined)
    ) {
      this.storage.setItem(constructKey(key, prefix, this.config.prefix), serializer.serialize(value));
    } else {
      this.remove(key, constructKey(key, prefix, this.config.prefix));
    }
  }

  /**
   * Gets the entry specified by the given key or null.
   * @param key     Key identifying the wanted entry.
   * @param prefixOrSerializer  Optional prefix or serializer to overwrite the configured one.
   * @param serializer  Optional serilizer.
   */
  public get(key: string, prefixOrSerializer?: string | StorageSerializer): any | null | undefined;
  /**
   * Gets the entry specified by the given key or null.
   * @param key     Key identifying the wanted entry.
   * @param prefixOrSerializer  prefix or serializer to overwrite the configured one.
   */
  public get(key: string, prefixOrSerializer: string | StorageSerializer): any | null | undefined;
  /**
   * Gets the entry specified by the given key or null.
   * @param key     Key identifying the wanted entry.
   * @param prefix  prefix or serializer to overwrite the configured one.
   * @param serializer serilizer.
   */
  public get(key: string, prefix: string, serializer: StorageSerializer): any | null | undefined;
  /**
   * Gets the entry specified by the given key or null.
   * @param key     Key identifying the wanted entry.
   * @param prefixOrSerializer  Optional prefix or serializer to overwrite the configured one.
   * @param serializer  Optional serilizer.
   */
  public get(key: string, prefixOrSerializer?: string | StorageSerializer, serializer?: StorageSerializer): any | null | undefined {

    const prefix = typeof prefixOrSerializer === 'string' ? prefixOrSerializer : undefined;
    serializer = isSerializer(prefixOrSerializer)
      ? (prefixOrSerializer as StorageSerializer)
      : !!serializer
        ? serializer
        : this.defaultSerializer;

    try {
      return serializer.deserialize(this.storage.getItem(constructKey(key, prefix, this.config.prefix)));
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
      this.storage.removeItem(constructKey(key, prefix, this.config.prefix));
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * Clears all entries of the applications local storage.
   */
  public clear(): void {
    try {
      this.storage.clear();
    } catch (error) {
      console.error(error);
    }
  }
}
