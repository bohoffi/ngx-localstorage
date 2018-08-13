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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWxvY2Fsc3RvcmFnZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWxvY2Fsc3RvcmFnZS8iLCJzb3VyY2VzIjpbImxpYi9uZ3gtbG9jYWxzdG9yYWdlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQVksTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRzNELE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxTQUFTLENBQUM7QUFDdEMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sU0FBUyxDQUFDOztJQVExQyw2QkFBdUMsTUFBcUI7UUFDMUQsSUFBSSxNQUFNLEVBQUU7WUFDVixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLElBQUksYUFBYSxDQUFDLE1BQU0sQ0FBQztZQUNyRCxJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxTQUFTLElBQUksYUFBYSxDQUFDLFNBQVMsQ0FBQztTQUMvRDtRQUNELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxpQkFBaUIsQ0FBQztZQUN2QyxTQUFTLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDMUIsTUFBTSxFQUFFLElBQUksQ0FBQyxPQUFPO1NBQ3JCLENBQUMsQ0FBQztLQUNKOzs7O0lBRUQsMENBQVk7OztJQUFaO1FBQ0UsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0tBQ3pCO0lBRUQ7O09BRUc7Ozs7O0lBQ0gsbUNBQUs7Ozs7SUFBTDtRQUNFLElBQUk7WUFDRixPQUFPLFlBQVksQ0FBQyxNQUFNLENBQUM7U0FDNUI7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNkLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDdEI7S0FDRjtJQUVEOzs7O09BSUc7Ozs7Ozs7SUFDSCxvQ0FBTTs7Ozs7O0lBQU4sVUFBTyxLQUFhO1FBQ2xCLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRTtZQUNiLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLENBQUMsOEJBQThCLENBQUMsQ0FBQyxDQUFDO1NBQzFEO1FBQ0QsSUFBSTtZQUNGLE9BQU8sWUFBWSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNoQztRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ2QsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN0QjtLQUNGO0lBRUQ7Ozs7O09BS0c7Ozs7Ozs7O0lBQ0gsaUNBQUc7Ozs7Ozs7SUFBSCxVQUFJLEdBQVcsRUFBRSxLQUFhLEVBQUUsTUFBZTtRQUM3QyxJQUNFLElBQUksQ0FBQyxVQUFVO1lBQ2YsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVO2dCQUNmLEtBQUssS0FBSyxNQUFNO2dCQUNoQixLQUFLLEtBQUssSUFBSTtnQkFDZCxLQUFLLEtBQUssU0FBUyxDQUFDLEVBQ3RCO1lBQ0EsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFHLE1BQU0sSUFBSSxJQUFJLENBQUMsT0FBTyxVQUFJLEdBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztTQUNqRTthQUFNO1lBQ0wsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDMUI7S0FDRjtJQUVEOzs7O09BSUc7Ozs7Ozs7SUFDSCxpQ0FBRzs7Ozs7O0lBQUgsVUFBSSxHQUFXLEVBQUUsTUFBZTtRQUM5QixJQUFJO1lBQ0YsT0FBTyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUcsTUFBTSxJQUFJLElBQUksQ0FBQyxPQUFPLFVBQUksR0FBSyxDQUFDLENBQUM7U0FDakU7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNkLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDdEI7S0FDRjtJQUVEOzs7O09BSUc7Ozs7Ozs7SUFDSCxvQ0FBTTs7Ozs7O0lBQU4sVUFBTyxHQUFXLEVBQUUsTUFBZTtRQUNqQyxJQUFJO1lBQ0YsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFHLE1BQU0sSUFBSSxJQUFJLENBQUMsT0FBTyxVQUFJLEdBQUssQ0FBQyxDQUFDO1NBQzdEO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDZCxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3RCO0tBQ0Y7SUFFRDs7T0FFRzs7Ozs7SUFDSCxtQ0FBSzs7OztJQUFMO1FBQ0UsSUFBSTtZQUNGLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUN0QjtRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ2QsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN0QjtLQUNGOztnQkF2R0YsVUFBVTs7OztnREFNSSxNQUFNLFNBQUMsaUJBQWlCOzs4QkFidkM7O1NBUWEsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlLCBPcHRpb25hbCwgSW5qZWN0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7TW9kdWxlQ29uZmlnfSBmcm9tICcuL2ludGVyZmFjZXMnO1xyXG5pbXBvcnQge1Byb21pc2FibGVTZXJ2aWNlfSBmcm9tICcuL3Byb21pc2FibGUuc2VydmljZSc7XHJcbmltcG9ydCB7ZGVmYXVsdENvbmZpZ30gZnJvbSAnLi91dGlscyc7XHJcbmltcG9ydCB7IE1vZHVsZUNvbmZpZ1Rva2VuIH0gZnJvbSAnLi90b2tlbic7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBMb2NhbFN0b3JhZ2VTZXJ2aWNlIHtcclxuICBwcml2YXRlIHJlYWRvbmx5IF9wcmVmaXg6IHN0cmluZztcclxuICBwcml2YXRlIHJlYWRvbmx5IF9hbGxvd051bGw6IGJvb2xlYW47XHJcbiAgcHJpdmF0ZSByZWFkb25seSBfcHJvbWlzYWJsZTogUHJvbWlzYWJsZVNlcnZpY2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoTW9kdWxlQ29uZmlnVG9rZW4pIGNvbmZpZz86IE1vZHVsZUNvbmZpZykge1xyXG4gICAgaWYgKGNvbmZpZykge1xyXG4gICAgICB0aGlzLl9wcmVmaXggPSBjb25maWcucHJlZml4IHx8IGRlZmF1bHRDb25maWcucHJlZml4O1xyXG4gICAgICB0aGlzLl9hbGxvd051bGwgPSBjb25maWcuYWxsb3dOdWxsIHx8IGRlZmF1bHRDb25maWcuYWxsb3dOdWxsO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fcHJvbWlzYWJsZSA9IG5ldyBQcm9taXNhYmxlU2VydmljZSh7XHJcbiAgICAgIGFsbG93TnVsbDogdGhpcy5fYWxsb3dOdWxsLFxyXG4gICAgICBwcmVmaXg6IHRoaXMuX3ByZWZpeFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBhc1Byb21pc2FibGUoKTogUHJvbWlzYWJsZVNlcnZpY2Uge1xyXG4gICAgcmV0dXJuIHRoaXMuX3Byb21pc2FibGU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXRzIHRoZSBudW1iZXIgb2YgZW50cmllcyBpbiB0aGUgYXBwbGljYXRpb25zIGxvY2FsIHN0b3JhZ2UuXHJcbiAgICovXHJcbiAgY291bnQoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2UubGVuZ3RoO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIHRoZSBudGggKGRlZmluZWQgYnkgdGhlIGluZGV4IHBhcmFtZXRlcikga2V5IGluIHRoZSBzdG9yYWdlLlxyXG4gICAqIFRoZSBvcmRlciBvZiBrZXlzIGlzIHVzZXItYWdlbnQgZGVmaW5lZCwgc28geW91IHNob3VsZCBub3QgcmVseSBvbiBpdC5cclxuICAgKiBAcGFyYW0gaW5kZXggICBBbiBpbnRlZ2VyIHJlcHJlc2VudGluZyB0aGUgbnVtYmVyIG9mIHRoZSBrZXkgeW91IHdhbnQgdG8gZ2V0IHRoZSBuYW1lIG9mLiBUaGlzIGlzIGEgemVyby1iYXNlZCBpbmRleC5cclxuICAgKi9cclxuICBnZXRLZXkoaW5kZXg6IG51bWJlcik6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQge1xyXG4gICAgaWYgKGluZGV4IDwgMCkge1xyXG4gICAgICBjb25zb2xlLmVycm9yKG5ldyBFcnJvcignaW5kZXggaGFzIHRvIGJlIDAgb3IgZ3JlYXRlcicpKTtcclxuICAgIH1cclxuICAgIHRyeSB7XHJcbiAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2Uua2V5KGluZGV4KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQWRkcyB0aGEgdmFsdWUgd2l0aCB0aGUgZ2l2ZW4ga2V5IG9yIHVwZGF0ZXMgYW4gZXhpc3RpbmcgZW50cnkuXHJcbiAgICogQHBhcmFtIGtleSAgICAgS2V5IHRvIHN0b3JlLlxyXG4gICAqIEBwYXJhbSB2YWx1ZSAgIFZhbHVlIHRvIHN0b3JlLlxyXG4gICAqIEBwYXJhbSBwcmVmaXggIE9wdGlvbmFsIHByZWZpeCB0byBvdmVyd3JpdGUgdGhlIGNvbmZpZ3VyZWQgb25lLlxyXG4gICAqL1xyXG4gIHNldChrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZywgcHJlZml4Pzogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBpZiAoXHJcbiAgICAgIHRoaXMuX2FsbG93TnVsbCB8fFxyXG4gICAgICAoIXRoaXMuX2FsbG93TnVsbCAmJlxyXG4gICAgICAgIHZhbHVlICE9PSAnbnVsbCcgJiZcclxuICAgICAgICB2YWx1ZSAhPT0gbnVsbCAmJlxyXG4gICAgICAgIHZhbHVlICE9PSB1bmRlZmluZWQpXHJcbiAgICApIHtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYCR7cHJlZml4IHx8IHRoaXMuX3ByZWZpeH1fJHtrZXl9YCwgdmFsdWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5yZW1vdmUoa2V5LCBwcmVmaXgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0cyB0aGUgZW50cnkgc3BlY2lmaWVkIGJ5IHRoZSBnaXZlbiBrZXkgb3IgbnVsbC5cclxuICAgKiBAcGFyYW0ga2V5ICAgICBLZXkgaWRlbnRpZnlpbmcgdGhlIHdhbnRlZCBlbnRyeS5cclxuICAgKiBAcGFyYW0gcHJlZml4ICBPcHRpb25hbCBwcmVmaXggdG8gb3ZlcndyaXRlIHRoZSBjb25maWd1cmVkIG9uZS5cclxuICAgKi9cclxuICBnZXQoa2V5OiBzdHJpbmcsIHByZWZpeD86IHN0cmluZyk6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQge1xyXG4gICAgdHJ5IHtcclxuICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKGAke3ByZWZpeCB8fCB0aGlzLl9wcmVmaXh9XyR7a2V5fWApO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZW1vdmVzIHRoZSBlbnRyeSBzcGVjaWZpZWQgYnkgdGhlIGdpdmVuIGtleS5cclxuICAgKiBAcGFyYW0ga2V5ICAgICBLZXkgaWRlbnRpZnlpbmcgdGhlIGVudHJ5IHRvIHJlbW92ZS5cclxuICAgKiBAcGFyYW0gcHJlZml4ICBPcHRpb25hbCBwcmVmaXggdG8gb3ZlcndyaXRlIHRoZSBjb25maWd1cmVkIG9uZS5cclxuICAgKi9cclxuICByZW1vdmUoa2V5OiBzdHJpbmcsIHByZWZpeD86IHN0cmluZyk6IHZvaWQge1xyXG4gICAgdHJ5IHtcclxuICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oYCR7cHJlZml4IHx8IHRoaXMuX3ByZWZpeH1fJHtrZXl9YCk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENsZWFycyBhbGwgZW50cmllcyBvZiB0aGUgYXBwbGljYXRpb25zIGxvY2FsIHN0b3JhZ2UuXHJcbiAgICovXHJcbiAgY2xlYXIoKTogdm9pZCB7XHJcbiAgICB0cnkge1xyXG4gICAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=