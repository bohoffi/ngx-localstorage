/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
export class PromisableService {
    /**
     * @param {?=} config
     */
    constructor(config) {
        if (config) {
            this._prefix = config.prefix || this._prefix;
            this._allowNull = config.allowNull || this._allowNull;
        }
    }
    /**
     * Gets the number of entries in the applications local storage.
     * @return {?}
     */
    count() {
        return new Promise((resolve, reject) => {
            try {
                resolve(localStorage.length);
            }
            catch (error) {
                reject(error);
            }
        });
    }
    /**
     * Returns the nth (defined by the index parameter) key in the storage.
     * The order of keys is user-agent defined, so you should not rely on it.
     * @param {?} index   An integer representing the number of the key you want to get the name of. This is a zero-based index.
     * @return {?}
     */
    getKey(index) {
        return new Promise((resolve, reject) => {
            if (index < 0) {
                reject(new Error('index has to be 0 or greater'));
            }
            try {
                resolve(localStorage.key(index));
            }
            catch (error) {
                reject(error);
            }
        });
    }
    /**
     * Adds tha value with the given key or updates an existing entry.
     * @param {?} key     Key to store.
     * @param {?} value   Value to store.
     * @param {?=} prefix  Optional prefix to overwrite the configured one.
     * @return {?}
     */
    set(key, value, prefix) {
        return new Promise((resolve, reject) => {
            try {
                if (this._allowNull
                    || (!this._allowNull && value !== 'null' && value !== null && value !== undefined)) {
                    localStorage.setItem(`${prefix || this._prefix}_${key}`, value);
                }
                else {
                    return this.remove(key, prefix);
                }
                resolve(true);
            }
            catch (error) {
                reject(error);
            }
        });
    }
    /**
     * Gets the entry specified by the given key or null.
     * @param {?} key     Key identifying the wanted entry.
     * @param {?=} prefix  Optional prefix to overwrite the configured one.
     * @return {?}
     */
    get(key, prefix) {
        return new Promise((resolve, reject) => {
            try {
                resolve(localStorage.getItem(`${prefix || this._prefix}_${key}`));
            }
            catch (error) {
                reject(error);
            }
        });
    }
    /**
     * Removes the entry specified by the given key.
     * @param {?} key     Key identifying the entry to remove.
     * @param {?=} prefix  Optional prefix to overwrite the configured one.
     * @return {?}
     */
    remove(key, prefix) {
        return new Promise((resolve, reject) => {
            try {
                localStorage.removeItem(`${prefix || this._prefix}_${key}`);
                resolve(true);
            }
            catch (error) {
                reject(error);
            }
        });
    }
    /**
     * Clears all entries of the applications local storage.
     * @return {?}
     */
    clear() {
        return new Promise((resolve, reject) => {
            try {
                localStorage.clear();
                resolve(true);
            }
            catch (error) {
                reject(error);
            }
        });
    }
}
if (false) {
    /** @type {?} */
    PromisableService.prototype._prefix;
    /** @type {?} */
    PromisableService.prototype._allowNull;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvbWlzYWJsZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWxvY2Fsc3RvcmFnZS8iLCJzb3VyY2VzIjpbImxpYi9wcm9taXNhYmxlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUtBLE1BQU07Ozs7SUFLSixZQUFZLE1BQXFCO1FBQy9CLElBQUksTUFBTSxFQUFFO1lBQ1YsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDN0MsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUM7U0FDdkQ7S0FDRjs7Ozs7SUFLRCxLQUFLO1FBQ0gsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUNyQyxJQUFJO2dCQUNGLE9BQU8sQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDOUI7WUFBQyxPQUFPLEtBQUssRUFBRTtnQkFDZCxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDZjtTQUNGLENBQUMsQ0FBQztLQUNKOzs7Ozs7O0lBT0QsTUFBTSxDQUFDLEtBQWE7UUFDbEIsT0FBTyxJQUFJLE9BQU8sQ0FBZ0IsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7WUFDcEQsSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFO2dCQUNiLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDLENBQUM7YUFDbkQ7WUFDRCxJQUFJO2dCQUNGLE9BQU8sQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7YUFDbEM7WUFBQyxPQUFPLEtBQUssRUFBRTtnQkFDZCxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDZjtTQUNGLENBQUMsQ0FBQztLQUNKOzs7Ozs7OztJQVFELEdBQUcsQ0FBQyxHQUFXLEVBQUUsS0FBYSxFQUFFLE1BQWU7UUFDN0MsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUNyQyxJQUFJO2dCQUNGLElBQUksSUFBSSxDQUFDLFVBQVU7dUJBQ2QsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUksS0FBSyxLQUFLLE1BQU0sSUFBSSxLQUFLLEtBQUssSUFBSSxJQUFJLEtBQUssS0FBSyxTQUFTLENBQUMsRUFBRTtvQkFDcEYsWUFBWSxDQUFDLE9BQU8sQ0FBQyxHQUFHLE1BQU0sSUFBSSxJQUFJLENBQUMsT0FBTyxJQUFJLEdBQUcsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO2lCQUNqRTtxQkFBTTtvQkFDTCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDO2lCQUNqQztnQkFDRCxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDZjtZQUFDLE9BQU8sS0FBSyxFQUFFO2dCQUNkLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNmO1NBQ0YsQ0FBQyxDQUFDO0tBQ0o7Ozs7Ozs7SUFPRCxHQUFHLENBQUMsR0FBVyxFQUFFLE1BQWU7UUFDOUIsT0FBTyxJQUFJLE9BQU8sQ0FBZ0IsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7WUFDcEQsSUFBSTtnQkFDRixPQUFPLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxHQUFHLE1BQU0sSUFBSSxJQUFJLENBQUMsT0FBTyxJQUFJLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQzthQUNuRTtZQUFDLE9BQU8sS0FBSyxFQUFFO2dCQUNkLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNmO1NBQ0YsQ0FBQyxDQUFDO0tBQ0o7Ozs7Ozs7SUFPRCxNQUFNLENBQUMsR0FBVyxFQUFFLE1BQWU7UUFDakMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUNyQyxJQUFJO2dCQUNGLFlBQVksQ0FBQyxVQUFVLENBQUMsR0FBRyxNQUFNLElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxHQUFHLEVBQUUsQ0FBQyxDQUFDO2dCQUM1RCxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDZjtZQUFDLE9BQU8sS0FBSyxFQUFFO2dCQUNkLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNmO1NBQ0YsQ0FBQyxDQUFDO0tBQ0o7Ozs7O0lBS0QsS0FBSztRQUNILE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7WUFDckMsSUFBSTtnQkFDRixZQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQ3JCLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNmO1lBQUMsT0FBTyxLQUFLLEVBQUU7Z0JBQ2QsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ2Y7U0FDRixDQUFDLENBQUM7S0FDSjtDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZWQgYnkgYm9ob2ZmaSBvbiAyMi4wNS4yMDE3LlxyXG4qL1xyXG5pbXBvcnQge01vZHVsZUNvbmZpZ30gZnJvbSAnLi9pbnRlcmZhY2VzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBQcm9taXNhYmxlU2VydmljZSB7XHJcblxyXG4gIHByaXZhdGUgcmVhZG9ubHkgX3ByZWZpeDogc3RyaW5nO1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgX2FsbG93TnVsbDogYm9vbGVhbjtcclxuXHJcbiAgY29uc3RydWN0b3IoY29uZmlnPzogTW9kdWxlQ29uZmlnKSB7XHJcbiAgICBpZiAoY29uZmlnKSB7XHJcbiAgICAgIHRoaXMuX3ByZWZpeCA9IGNvbmZpZy5wcmVmaXggfHwgdGhpcy5fcHJlZml4O1xyXG4gICAgICB0aGlzLl9hbGxvd051bGwgPSBjb25maWcuYWxsb3dOdWxsIHx8IHRoaXMuX2FsbG93TnVsbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldHMgdGhlIG51bWJlciBvZiBlbnRyaWVzIGluIHRoZSBhcHBsaWNhdGlvbnMgbG9jYWwgc3RvcmFnZS5cclxuICAgKi9cclxuICBjb3VudCgpOiBQcm9taXNlPG51bWJlcj4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICByZXNvbHZlKGxvY2FsU3RvcmFnZS5sZW5ndGgpO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHJlamVjdChlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyB0aGUgbnRoIChkZWZpbmVkIGJ5IHRoZSBpbmRleCBwYXJhbWV0ZXIpIGtleSBpbiB0aGUgc3RvcmFnZS5cclxuICAgKiBUaGUgb3JkZXIgb2Yga2V5cyBpcyB1c2VyLWFnZW50IGRlZmluZWQsIHNvIHlvdSBzaG91bGQgbm90IHJlbHkgb24gaXQuXHJcbiAgICogQHBhcmFtIGluZGV4ICAgQW4gaW50ZWdlciByZXByZXNlbnRpbmcgdGhlIG51bWJlciBvZiB0aGUga2V5IHlvdSB3YW50IHRvIGdldCB0aGUgbmFtZSBvZi4gVGhpcyBpcyBhIHplcm8tYmFzZWQgaW5kZXguXHJcbiAgICovXHJcbiAgZ2V0S2V5KGluZGV4OiBudW1iZXIpOiBQcm9taXNlPHN0cmluZyB8IG51bGw+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZTxzdHJpbmcgfCBudWxsPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIGlmIChpbmRleCA8IDApIHtcclxuICAgICAgICByZWplY3QobmV3IEVycm9yKCdpbmRleCBoYXMgdG8gYmUgMCBvciBncmVhdGVyJykpO1xyXG4gICAgICB9XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgcmVzb2x2ZShsb2NhbFN0b3JhZ2Uua2V5KGluZGV4KSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgcmVqZWN0KGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBZGRzIHRoYSB2YWx1ZSB3aXRoIHRoZSBnaXZlbiBrZXkgb3IgdXBkYXRlcyBhbiBleGlzdGluZyBlbnRyeS5cclxuICAgKiBAcGFyYW0ga2V5ICAgICBLZXkgdG8gc3RvcmUuXHJcbiAgICogQHBhcmFtIHZhbHVlICAgVmFsdWUgdG8gc3RvcmUuXHJcbiAgICogQHBhcmFtIHByZWZpeCAgT3B0aW9uYWwgcHJlZml4IHRvIG92ZXJ3cml0ZSB0aGUgY29uZmlndXJlZCBvbmUuXHJcbiAgICovXHJcbiAgc2V0KGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nLCBwcmVmaXg/OiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2FsbG93TnVsbFxyXG4gICAgICAgICAgfHwgKCF0aGlzLl9hbGxvd051bGwgJiYgdmFsdWUgIT09ICdudWxsJyAmJiB2YWx1ZSAhPT0gbnVsbCAmJiB2YWx1ZSAhPT0gdW5kZWZpbmVkKSkge1xyXG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYCR7cHJlZml4IHx8IHRoaXMuX3ByZWZpeH1fJHtrZXl9YCwgdmFsdWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5yZW1vdmUoa2V5LCBwcmVmaXgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXNvbHZlKHRydWUpO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHJlamVjdChlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0cyB0aGUgZW50cnkgc3BlY2lmaWVkIGJ5IHRoZSBnaXZlbiBrZXkgb3IgbnVsbC5cclxuICAgKiBAcGFyYW0ga2V5ICAgICBLZXkgaWRlbnRpZnlpbmcgdGhlIHdhbnRlZCBlbnRyeS5cclxuICAgKiBAcGFyYW0gcHJlZml4ICBPcHRpb25hbCBwcmVmaXggdG8gb3ZlcndyaXRlIHRoZSBjb25maWd1cmVkIG9uZS5cclxuICAgKi9cclxuICBnZXQoa2V5OiBzdHJpbmcsIHByZWZpeD86IHN0cmluZyk6IFByb21pc2U8c3RyaW5nIHwgbnVsbD4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPHN0cmluZyB8IG51bGw+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICByZXNvbHZlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGAke3ByZWZpeCB8fCB0aGlzLl9wcmVmaXh9XyR7a2V5fWApKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICByZWplY3QoZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlbW92ZXMgdGhlIGVudHJ5IHNwZWNpZmllZCBieSB0aGUgZ2l2ZW4ga2V5LlxyXG4gICAqIEBwYXJhbSBrZXkgICAgIEtleSBpZGVudGlmeWluZyB0aGUgZW50cnkgdG8gcmVtb3ZlLlxyXG4gICAqIEBwYXJhbSBwcmVmaXggIE9wdGlvbmFsIHByZWZpeCB0byBvdmVyd3JpdGUgdGhlIGNvbmZpZ3VyZWQgb25lLlxyXG4gICAqL1xyXG4gIHJlbW92ZShrZXk6IHN0cmluZywgcHJlZml4Pzogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGAke3ByZWZpeCB8fCB0aGlzLl9wcmVmaXh9XyR7a2V5fWApO1xyXG4gICAgICAgIHJlc29sdmUodHJ1ZSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgcmVqZWN0KGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDbGVhcnMgYWxsIGVudHJpZXMgb2YgdGhlIGFwcGxpY2F0aW9ucyBsb2NhbCBzdG9yYWdlLlxyXG4gICAqL1xyXG4gIGNsZWFyKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcclxuICAgICAgICByZXNvbHZlKHRydWUpO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHJlamVjdChlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=