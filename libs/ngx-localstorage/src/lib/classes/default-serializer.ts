import { StorageSerializer } from '../interfaces/storage-serializer';

/**
 * Provides a default serialization mechanism while
 */
export class DefaultSerializer implements StorageSerializer {
    /**
     * @inheritdoc
     */
    public serialize(value: any): string {
        return JSON.stringify(value);
    }

    /**
     * @inheritdoc
     */
    public deserialize(storedValue: string): any {
        return JSON.parse(storedValue);
    }
}