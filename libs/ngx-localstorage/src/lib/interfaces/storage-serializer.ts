export interface StorageSerializer<T = any> {
    serialize(value: T): string;
    deserialize(storedValue: string): T;
}
