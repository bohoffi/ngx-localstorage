/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable, Inject } from '@angular/core';
import { PromisableService } from './promisable.service';
import { defaultConfig } from './utils';
import { ModuleConfigToken } from './token';
export class LocalStorageService {
    /**
     * @param {?=} config
     */
    constructor(config) {
        if (config) {
            this._prefix = config.prefix || defaultConfig.prefix;
            this._allowNull = config.allowNull || defaultConfig.allowNull;
        }
        this._promisable = new PromisableService({
            allowNull: this._allowNull,
            prefix: this._prefix
        });
    }
    /**
     * @return {?}
     */
    asPromisable() {
        return this._promisable;
    }
    /**
     * Gets the number of entries in the applications local storage.
     * @return {?}
     */
    count() {
        try {
            return localStorage.length;
        }
        catch (error) {
            console.error(error);
        }
    }
    /**
     * Returns the nth (defined by the index parameter) key in the storage.
     * The order of keys is user-agent defined, so you should not rely on it.
     * @param {?} index   An integer representing the number of the key you want to get the name of. This is a zero-based index.
     * @return {?}
     */
    getKey(index) {
        if (index < 0) {
            console.error(new Error('index has to be 0 or greater'));
        }
        try {
            return localStorage.key(index);
        }
        catch (error) {
            console.error(error);
        }
    }
    /**
     * Adds tha value with the given key or updates an existing entry.
     * @param {?} key     Key to store.
     * @param {?} value   Value to store.
     * @param {?=} prefix  Optional prefix to overwrite the configured one.
     * @return {?}
     */
    set(key, value, prefix) {
        if (this._allowNull ||
            (!this._allowNull &&
                value !== 'null' &&
                value !== null &&
                value !== undefined)) {
            localStorage.setItem(`${prefix || this._prefix}_${key}`, value);
        }
        else {
            this.remove(key, prefix);
        }
    }
    /**
     * Gets the entry specified by the given key or null.
     * @param {?} key     Key identifying the wanted entry.
     * @param {?=} prefix  Optional prefix to overwrite the configured one.
     * @return {?}
     */
    get(key, prefix) {
        try {
            return localStorage.getItem(`${prefix || this._prefix}_${key}`);
        }
        catch (error) {
            console.error(error);
        }
    }
    /**
     * Removes the entry specified by the given key.
     * @param {?} key     Key identifying the entry to remove.
     * @param {?=} prefix  Optional prefix to overwrite the configured one.
     * @return {?}
     */
    remove(key, prefix) {
        try {
            localStorage.removeItem(`${prefix || this._prefix}_${key}`);
        }
        catch (error) {
            console.error(error);
        }
    }
    /**
     * Clears all entries of the applications local storage.
     * @return {?}
     */
    clear() {
        try {
            localStorage.clear();
        }
        catch (error) {
            console.error(error);
        }
    }
}
LocalStorageService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
LocalStorageService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [ModuleConfigToken,] }] }
];
if (false) {
    /** @type {?} */
    LocalStorageService.prototype._prefix;
    /** @type {?} */
    LocalStorageService.prototype._allowNull;
    /** @type {?} */
    LocalStorageService.prototype._promisable;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWxvY2Fsc3RvcmFnZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWxvY2Fsc3RvcmFnZS8iLCJzb3VyY2VzIjpbImxpYi9uZ3gtbG9jYWxzdG9yYWdlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQVksTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRzNELE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxTQUFTLENBQUM7QUFDdEMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sU0FBUyxDQUFDO0FBRzVDLE1BQU07Ozs7SUFLSixZQUF1QyxNQUFxQjtRQUMxRCxJQUFJLE1BQU0sRUFBRTtZQUNWLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sSUFBSSxhQUFhLENBQUMsTUFBTSxDQUFDO1lBQ3JELElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLFNBQVMsSUFBSSxhQUFhLENBQUMsU0FBUyxDQUFDO1NBQy9EO1FBQ0QsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLGlCQUFpQixDQUFDO1lBQ3ZDLFNBQVMsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUMxQixNQUFNLEVBQUUsSUFBSSxDQUFDLE9BQU87U0FDckIsQ0FBQyxDQUFDO0tBQ0o7Ozs7SUFFRCxZQUFZO1FBQ1YsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0tBQ3pCOzs7OztJQUtELEtBQUs7UUFDSCxJQUFJO1lBQ0YsT0FBTyxZQUFZLENBQUMsTUFBTSxDQUFDO1NBQzVCO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDZCxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3RCO0tBQ0Y7Ozs7Ozs7SUFPRCxNQUFNLENBQUMsS0FBYTtRQUNsQixJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUU7WUFDYixPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxDQUFDLDhCQUE4QixDQUFDLENBQUMsQ0FBQztTQUMxRDtRQUNELElBQUk7WUFDRixPQUFPLFlBQVksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDaEM7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNkLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDdEI7S0FDRjs7Ozs7Ozs7SUFRRCxHQUFHLENBQUMsR0FBVyxFQUFFLEtBQWEsRUFBRSxNQUFlO1FBQzdDLElBQ0UsSUFBSSxDQUFDLFVBQVU7WUFDZixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVU7Z0JBQ2YsS0FBSyxLQUFLLE1BQU07Z0JBQ2hCLEtBQUssS0FBSyxJQUFJO2dCQUNkLEtBQUssS0FBSyxTQUFTLENBQUMsRUFDdEI7WUFDQSxZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsTUFBTSxJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksR0FBRyxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDakU7YUFBTTtZQUNMLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQzFCO0tBQ0Y7Ozs7Ozs7SUFPRCxHQUFHLENBQUMsR0FBVyxFQUFFLE1BQWU7UUFDOUIsSUFBSTtZQUNGLE9BQU8sWUFBWSxDQUFDLE9BQU8sQ0FBQyxHQUFHLE1BQU0sSUFBSSxJQUFJLENBQUMsT0FBTyxJQUFJLEdBQUcsRUFBRSxDQUFDLENBQUM7U0FDakU7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNkLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDdEI7S0FDRjs7Ozs7OztJQU9ELE1BQU0sQ0FBQyxHQUFXLEVBQUUsTUFBZTtRQUNqQyxJQUFJO1lBQ0YsWUFBWSxDQUFDLFVBQVUsQ0FBQyxHQUFHLE1BQU0sSUFBSSxJQUFJLENBQUMsT0FBTyxJQUFJLEdBQUcsRUFBRSxDQUFDLENBQUM7U0FDN0Q7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNkLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDdEI7S0FDRjs7Ozs7SUFLRCxLQUFLO1FBQ0gsSUFBSTtZQUNGLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUN0QjtRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ2QsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN0QjtLQUNGOzs7WUF2R0YsVUFBVTs7Ozs0Q0FNSSxNQUFNLFNBQUMsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlLCBPcHRpb25hbCwgSW5qZWN0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtNb2R1bGVDb25maWd9IGZyb20gJy4vaW50ZXJmYWNlcyc7XG5pbXBvcnQge1Byb21pc2FibGVTZXJ2aWNlfSBmcm9tICcuL3Byb21pc2FibGUuc2VydmljZSc7XG5pbXBvcnQge2RlZmF1bHRDb25maWd9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHsgTW9kdWxlQ29uZmlnVG9rZW4gfSBmcm9tICcuL3Rva2VuJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExvY2FsU3RvcmFnZVNlcnZpY2Uge1xuICBwcml2YXRlIHJlYWRvbmx5IF9wcmVmaXg6IHN0cmluZztcbiAgcHJpdmF0ZSByZWFkb25seSBfYWxsb3dOdWxsOiBib29sZWFuO1xuICBwcml2YXRlIHJlYWRvbmx5IF9wcm9taXNhYmxlOiBQcm9taXNhYmxlU2VydmljZTtcblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KE1vZHVsZUNvbmZpZ1Rva2VuKSBjb25maWc/OiBNb2R1bGVDb25maWcpIHtcbiAgICBpZiAoY29uZmlnKSB7XG4gICAgICB0aGlzLl9wcmVmaXggPSBjb25maWcucHJlZml4IHx8IGRlZmF1bHRDb25maWcucHJlZml4O1xuICAgICAgdGhpcy5fYWxsb3dOdWxsID0gY29uZmlnLmFsbG93TnVsbCB8fCBkZWZhdWx0Q29uZmlnLmFsbG93TnVsbDtcbiAgICB9XG4gICAgdGhpcy5fcHJvbWlzYWJsZSA9IG5ldyBQcm9taXNhYmxlU2VydmljZSh7XG4gICAgICBhbGxvd051bGw6IHRoaXMuX2FsbG93TnVsbCxcbiAgICAgIHByZWZpeDogdGhpcy5fcHJlZml4XG4gICAgfSk7XG4gIH1cblxuICBhc1Byb21pc2FibGUoKTogUHJvbWlzYWJsZVNlcnZpY2Uge1xuICAgIHJldHVybiB0aGlzLl9wcm9taXNhYmxlO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIG51bWJlciBvZiBlbnRyaWVzIGluIHRoZSBhcHBsaWNhdGlvbnMgbG9jYWwgc3RvcmFnZS5cbiAgICovXG4gIGNvdW50KCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2UubGVuZ3RoO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgbnRoIChkZWZpbmVkIGJ5IHRoZSBpbmRleCBwYXJhbWV0ZXIpIGtleSBpbiB0aGUgc3RvcmFnZS5cbiAgICogVGhlIG9yZGVyIG9mIGtleXMgaXMgdXNlci1hZ2VudCBkZWZpbmVkLCBzbyB5b3Ugc2hvdWxkIG5vdCByZWx5IG9uIGl0LlxuICAgKiBAcGFyYW0gaW5kZXggICBBbiBpbnRlZ2VyIHJlcHJlc2VudGluZyB0aGUgbnVtYmVyIG9mIHRoZSBrZXkgeW91IHdhbnQgdG8gZ2V0IHRoZSBuYW1lIG9mLiBUaGlzIGlzIGEgemVyby1iYXNlZCBpbmRleC5cbiAgICovXG4gIGdldEtleShpbmRleDogbnVtYmVyKTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCB7XG4gICAgaWYgKGluZGV4IDwgMCkge1xuICAgICAgY29uc29sZS5lcnJvcihuZXcgRXJyb3IoJ2luZGV4IGhhcyB0byBiZSAwIG9yIGdyZWF0ZXInKSk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmtleShpbmRleCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIHRoYSB2YWx1ZSB3aXRoIHRoZSBnaXZlbiBrZXkgb3IgdXBkYXRlcyBhbiBleGlzdGluZyBlbnRyeS5cbiAgICogQHBhcmFtIGtleSAgICAgS2V5IHRvIHN0b3JlLlxuICAgKiBAcGFyYW0gdmFsdWUgICBWYWx1ZSB0byBzdG9yZS5cbiAgICogQHBhcmFtIHByZWZpeCAgT3B0aW9uYWwgcHJlZml4IHRvIG92ZXJ3cml0ZSB0aGUgY29uZmlndXJlZCBvbmUuXG4gICAqL1xuICBzZXQoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcsIHByZWZpeD86IHN0cmluZyk6IHZvaWQge1xuICAgIGlmIChcbiAgICAgIHRoaXMuX2FsbG93TnVsbCB8fFxuICAgICAgKCF0aGlzLl9hbGxvd051bGwgJiZcbiAgICAgICAgdmFsdWUgIT09ICdudWxsJyAmJlxuICAgICAgICB2YWx1ZSAhPT0gbnVsbCAmJlxuICAgICAgICB2YWx1ZSAhPT0gdW5kZWZpbmVkKVxuICAgICkge1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYCR7cHJlZml4IHx8IHRoaXMuX3ByZWZpeH1fJHtrZXl9YCwgdmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbW92ZShrZXksIHByZWZpeCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIGVudHJ5IHNwZWNpZmllZCBieSB0aGUgZ2l2ZW4ga2V5IG9yIG51bGwuXG4gICAqIEBwYXJhbSBrZXkgICAgIEtleSBpZGVudGlmeWluZyB0aGUgd2FudGVkIGVudHJ5LlxuICAgKiBAcGFyYW0gcHJlZml4ICBPcHRpb25hbCBwcmVmaXggdG8gb3ZlcndyaXRlIHRoZSBjb25maWd1cmVkIG9uZS5cbiAgICovXG4gIGdldChrZXk6IHN0cmluZywgcHJlZml4Pzogc3RyaW5nKTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShgJHtwcmVmaXggfHwgdGhpcy5fcHJlZml4fV8ke2tleX1gKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgdGhlIGVudHJ5IHNwZWNpZmllZCBieSB0aGUgZ2l2ZW4ga2V5LlxuICAgKiBAcGFyYW0ga2V5ICAgICBLZXkgaWRlbnRpZnlpbmcgdGhlIGVudHJ5IHRvIHJlbW92ZS5cbiAgICogQHBhcmFtIHByZWZpeCAgT3B0aW9uYWwgcHJlZml4IHRvIG92ZXJ3cml0ZSB0aGUgY29uZmlndXJlZCBvbmUuXG4gICAqL1xuICByZW1vdmUoa2V5OiBzdHJpbmcsIHByZWZpeD86IHN0cmluZyk6IHZvaWQge1xuICAgIHRyeSB7XG4gICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShgJHtwcmVmaXggfHwgdGhpcy5fcHJlZml4fV8ke2tleX1gKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENsZWFycyBhbGwgZW50cmllcyBvZiB0aGUgYXBwbGljYXRpb25zIGxvY2FsIHN0b3JhZ2UuXG4gICAqL1xuICBjbGVhcigpOiB2b2lkIHtcbiAgICB0cnkge1xuICAgICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIH1cbiAgfVxufVxuIl19