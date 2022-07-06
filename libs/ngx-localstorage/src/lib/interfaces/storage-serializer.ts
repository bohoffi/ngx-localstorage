/**
 * Defines the librarys serializer.
 */
export interface StorageSerializer<T = any> {
    /**
     * Prepares the value to be stored as its string representation.
     * @param value Value to be serialized
     */
    serialize(value: T): string;
    /**
     * Deserializes a stored value.
     * @param storedValue stored value
     */
    deserialize(storedValue: string): T;
}
