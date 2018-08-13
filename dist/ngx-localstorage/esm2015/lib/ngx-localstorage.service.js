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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWxvY2Fsc3RvcmFnZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWxvY2Fsc3RvcmFnZS8iLCJzb3VyY2VzIjpbImxpYi9uZ3gtbG9jYWxzdG9yYWdlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQVksTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRzNELE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxTQUFTLENBQUM7QUFDdEMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sU0FBUyxDQUFDO0FBRzVDLE1BQU07Ozs7SUFLSixZQUF1QyxNQUFxQjtRQUMxRCxJQUFJLE1BQU0sRUFBRTtZQUNWLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sSUFBSSxhQUFhLENBQUMsTUFBTSxDQUFDO1lBQ3JELElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLFNBQVMsSUFBSSxhQUFhLENBQUMsU0FBUyxDQUFDO1NBQy9EO1FBQ0QsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLGlCQUFpQixDQUFDO1lBQ3ZDLFNBQVMsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUMxQixNQUFNLEVBQUUsSUFBSSxDQUFDLE9BQU87U0FDckIsQ0FBQyxDQUFDO0tBQ0o7Ozs7SUFFRCxZQUFZO1FBQ1YsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0tBQ3pCOzs7OztJQUtELEtBQUs7UUFDSCxJQUFJO1lBQ0YsT0FBTyxZQUFZLENBQUMsTUFBTSxDQUFDO1NBQzVCO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDZCxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3RCO0tBQ0Y7Ozs7Ozs7SUFPRCxNQUFNLENBQUMsS0FBYTtRQUNsQixJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUU7WUFDYixPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxDQUFDLDhCQUE4QixDQUFDLENBQUMsQ0FBQztTQUMxRDtRQUNELElBQUk7WUFDRixPQUFPLFlBQVksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDaEM7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNkLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDdEI7S0FDRjs7Ozs7Ozs7SUFRRCxHQUFHLENBQUMsR0FBVyxFQUFFLEtBQWEsRUFBRSxNQUFlO1FBQzdDLElBQ0UsSUFBSSxDQUFDLFVBQVU7WUFDZixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVU7Z0JBQ2YsS0FBSyxLQUFLLE1BQU07Z0JBQ2hCLEtBQUssS0FBSyxJQUFJO2dCQUNkLEtBQUssS0FBSyxTQUFTLENBQUMsRUFDdEI7WUFDQSxZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsTUFBTSxJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksR0FBRyxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDakU7YUFBTTtZQUNMLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQzFCO0tBQ0Y7Ozs7Ozs7SUFPRCxHQUFHLENBQUMsR0FBVyxFQUFFLE1BQWU7UUFDOUIsSUFBSTtZQUNGLE9BQU8sWUFBWSxDQUFDLE9BQU8sQ0FBQyxHQUFHLE1BQU0sSUFBSSxJQUFJLENBQUMsT0FBTyxJQUFJLEdBQUcsRUFBRSxDQUFDLENBQUM7U0FDakU7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNkLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDdEI7S0FDRjs7Ozs7OztJQU9ELE1BQU0sQ0FBQyxHQUFXLEVBQUUsTUFBZTtRQUNqQyxJQUFJO1lBQ0YsWUFBWSxDQUFDLFVBQVUsQ0FBQyxHQUFHLE1BQU0sSUFBSSxJQUFJLENBQUMsT0FBTyxJQUFJLEdBQUcsRUFBRSxDQUFDLENBQUM7U0FDN0Q7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNkLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDdEI7S0FDRjs7Ozs7SUFLRCxLQUFLO1FBQ0gsSUFBSTtZQUNGLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUN0QjtRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ2QsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN0QjtLQUNGOzs7WUF2R0YsVUFBVTs7Ozs0Q0FNSSxNQUFNLFNBQUMsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlLCBPcHRpb25hbCwgSW5qZWN0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7TW9kdWxlQ29uZmlnfSBmcm9tICcuL2ludGVyZmFjZXMnO1xyXG5pbXBvcnQge1Byb21pc2FibGVTZXJ2aWNlfSBmcm9tICcuL3Byb21pc2FibGUuc2VydmljZSc7XHJcbmltcG9ydCB7ZGVmYXVsdENvbmZpZ30gZnJvbSAnLi91dGlscyc7XHJcbmltcG9ydCB7IE1vZHVsZUNvbmZpZ1Rva2VuIH0gZnJvbSAnLi90b2tlbic7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBMb2NhbFN0b3JhZ2VTZXJ2aWNlIHtcclxuICBwcml2YXRlIHJlYWRvbmx5IF9wcmVmaXg6IHN0cmluZztcclxuICBwcml2YXRlIHJlYWRvbmx5IF9hbGxvd051bGw6IGJvb2xlYW47XHJcbiAgcHJpdmF0ZSByZWFkb25seSBfcHJvbWlzYWJsZTogUHJvbWlzYWJsZVNlcnZpY2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoTW9kdWxlQ29uZmlnVG9rZW4pIGNvbmZpZz86IE1vZHVsZUNvbmZpZykge1xyXG4gICAgaWYgKGNvbmZpZykge1xyXG4gICAgICB0aGlzLl9wcmVmaXggPSBjb25maWcucHJlZml4IHx8IGRlZmF1bHRDb25maWcucHJlZml4O1xyXG4gICAgICB0aGlzLl9hbGxvd051bGwgPSBjb25maWcuYWxsb3dOdWxsIHx8IGRlZmF1bHRDb25maWcuYWxsb3dOdWxsO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fcHJvbWlzYWJsZSA9IG5ldyBQcm9taXNhYmxlU2VydmljZSh7XHJcbiAgICAgIGFsbG93TnVsbDogdGhpcy5fYWxsb3dOdWxsLFxyXG4gICAgICBwcmVmaXg6IHRoaXMuX3ByZWZpeFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBhc1Byb21pc2FibGUoKTogUHJvbWlzYWJsZVNlcnZpY2Uge1xyXG4gICAgcmV0dXJuIHRoaXMuX3Byb21pc2FibGU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXRzIHRoZSBudW1iZXIgb2YgZW50cmllcyBpbiB0aGUgYXBwbGljYXRpb25zIGxvY2FsIHN0b3JhZ2UuXHJcbiAgICovXHJcbiAgY291bnQoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2UubGVuZ3RoO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIHRoZSBudGggKGRlZmluZWQgYnkgdGhlIGluZGV4IHBhcmFtZXRlcikga2V5IGluIHRoZSBzdG9yYWdlLlxyXG4gICAqIFRoZSBvcmRlciBvZiBrZXlzIGlzIHVzZXItYWdlbnQgZGVmaW5lZCwgc28geW91IHNob3VsZCBub3QgcmVseSBvbiBpdC5cclxuICAgKiBAcGFyYW0gaW5kZXggICBBbiBpbnRlZ2VyIHJlcHJlc2VudGluZyB0aGUgbnVtYmVyIG9mIHRoZSBrZXkgeW91IHdhbnQgdG8gZ2V0IHRoZSBuYW1lIG9mLiBUaGlzIGlzIGEgemVyby1iYXNlZCBpbmRleC5cclxuICAgKi9cclxuICBnZXRLZXkoaW5kZXg6IG51bWJlcik6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQge1xyXG4gICAgaWYgKGluZGV4IDwgMCkge1xyXG4gICAgICBjb25zb2xlLmVycm9yKG5ldyBFcnJvcignaW5kZXggaGFzIHRvIGJlIDAgb3IgZ3JlYXRlcicpKTtcclxuICAgIH1cclxuICAgIHRyeSB7XHJcbiAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2Uua2V5KGluZGV4KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQWRkcyB0aGEgdmFsdWUgd2l0aCB0aGUgZ2l2ZW4ga2V5IG9yIHVwZGF0ZXMgYW4gZXhpc3RpbmcgZW50cnkuXHJcbiAgICogQHBhcmFtIGtleSAgICAgS2V5IHRvIHN0b3JlLlxyXG4gICAqIEBwYXJhbSB2YWx1ZSAgIFZhbHVlIHRvIHN0b3JlLlxyXG4gICAqIEBwYXJhbSBwcmVmaXggIE9wdGlvbmFsIHByZWZpeCB0byBvdmVyd3JpdGUgdGhlIGNvbmZpZ3VyZWQgb25lLlxyXG4gICAqL1xyXG4gIHNldChrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZywgcHJlZml4Pzogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBpZiAoXHJcbiAgICAgIHRoaXMuX2FsbG93TnVsbCB8fFxyXG4gICAgICAoIXRoaXMuX2FsbG93TnVsbCAmJlxyXG4gICAgICAgIHZhbHVlICE9PSAnbnVsbCcgJiZcclxuICAgICAgICB2YWx1ZSAhPT0gbnVsbCAmJlxyXG4gICAgICAgIHZhbHVlICE9PSB1bmRlZmluZWQpXHJcbiAgICApIHtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYCR7cHJlZml4IHx8IHRoaXMuX3ByZWZpeH1fJHtrZXl9YCwgdmFsdWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5yZW1vdmUoa2V5LCBwcmVmaXgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0cyB0aGUgZW50cnkgc3BlY2lmaWVkIGJ5IHRoZSBnaXZlbiBrZXkgb3IgbnVsbC5cclxuICAgKiBAcGFyYW0ga2V5ICAgICBLZXkgaWRlbnRpZnlpbmcgdGhlIHdhbnRlZCBlbnRyeS5cclxuICAgKiBAcGFyYW0gcHJlZml4ICBPcHRpb25hbCBwcmVmaXggdG8gb3ZlcndyaXRlIHRoZSBjb25maWd1cmVkIG9uZS5cclxuICAgKi9cclxuICBnZXQoa2V5OiBzdHJpbmcsIHByZWZpeD86IHN0cmluZyk6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQge1xyXG4gICAgdHJ5IHtcclxuICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKGAke3ByZWZpeCB8fCB0aGlzLl9wcmVmaXh9XyR7a2V5fWApO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZW1vdmVzIHRoZSBlbnRyeSBzcGVjaWZpZWQgYnkgdGhlIGdpdmVuIGtleS5cclxuICAgKiBAcGFyYW0ga2V5ICAgICBLZXkgaWRlbnRpZnlpbmcgdGhlIGVudHJ5IHRvIHJlbW92ZS5cclxuICAgKiBAcGFyYW0gcHJlZml4ICBPcHRpb25hbCBwcmVmaXggdG8gb3ZlcndyaXRlIHRoZSBjb25maWd1cmVkIG9uZS5cclxuICAgKi9cclxuICByZW1vdmUoa2V5OiBzdHJpbmcsIHByZWZpeD86IHN0cmluZyk6IHZvaWQge1xyXG4gICAgdHJ5IHtcclxuICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oYCR7cHJlZml4IHx8IHRoaXMuX3ByZWZpeH1fJHtrZXl9YCk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENsZWFycyBhbGwgZW50cmllcyBvZiB0aGUgYXBwbGljYXRpb25zIGxvY2FsIHN0b3JhZ2UuXHJcbiAgICovXHJcbiAgY2xlYXIoKTogdm9pZCB7XHJcbiAgICB0cnkge1xyXG4gICAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=