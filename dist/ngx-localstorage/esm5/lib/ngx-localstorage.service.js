/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable, Inject } from '@angular/core';
import { PromisableService } from './promisable.service';
import { defaultConfig } from './utils';
import { ModuleConfigToken } from './token';
var LocalStorageService = /** @class */ (function () {
    function LocalStorageService(config) {
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
    LocalStorageService.prototype.asPromisable = /**
     * @return {?}
     */
    function () {
        return this._promisable;
    };
    /**
     * Gets the number of entries in the applications local storage.
     */
    /**
     * Gets the number of entries in the applications local storage.
     * @return {?}
     */
    LocalStorageService.prototype.count = /**
     * Gets the number of entries in the applications local storage.
     * @return {?}
     */
    function () {
        try {
            return localStorage.length;
        }
        catch (error) {
            console.error(error);
        }
    };
    /**
     * Returns the nth (defined by the index parameter) key in the storage.
     * The order of keys is user-agent defined, so you should not rely on it.
     * @param index   An integer representing the number of the key you want to get the name of. This is a zero-based index.
     */
    /**
     * Returns the nth (defined by the index parameter) key in the storage.
     * The order of keys is user-agent defined, so you should not rely on it.
     * @param {?} index   An integer representing the number of the key you want to get the name of. This is a zero-based index.
     * @return {?}
     */
    LocalStorageService.prototype.getKey = /**
     * Returns the nth (defined by the index parameter) key in the storage.
     * The order of keys is user-agent defined, so you should not rely on it.
     * @param {?} index   An integer representing the number of the key you want to get the name of. This is a zero-based index.
     * @return {?}
     */
    function (index) {
        if (index < 0) {
            console.error(new Error('index has to be 0 or greater'));
        }
        try {
            return localStorage.key(index);
        }
        catch (error) {
            console.error(error);
        }
    };
    /**
     * Adds tha value with the given key or updates an existing entry.
     * @param key     Key to store.
     * @param value   Value to store.
     * @param prefix  Optional prefix to overwrite the configured one.
     */
    /**
     * Adds tha value with the given key or updates an existing entry.
     * @param {?} key     Key to store.
     * @param {?} value   Value to store.
     * @param {?=} prefix  Optional prefix to overwrite the configured one.
     * @return {?}
     */
    LocalStorageService.prototype.set = /**
     * Adds tha value with the given key or updates an existing entry.
     * @param {?} key     Key to store.
     * @param {?} value   Value to store.
     * @param {?=} prefix  Optional prefix to overwrite the configured one.
     * @return {?}
     */
    function (key, value, prefix) {
        if (this._allowNull ||
            (!this._allowNull &&
                value !== 'null' &&
                value !== null &&
                value !== undefined)) {
            localStorage.setItem((prefix || this._prefix) + "_" + key, value);
        }
        else {
            this.remove(key, prefix);
        }
    };
    /**
     * Gets the entry specified by the given key or null.
     * @param key     Key identifying the wanted entry.
     * @param prefix  Optional prefix to overwrite the configured one.
     */
    /**
     * Gets the entry specified by the given key or null.
     * @param {?} key     Key identifying the wanted entry.
     * @param {?=} prefix  Optional prefix to overwrite the configured one.
     * @return {?}
     */
    LocalStorageService.prototype.get = /**
     * Gets the entry specified by the given key or null.
     * @param {?} key     Key identifying the wanted entry.
     * @param {?=} prefix  Optional prefix to overwrite the configured one.
     * @return {?}
     */
    function (key, prefix) {
        try {
            return localStorage.getItem((prefix || this._prefix) + "_" + key);
        }
        catch (error) {
            console.error(error);
        }
    };
    /**
     * Removes the entry specified by the given key.
     * @param key     Key identifying the entry to remove.
     * @param prefix  Optional prefix to overwrite the configured one.
     */
    /**
     * Removes the entry specified by the given key.
     * @param {?} key     Key identifying the entry to remove.
     * @param {?=} prefix  Optional prefix to overwrite the configured one.
     * @return {?}
     */
    LocalStorageService.prototype.remove = /**
     * Removes the entry specified by the given key.
     * @param {?} key     Key identifying the entry to remove.
     * @param {?=} prefix  Optional prefix to overwrite the configured one.
     * @return {?}
     */
    function (key, prefix) {
        try {
            localStorage.removeItem((prefix || this._prefix) + "_" + key);
        }
        catch (error) {
            console.error(error);
        }
    };
    /**
     * Clears all entries of the applications local storage.
     */
    /**
     * Clears all entries of the applications local storage.
     * @return {?}
     */
    LocalStorageService.prototype.clear = /**
     * Clears all entries of the applications local storage.
     * @return {?}
     */
    function () {
        try {
            localStorage.clear();
        }
        catch (error) {
            console.error(error);
        }
    };
    LocalStorageService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    LocalStorageService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [ModuleConfigToken,] }] }
    ]; };
    return LocalStorageService;
}());
export { LocalStorageService };
if (false) {
    /** @type {?} */
    LocalStorageService.prototype._prefix;
    /** @type {?} */
    LocalStorageService.prototype._allowNull;
    /** @type {?} */
    LocalStorageService.prototype._promisable;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWxvY2Fsc3RvcmFnZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWxvY2Fsc3RvcmFnZS8iLCJzb3VyY2VzIjpbImxpYi9uZ3gtbG9jYWxzdG9yYWdlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQVksTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRzNELE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxTQUFTLENBQUM7QUFDdEMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sU0FBUyxDQUFDOztJQVExQyw2QkFBdUMsTUFBcUI7UUFDMUQsSUFBSSxNQUFNLEVBQUU7WUFDVixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLElBQUksYUFBYSxDQUFDLE1BQU0sQ0FBQztZQUNyRCxJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxTQUFTLElBQUksYUFBYSxDQUFDLFNBQVMsQ0FBQztTQUMvRDtRQUNELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxpQkFBaUIsQ0FBQztZQUN2QyxTQUFTLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDMUIsTUFBTSxFQUFFLElBQUksQ0FBQyxPQUFPO1NBQ3JCLENBQUMsQ0FBQztLQUNKOzs7O0lBRUQsMENBQVk7OztJQUFaO1FBQ0UsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0tBQ3pCO0lBRUQ7O09BRUc7Ozs7O0lBQ0gsbUNBQUs7Ozs7SUFBTDtRQUNFLElBQUk7WUFDRixPQUFPLFlBQVksQ0FBQyxNQUFNLENBQUM7U0FDNUI7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNkLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDdEI7S0FDRjtJQUVEOzs7O09BSUc7Ozs7Ozs7SUFDSCxvQ0FBTTs7Ozs7O0lBQU4sVUFBTyxLQUFhO1FBQ2xCLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRTtZQUNiLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLENBQUMsOEJBQThCLENBQUMsQ0FBQyxDQUFDO1NBQzFEO1FBQ0QsSUFBSTtZQUNGLE9BQU8sWUFBWSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNoQztRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ2QsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN0QjtLQUNGO0lBRUQ7Ozs7O09BS0c7Ozs7Ozs7O0lBQ0gsaUNBQUc7Ozs7Ozs7SUFBSCxVQUFJLEdBQVcsRUFBRSxLQUFhLEVBQUUsTUFBZTtRQUM3QyxJQUNFLElBQUksQ0FBQyxVQUFVO1lBQ2YsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVO2dCQUNmLEtBQUssS0FBSyxNQUFNO2dCQUNoQixLQUFLLEtBQUssSUFBSTtnQkFDZCxLQUFLLEtBQUssU0FBUyxDQUFDLEVBQ3RCO1lBQ0EsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFHLE1BQU0sSUFBSSxJQUFJLENBQUMsT0FBTyxVQUFJLEdBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztTQUNqRTthQUFNO1lBQ0wsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDMUI7S0FDRjtJQUVEOzs7O09BSUc7Ozs7Ozs7SUFDSCxpQ0FBRzs7Ozs7O0lBQUgsVUFBSSxHQUFXLEVBQUUsTUFBZTtRQUM5QixJQUFJO1lBQ0YsT0FBTyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUcsTUFBTSxJQUFJLElBQUksQ0FBQyxPQUFPLFVBQUksR0FBSyxDQUFDLENBQUM7U0FDakU7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNkLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDdEI7S0FDRjtJQUVEOzs7O09BSUc7Ozs7Ozs7SUFDSCxvQ0FBTTs7Ozs7O0lBQU4sVUFBTyxHQUFXLEVBQUUsTUFBZTtRQUNqQyxJQUFJO1lBQ0YsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFHLE1BQU0sSUFBSSxJQUFJLENBQUMsT0FBTyxVQUFJLEdBQUssQ0FBQyxDQUFDO1NBQzdEO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDZCxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3RCO0tBQ0Y7SUFFRDs7T0FFRzs7Ozs7SUFDSCxtQ0FBSzs7OztJQUFMO1FBQ0UsSUFBSTtZQUNGLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUN0QjtRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ2QsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN0QjtLQUNGOztnQkF2R0YsVUFBVTs7OztnREFNSSxNQUFNLFNBQUMsaUJBQWlCOzs4QkFidkM7O1NBUWEsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlLCBPcHRpb25hbCwgSW5qZWN0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtNb2R1bGVDb25maWd9IGZyb20gJy4vaW50ZXJmYWNlcyc7XG5pbXBvcnQge1Byb21pc2FibGVTZXJ2aWNlfSBmcm9tICcuL3Byb21pc2FibGUuc2VydmljZSc7XG5pbXBvcnQge2RlZmF1bHRDb25maWd9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHsgTW9kdWxlQ29uZmlnVG9rZW4gfSBmcm9tICcuL3Rva2VuJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExvY2FsU3RvcmFnZVNlcnZpY2Uge1xuICBwcml2YXRlIHJlYWRvbmx5IF9wcmVmaXg6IHN0cmluZztcbiAgcHJpdmF0ZSByZWFkb25seSBfYWxsb3dOdWxsOiBib29sZWFuO1xuICBwcml2YXRlIHJlYWRvbmx5IF9wcm9taXNhYmxlOiBQcm9taXNhYmxlU2VydmljZTtcblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KE1vZHVsZUNvbmZpZ1Rva2VuKSBjb25maWc/OiBNb2R1bGVDb25maWcpIHtcbiAgICBpZiAoY29uZmlnKSB7XG4gICAgICB0aGlzLl9wcmVmaXggPSBjb25maWcucHJlZml4IHx8IGRlZmF1bHRDb25maWcucHJlZml4O1xuICAgICAgdGhpcy5fYWxsb3dOdWxsID0gY29uZmlnLmFsbG93TnVsbCB8fCBkZWZhdWx0Q29uZmlnLmFsbG93TnVsbDtcbiAgICB9XG4gICAgdGhpcy5fcHJvbWlzYWJsZSA9IG5ldyBQcm9taXNhYmxlU2VydmljZSh7XG4gICAgICBhbGxvd051bGw6IHRoaXMuX2FsbG93TnVsbCxcbiAgICAgIHByZWZpeDogdGhpcy5fcHJlZml4XG4gICAgfSk7XG4gIH1cblxuICBhc1Byb21pc2FibGUoKTogUHJvbWlzYWJsZVNlcnZpY2Uge1xuICAgIHJldHVybiB0aGlzLl9wcm9taXNhYmxlO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIG51bWJlciBvZiBlbnRyaWVzIGluIHRoZSBhcHBsaWNhdGlvbnMgbG9jYWwgc3RvcmFnZS5cbiAgICovXG4gIGNvdW50KCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2UubGVuZ3RoO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgbnRoIChkZWZpbmVkIGJ5IHRoZSBpbmRleCBwYXJhbWV0ZXIpIGtleSBpbiB0aGUgc3RvcmFnZS5cbiAgICogVGhlIG9yZGVyIG9mIGtleXMgaXMgdXNlci1hZ2VudCBkZWZpbmVkLCBzbyB5b3Ugc2hvdWxkIG5vdCByZWx5IG9uIGl0LlxuICAgKiBAcGFyYW0gaW5kZXggICBBbiBpbnRlZ2VyIHJlcHJlc2VudGluZyB0aGUgbnVtYmVyIG9mIHRoZSBrZXkgeW91IHdhbnQgdG8gZ2V0IHRoZSBuYW1lIG9mLiBUaGlzIGlzIGEgemVyby1iYXNlZCBpbmRleC5cbiAgICovXG4gIGdldEtleShpbmRleDogbnVtYmVyKTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCB7XG4gICAgaWYgKGluZGV4IDwgMCkge1xuICAgICAgY29uc29sZS5lcnJvcihuZXcgRXJyb3IoJ2luZGV4IGhhcyB0byBiZSAwIG9yIGdyZWF0ZXInKSk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmtleShpbmRleCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIHRoYSB2YWx1ZSB3aXRoIHRoZSBnaXZlbiBrZXkgb3IgdXBkYXRlcyBhbiBleGlzdGluZyBlbnRyeS5cbiAgICogQHBhcmFtIGtleSAgICAgS2V5IHRvIHN0b3JlLlxuICAgKiBAcGFyYW0gdmFsdWUgICBWYWx1ZSB0byBzdG9yZS5cbiAgICogQHBhcmFtIHByZWZpeCAgT3B0aW9uYWwgcHJlZml4IHRvIG92ZXJ3cml0ZSB0aGUgY29uZmlndXJlZCBvbmUuXG4gICAqL1xuICBzZXQoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcsIHByZWZpeD86IHN0cmluZyk6IHZvaWQge1xuICAgIGlmIChcbiAgICAgIHRoaXMuX2FsbG93TnVsbCB8fFxuICAgICAgKCF0aGlzLl9hbGxvd051bGwgJiZcbiAgICAgICAgdmFsdWUgIT09ICdudWxsJyAmJlxuICAgICAgICB2YWx1ZSAhPT0gbnVsbCAmJlxuICAgICAgICB2YWx1ZSAhPT0gdW5kZWZpbmVkKVxuICAgICkge1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYCR7cHJlZml4IHx8IHRoaXMuX3ByZWZpeH1fJHtrZXl9YCwgdmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbW92ZShrZXksIHByZWZpeCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIGVudHJ5IHNwZWNpZmllZCBieSB0aGUgZ2l2ZW4ga2V5IG9yIG51bGwuXG4gICAqIEBwYXJhbSBrZXkgICAgIEtleSBpZGVudGlmeWluZyB0aGUgd2FudGVkIGVudHJ5LlxuICAgKiBAcGFyYW0gcHJlZml4ICBPcHRpb25hbCBwcmVmaXggdG8gb3ZlcndyaXRlIHRoZSBjb25maWd1cmVkIG9uZS5cbiAgICovXG4gIGdldChrZXk6IHN0cmluZywgcHJlZml4Pzogc3RyaW5nKTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShgJHtwcmVmaXggfHwgdGhpcy5fcHJlZml4fV8ke2tleX1gKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgdGhlIGVudHJ5IHNwZWNpZmllZCBieSB0aGUgZ2l2ZW4ga2V5LlxuICAgKiBAcGFyYW0ga2V5ICAgICBLZXkgaWRlbnRpZnlpbmcgdGhlIGVudHJ5IHRvIHJlbW92ZS5cbiAgICogQHBhcmFtIHByZWZpeCAgT3B0aW9uYWwgcHJlZml4IHRvIG92ZXJ3cml0ZSB0aGUgY29uZmlndXJlZCBvbmUuXG4gICAqL1xuICByZW1vdmUoa2V5OiBzdHJpbmcsIHByZWZpeD86IHN0cmluZyk6IHZvaWQge1xuICAgIHRyeSB7XG4gICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShgJHtwcmVmaXggfHwgdGhpcy5fcHJlZml4fV8ke2tleX1gKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENsZWFycyBhbGwgZW50cmllcyBvZiB0aGUgYXBwbGljYXRpb25zIGxvY2FsIHN0b3JhZ2UuXG4gICAqL1xuICBjbGVhcigpOiB2b2lkIHtcbiAgICB0cnkge1xuICAgICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIH1cbiAgfVxufVxuIl19