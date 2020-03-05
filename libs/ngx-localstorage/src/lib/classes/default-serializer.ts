import { StorageSerializer } from '../interfaces/storage-serializer';

export class DefaultSerializer implements StorageSerializer {
    public serialize(value: any): string {
        return JSON.stringify(value);
    }

    public deserialize(storedValue: string): any {
        return JSON.parse(storedValue);
    }
}