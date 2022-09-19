import { StorageSerializer } from '../interfaces/storage-serializer';
import { Injectable } from "@angular/core";

/**
 * Provides a default serialization mechanism while
 */
@Injectable()
export class DefaultSerializer implements StorageSerializer {
  /**
   * @inheritdoc
   */
  public serialize<T = unknown>(value: T): string {
    return JSON.stringify(value);
  }

  /**
   * @inheritdoc
   */
  public deserialize<T = unknown>(storedValue: string): T {
    return JSON.parse(storedValue);
  }
}
