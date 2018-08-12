/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var PromisableService = /** @class */ (function () {
    function PromisableService(config) {
        if (config) {
            this._prefix = config.prefix || this._prefix;
            this._allowNull = config.allowNull || this._allowNull;
        }
    }
    /**
     * Gets the number of entries in the applications local storage.
     */
    /**
     * Gets the number of entries in the applications local storage.
     * @return {?}
     */
    PromisableService.prototype.count = /**
     * Gets the number of entries in the applications local storage.
     * @return {?}
     */
    function () {
        return new Promise(function (resolve, reject) {
            try {
                resolve(localStorage.length);
            }
            catch (error) {
                reject(error);
            }
        });
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
    PromisableService.prototype.getKey = /**
     * Returns the nth (defined by the index parameter) key in the storage.
     * The order of keys is user-agent defined, so you should not rely on it.
     * @param {?} index   An integer representing the number of the key you want to get the name of. This is a zero-based index.
     * @return {?}
     */
    function (index) {
        return new Promise(function (resolve, reject) {
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
    PromisableService.prototype.set = /**
     * Adds tha value with the given key or updates an existing entry.
     * @param {?} key     Key to store.
     * @param {?} value   Value to store.
     * @param {?=} prefix  Optional prefix to overwrite the configured one.
     * @return {?}
     */
    function (key, value, prefix) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                if (_this._allowNull
                    || (!_this._allowNull && value !== 'null' && value !== null && value !== undefined)) {
                    localStorage.setItem((prefix || _this._prefix) + "_" + key, value);
                }
                else {
                    return _this.remove(key, prefix);
                }
                resolve(true);
            }
            catch (error) {
                reject(error);
            }
        });
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
    PromisableService.prototype.get = /**
     * Gets the entry specified by the given key or null.
     * @param {?} key     Key identifying the wanted entry.
     * @param {?=} prefix  Optional prefix to overwrite the configured one.
     * @return {?}
     */
    function (key, prefix) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                resolve(localStorage.getItem((prefix || _this._prefix) + "_" + key));
            }
            catch (error) {
                reject(error);
            }
        });
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
    PromisableService.prototype.remove = /**
     * Removes the entry specified by the given key.
     * @param {?} key     Key identifying the entry to remove.
     * @param {?=} prefix  Optional prefix to overwrite the configured one.
     * @return {?}
     */
    function (key, prefix) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                localStorage.removeItem((prefix || _this._prefix) + "_" + key);
                resolve(true);
            }
            catch (error) {
                reject(error);
            }
        });
    };
    /**
     * Clears all entries of the applications local storage.
     */
    /**
     * Clears all entries of the applications local storage.
     * @return {?}
     */
    PromisableService.prototype.clear = /**
     * Clears all entries of the applications local storage.
     * @return {?}
     */
    function () {
        return new Promise(function (resolve, reject) {
            try {
                localStorage.clear();
                resolve(true);
            }
            catch (error) {
                reject(error);
            }
        });
    };
    return PromisableService;
}());
export { PromisableService };
if (false) {
    /** @type {?} */
    PromisableService.prototype._prefix;
    /** @type {?} */
    PromisableService.prototype._allowNull;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvbWlzYWJsZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWxvY2Fsc3RvcmFnZS8iLCJzb3VyY2VzIjpbImxpYi9wcm9taXNhYmxlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUtBLElBQUE7SUFLRSwyQkFBWSxNQUFxQjtRQUMvQixJQUFJLE1BQU0sRUFBRTtZQUNWLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQzdDLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDO1NBQ3ZEO0tBQ0Y7SUFFRDs7T0FFRzs7Ozs7SUFDSCxpQ0FBSzs7OztJQUFMO1FBQ0UsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQ2pDLElBQUk7Z0JBQ0YsT0FBTyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUM5QjtZQUFDLE9BQU8sS0FBSyxFQUFFO2dCQUNkLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNmO1NBQ0YsQ0FBQyxDQUFDO0tBQ0o7SUFFRDs7OztPQUlHOzs7Ozs7O0lBQ0gsa0NBQU07Ozs7OztJQUFOLFVBQU8sS0FBYTtRQUNsQixPQUFPLElBQUksT0FBTyxDQUFnQixVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQ2hELElBQUksS0FBSyxHQUFHLENBQUMsRUFBRTtnQkFDYixNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsOEJBQThCLENBQUMsQ0FBQyxDQUFDO2FBQ25EO1lBQ0QsSUFBSTtnQkFDRixPQUFPLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2FBQ2xDO1lBQUMsT0FBTyxLQUFLLEVBQUU7Z0JBQ2QsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ2Y7U0FDRixDQUFDLENBQUM7S0FDSjtJQUVEOzs7OztPQUtHOzs7Ozs7OztJQUNILCtCQUFHOzs7Ozs7O0lBQUgsVUFBSSxHQUFXLEVBQUUsS0FBYSxFQUFFLE1BQWU7UUFBL0MsaUJBY0M7UUFiQyxPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDakMsSUFBSTtnQkFDRixJQUFJLEtBQUksQ0FBQyxVQUFVO3VCQUNkLENBQUMsQ0FBQyxLQUFJLENBQUMsVUFBVSxJQUFJLEtBQUssS0FBSyxNQUFNLElBQUksS0FBSyxLQUFLLElBQUksSUFBSSxLQUFLLEtBQUssU0FBUyxDQUFDLEVBQUU7b0JBQ3BGLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBRyxNQUFNLElBQUksS0FBSSxDQUFDLE9BQU8sVUFBSSxHQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7aUJBQ2pFO3FCQUFNO29CQUNMLE9BQU8sS0FBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUM7aUJBQ2pDO2dCQUNELE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNmO1lBQUMsT0FBTyxLQUFLLEVBQUU7Z0JBQ2QsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ2Y7U0FDRixDQUFDLENBQUM7S0FDSjtJQUVEOzs7O09BSUc7Ozs7Ozs7SUFDSCwrQkFBRzs7Ozs7O0lBQUgsVUFBSSxHQUFXLEVBQUUsTUFBZTtRQUFoQyxpQkFRQztRQVBDLE9BQU8sSUFBSSxPQUFPLENBQWdCLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDaEQsSUFBSTtnQkFDRixPQUFPLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFHLE1BQU0sSUFBSSxLQUFJLENBQUMsT0FBTyxVQUFJLEdBQUssQ0FBQyxDQUFDLENBQUM7YUFDbkU7WUFBQyxPQUFPLEtBQUssRUFBRTtnQkFDZCxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDZjtTQUNGLENBQUMsQ0FBQztLQUNKO0lBRUQ7Ozs7T0FJRzs7Ozs7OztJQUNILGtDQUFNOzs7Ozs7SUFBTixVQUFPLEdBQVcsRUFBRSxNQUFlO1FBQW5DLGlCQVNDO1FBUkMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQ2pDLElBQUk7Z0JBQ0YsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFHLE1BQU0sSUFBSSxLQUFJLENBQUMsT0FBTyxVQUFJLEdBQUssQ0FBQyxDQUFDO2dCQUM1RCxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDZjtZQUFDLE9BQU8sS0FBSyxFQUFFO2dCQUNkLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNmO1NBQ0YsQ0FBQyxDQUFDO0tBQ0o7SUFFRDs7T0FFRzs7Ozs7SUFDSCxpQ0FBSzs7OztJQUFMO1FBQ0UsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQ2pDLElBQUk7Z0JBQ0YsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUNyQixPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDZjtZQUFDLE9BQU8sS0FBSyxFQUFFO2dCQUNkLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNmO1NBQ0YsQ0FBQyxDQUFDO0tBQ0o7NEJBakhIO0lBa0hDLENBQUE7QUE3R0QsNkJBNkdDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZWQgYnkgYm9ob2ZmaSBvbiAyMi4wNS4yMDE3LlxyXG4qL1xyXG5pbXBvcnQge01vZHVsZUNvbmZpZ30gZnJvbSAnLi9pbnRlcmZhY2VzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBQcm9taXNhYmxlU2VydmljZSB7XHJcblxyXG4gIHByaXZhdGUgcmVhZG9ubHkgX3ByZWZpeDogc3RyaW5nO1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgX2FsbG93TnVsbDogYm9vbGVhbjtcclxuXHJcbiAgY29uc3RydWN0b3IoY29uZmlnPzogTW9kdWxlQ29uZmlnKSB7XHJcbiAgICBpZiAoY29uZmlnKSB7XHJcbiAgICAgIHRoaXMuX3ByZWZpeCA9IGNvbmZpZy5wcmVmaXggfHwgdGhpcy5fcHJlZml4O1xyXG4gICAgICB0aGlzLl9hbGxvd051bGwgPSBjb25maWcuYWxsb3dOdWxsIHx8IHRoaXMuX2FsbG93TnVsbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldHMgdGhlIG51bWJlciBvZiBlbnRyaWVzIGluIHRoZSBhcHBsaWNhdGlvbnMgbG9jYWwgc3RvcmFnZS5cclxuICAgKi9cclxuICBjb3VudCgpOiBQcm9taXNlPG51bWJlcj4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICByZXNvbHZlKGxvY2FsU3RvcmFnZS5sZW5ndGgpO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHJlamVjdChlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyB0aGUgbnRoIChkZWZpbmVkIGJ5IHRoZSBpbmRleCBwYXJhbWV0ZXIpIGtleSBpbiB0aGUgc3RvcmFnZS5cclxuICAgKiBUaGUgb3JkZXIgb2Yga2V5cyBpcyB1c2VyLWFnZW50IGRlZmluZWQsIHNvIHlvdSBzaG91bGQgbm90IHJlbHkgb24gaXQuXHJcbiAgICogQHBhcmFtIGluZGV4ICAgQW4gaW50ZWdlciByZXByZXNlbnRpbmcgdGhlIG51bWJlciBvZiB0aGUga2V5IHlvdSB3YW50IHRvIGdldCB0aGUgbmFtZSBvZi4gVGhpcyBpcyBhIHplcm8tYmFzZWQgaW5kZXguXHJcbiAgICovXHJcbiAgZ2V0S2V5KGluZGV4OiBudW1iZXIpOiBQcm9taXNlPHN0cmluZyB8IG51bGw+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZTxzdHJpbmcgfCBudWxsPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIGlmIChpbmRleCA8IDApIHtcclxuICAgICAgICByZWplY3QobmV3IEVycm9yKCdpbmRleCBoYXMgdG8gYmUgMCBvciBncmVhdGVyJykpO1xyXG4gICAgICB9XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgcmVzb2x2ZShsb2NhbFN0b3JhZ2Uua2V5KGluZGV4KSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgcmVqZWN0KGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBZGRzIHRoYSB2YWx1ZSB3aXRoIHRoZSBnaXZlbiBrZXkgb3IgdXBkYXRlcyBhbiBleGlzdGluZyBlbnRyeS5cclxuICAgKiBAcGFyYW0ga2V5ICAgICBLZXkgdG8gc3RvcmUuXHJcbiAgICogQHBhcmFtIHZhbHVlICAgVmFsdWUgdG8gc3RvcmUuXHJcbiAgICogQHBhcmFtIHByZWZpeCAgT3B0aW9uYWwgcHJlZml4IHRvIG92ZXJ3cml0ZSB0aGUgY29uZmlndXJlZCBvbmUuXHJcbiAgICovXHJcbiAgc2V0KGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nLCBwcmVmaXg/OiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2FsbG93TnVsbFxyXG4gICAgICAgICAgfHwgKCF0aGlzLl9hbGxvd051bGwgJiYgdmFsdWUgIT09ICdudWxsJyAmJiB2YWx1ZSAhPT0gbnVsbCAmJiB2YWx1ZSAhPT0gdW5kZWZpbmVkKSkge1xyXG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYCR7cHJlZml4IHx8IHRoaXMuX3ByZWZpeH1fJHtrZXl9YCwgdmFsdWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5yZW1vdmUoa2V5LCBwcmVmaXgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXNvbHZlKHRydWUpO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHJlamVjdChlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0cyB0aGUgZW50cnkgc3BlY2lmaWVkIGJ5IHRoZSBnaXZlbiBrZXkgb3IgbnVsbC5cclxuICAgKiBAcGFyYW0ga2V5ICAgICBLZXkgaWRlbnRpZnlpbmcgdGhlIHdhbnRlZCBlbnRyeS5cclxuICAgKiBAcGFyYW0gcHJlZml4ICBPcHRpb25hbCBwcmVmaXggdG8gb3ZlcndyaXRlIHRoZSBjb25maWd1cmVkIG9uZS5cclxuICAgKi9cclxuICBnZXQoa2V5OiBzdHJpbmcsIHByZWZpeD86IHN0cmluZyk6IFByb21pc2U8c3RyaW5nIHwgbnVsbD4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPHN0cmluZyB8IG51bGw+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICByZXNvbHZlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGAke3ByZWZpeCB8fCB0aGlzLl9wcmVmaXh9XyR7a2V5fWApKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICByZWplY3QoZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlbW92ZXMgdGhlIGVudHJ5IHNwZWNpZmllZCBieSB0aGUgZ2l2ZW4ga2V5LlxyXG4gICAqIEBwYXJhbSBrZXkgICAgIEtleSBpZGVudGlmeWluZyB0aGUgZW50cnkgdG8gcmVtb3ZlLlxyXG4gICAqIEBwYXJhbSBwcmVmaXggIE9wdGlvbmFsIHByZWZpeCB0byBvdmVyd3JpdGUgdGhlIGNvbmZpZ3VyZWQgb25lLlxyXG4gICAqL1xyXG4gIHJlbW92ZShrZXk6IHN0cmluZywgcHJlZml4Pzogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGAke3ByZWZpeCB8fCB0aGlzLl9wcmVmaXh9XyR7a2V5fWApO1xyXG4gICAgICAgIHJlc29sdmUodHJ1ZSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgcmVqZWN0KGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDbGVhcnMgYWxsIGVudHJpZXMgb2YgdGhlIGFwcGxpY2F0aW9ucyBsb2NhbCBzdG9yYWdlLlxyXG4gICAqL1xyXG4gIGNsZWFyKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcclxuICAgICAgICByZXNvbHZlKHRydWUpO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHJlamVjdChlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=