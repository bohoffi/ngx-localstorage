/**
 * Defines the librarys serializer.
 */
export interface StorageSerializer {
  /**
   * Prepares the value to be stored as its string representation.
   * @param value Value to be serialized
   */
  serialize<T = unknown>(value: T): string;
  /**
   * Deserializes a stored value.
   * @param storedValue stored value
   */
  deserialize<T = unknown>(storedValue: string): T;
}
