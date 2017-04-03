/**
 * Created by HOFFM59 on 03.04.2017.
 */
import {Injectable, Optional} from "@angular/core";
import {ModuleConfig} from "../interfaces";

@Injectable()
export class LocalStorageService {

    private _prefix = 'ngx_local_storage';

    constructor(@Optional() config: ModuleConfig) {
        if (config) {
            this._prefix = config.prefix || this._prefix;
        }
    }

    count(): Promise<number> {
        return new Promise((resolve, reject) => {
            try {
                const itemCount = localStorage.length;
                resolve(itemCount);
            } catch (error) {
                reject(error);
            }
        });
    }

    /**
     * Returns the nth (defined by the index parameter) key in the storage.
     * The order of keys is user-agent defined, so you should not rely on it.
     * @param index     An integer representing the number of the key you want to get the name of. This is a zero-based index.
     * @returns {null}
     */
    getKey(index: number): Promise<string> {
        return new Promise((resolve, reject) => {
            if (index < 0) {
                reject(new Error('index has to be 0 or greater'))
            }
            try {
                const key = localStorage.key(index);
                if (typeof key === 'string') {
                    resolve(key);
                }
                reject(new Error(`There is no key with index ${index}`));
            } catch (error) {
                reject(error);
            }
        });
    }

    set(key: string, value: string, prefix?: string): Promise<boolean> {
        return new Promise((resolve, reject) => {
            try {
                localStorage.setItem(`${prefix || this._prefix}_${key}`, value);
                resolve(true);
            } catch (error) {
                reject(error);
            }
        });
    }

    get(key: string, prefix?: string): Promise<string> {
        return new Promise((resolve, reject) => {
            try {
                const item = localStorage.getItem(`${prefix || this._prefix}_${key}`);
                if (typeof item === 'string') {
                    resolve(item);
                }
                reject(new Error(`There is no item with the key ${prefix || this._prefix}_${key}`));
            } catch (error) {
                reject(error);
            }
        });
    }

    remove(key: string, prefix?: string): Promise<boolean> {
        return new Promise((resolve, reject) => {
            try {
                localStorage.removeItem(`${prefix || this._prefix}_${key}`);
                resolve(true);
            } catch (error) {
                reject(error);
            }
        });
    }

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
