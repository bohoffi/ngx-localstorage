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