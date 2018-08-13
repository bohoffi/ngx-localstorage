import { InjectionToken, Injectable, Inject, Directive, ElementRef, EventEmitter, Input, Output, NgModule, Optional, SkipSelf } from '@angular/core';
import { fromEvent, BehaviorSubject } from 'rxjs';
import { share, filter, debounceTime } from 'rxjs/operators';

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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var getProperty = function (path, object) {
    return path.reduce(function (obj, p) { return (!!obj) ? obj[p] : null; }, object);
};
/** @type {?} */
var setProperty = function (path, value, object, falsyTransformer) {
    /** @type {?} */
    var lastKeyIndex = path.length - 1;
    for (var i = 0; i < lastKeyIndex; ++i) {
        /** @type {?} */
        var key = path[i];
        if (!(key in object)) {
            object[key] = {};
        }
        object = object[key];
    }
    object[path[lastKeyIndex]] = (!value || (typeof value === 'string' && value === 'false'))
        && !!falsyTransformer ? falsyTransformer() : value;
};
/** @type {?} */
var defaultConfig = {
    allowNull: true,
    prefix: 'ngx_local_storage'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var ModuleConfigToken = new InjectionToken('moduleConfig');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var StorageEventService = /** @class */ (function () {
    function StorageEventService() {
        var _this = this;
        this._eventStream = new BehaviorSubject(null);
        fromEvent(window, 'storage')
            .subscribe(function (ev) { return _this._eventStream.next(ev); });
    }
    Object.defineProperty(StorageEventService.prototype, "stream", {
        get: /**
         * @return {?}
         */
        function () {
            return this._eventStream
                .asObservable().pipe(filter(function (ev) { return !!ev; }), share());
        },
        enumerable: true,
        configurable: true
    });
    StorageEventService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StorageEventService.ctorParameters = function () { return []; };
    return StorageEventService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var LocalStorageDirective = /** @class */ (function () {
    function LocalStorageDirective(er, lss, es) {
        var _this = this;
        this.er = er;
        this.lss = lss;
        this.es = es;
        this.lsDebounce = 0;
        this.lsInitFromStorage = false;
        this.lsStoredValue = new EventEmitter();
        this._valuePath = [];
        this.es.stream.pipe(
        // TODO: filter should be more accurate
        filter(function (ev) { return ev.key.indexOf(_this.lsKey) >= 0; }))
            .subscribe(function (ev) {
            setProperty(_this._valuePath.length ? _this._valuePath : ['value'], ev.newValue, _this.er.nativeElement, _this.lsFalsyTransformer);
        });
    }
    /**
     * @return {?}
     */
    LocalStorageDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this._initKey();
        this._initFromStorage();
        this._hookEvent();
    };
    Object.defineProperty(LocalStorageDirective.prototype, "lsValuePath", {
        set: /**
         * @param {?} path
         * @return {?}
         */
        function (path) {
            if (path != null) {
                this._valuePath = Array.isArray(path) ? path : path.split(',');
            }
            else {
                this._valuePath = [];
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    LocalStorageDirective.prototype._initKey = /**
     * @return {?}
     */
    function () {
        if (!this.lsKey) {
            if (!this.er.nativeElement.id && !this.er.nativeElement.name) {
                throw new Error('No key or element id or name supplied!');
            }
            this.lsKey = this.er.nativeElement.id || this.er.nativeElement.name;
        }
    };
    /**
     * @return {?}
     */
    LocalStorageDirective.prototype._hookEvent = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.lsEvent) {
            this._eventSubscription = fromEvent(this.er.nativeElement, this.lsEvent).pipe(debounceTime(this.lsDebounce))
                .subscribe(function () {
                _this.lss.asPromisable().set(_this.lsKey, getProperty(_this._valuePath.length ? _this._valuePath : ['value'], _this.er.nativeElement), _this.lsPrefix)
                    .then(function () {
                    _this.lss.asPromisable().get(_this.lsKey, _this.lsPrefix)
                        .then(function (value) {
                        _this.lsStoredValue.emit(value);
                    })
                        .catch(function (err) { return console.error(err); });
                })
                    .catch(function (err) { return console.error(err); });
            });
        }
    };
    /**
     * @return {?}
     */
    LocalStorageDirective.prototype._initFromStorage = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.lsInitFromStorage) {
            this.lss.asPromisable().get(this.lsKey, this.lsPrefix)
                .then(function (storedValue) {
                setProperty(_this._valuePath.length ? _this._valuePath : ['value'], storedValue, _this.er.nativeElement, _this.lsFalsyTransformer);
            })
                .catch(function (err) { return console.error(err); });
        }
    };
    /**
     * @return {?}
     */
    LocalStorageDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this._eventSubscription && !this._eventSubscription.closed) {
            this._eventSubscription.unsubscribe();
        }
    };
    LocalStorageDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[ngxLocalStorage]'
                },] }
    ];
    /** @nocollapse */
    LocalStorageDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: LocalStorageService },
        { type: StorageEventService }
    ]; };
    LocalStorageDirective.propDecorators = {
        lsKey: [{ type: Input, args: ['ngxLocalStorage',] }],
        lsPrefix: [{ type: Input }],
        lsEvent: [{ type: Input }],
        lsDebounce: [{ type: Input }],
        lsInitFromStorage: [{ type: Input }],
        lsFalsyTransformer: [{ type: Input }],
        lsStoredValue: [{ type: Output }],
        lsValuePath: [{ type: Input }]
    };
    return LocalStorageDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @param {?=} options
 * @return {?}
 */
function ngxLocalStorage(options) {
    return function (target, propertyDescription) {
        /** @type {?} */
        var service = new LocalStorageService({
            prefix: !!options && !!options.prefix ? options.prefix : ''
        });
        /** @type {?} */
        var key = !!options && !!options.key ? options.key : propertyDescription;
        /** @type {?} */
        var eventService = new StorageEventService();
        eventService.stream.pipe(
        // TODO: filter should be more accurate
        filter(function (ev) { return ev.key.indexOf(key) >= 0; }))
            .subscribe(function (ev) {
            if (!!ev.newValue && typeof ev.newValue === 'string') {
                if (ev.newValue !== 'null') {
                    target[propertyDescription] = ev.newValue;
                }
                else {
                    target[propertyDescription] = !!options.nullTransformer ? options.nullTransformer() : null;
                }
            }
        });
        Object.defineProperty(target, propertyDescription, {
            get: function () {
                /** @type {?} */
                var storageValue = service.get(key);
                return storageValue == null && !!options.nullTransformer ? options.nullTransformer() : storageValue;
            },
            set: function (value) {
                service.set(key, value);
            }
        });
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @param {?} moduleConfig
 * @return {?}
 */
function provideStorageService(moduleConfig) {
    return new LocalStorageService(moduleConfig);
}
var NgxLocalStorageModule = /** @class */ (function () {
    function NgxLocalStorageModule(parentModule) {
        if (parentModule) {
            throw new Error('NgxLocalStorageModule is already loaded. Import it in the AppModule only');
        }
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    NgxLocalStorageModule.forRoot = /**
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        return {
            ngModule: NgxLocalStorageModule,
            providers: [
                {
                    provide: ModuleConfigToken,
                    useValue: config
                },
                {
                    provide: LocalStorageService,
                    useFactory: provideStorageService,
                    deps: [
                        ModuleConfigToken
                    ]
                },
                StorageEventService
            ]
        };
    };
    NgxLocalStorageModule.decorators = [
        { type: NgModule, args: [{
                    imports: [],
                    declarations: [
                        LocalStorageDirective
                    ],
                    exports: [
                        LocalStorageDirective
                    ]
                },] }
    ];
    /** @nocollapse */
    NgxLocalStorageModule.ctorParameters = function () { return [
        { type: NgxLocalStorageModule, decorators: [{ type: Optional }, { type: SkipSelf }] }
    ]; };
    return NgxLocalStorageModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { LocalStorageService, StorageEventService, LocalStorageDirective, ngxLocalStorage, provideStorageService, NgxLocalStorageModule, ModuleConfigToken as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWxvY2Fsc3RvcmFnZS5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmd4LWxvY2Fsc3RvcmFnZS9saWIvcHJvbWlzYWJsZS5zZXJ2aWNlLnRzIiwibmc6Ly9uZ3gtbG9jYWxzdG9yYWdlL2xpYi91dGlscy50cyIsIm5nOi8vbmd4LWxvY2Fsc3RvcmFnZS9saWIvdG9rZW4udHMiLCJuZzovL25neC1sb2NhbHN0b3JhZ2UvbGliL25neC1sb2NhbHN0b3JhZ2Uuc2VydmljZS50cyIsIm5nOi8vbmd4LWxvY2Fsc3RvcmFnZS9saWIvc3RvcmFnZS1ldmVudC5zZXJ2aWNlLnRzIiwibmc6Ly9uZ3gtbG9jYWxzdG9yYWdlL2xpYi9kaXJlY3RpdmVzL25neC1sb2NhbHN0b3JhZ2UuZGlyZWN0aXZlLnRzIiwibmc6Ly9uZ3gtbG9jYWxzdG9yYWdlL2xpYi9kZWNvcmF0b3JzLnRzIiwibmc6Ly9uZ3gtbG9jYWxzdG9yYWdlL2xpYi9uZ3gtbG9jYWxzdG9yYWdlLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ3JlYXRlZCBieSBib2hvZmZpIG9uIDIyLjA1LjIwMTcuXHJcbiovXHJcbmltcG9ydCB7TW9kdWxlQ29uZmlnfSBmcm9tICcuL2ludGVyZmFjZXMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFByb21pc2FibGVTZXJ2aWNlIHtcclxuXHJcbiAgcHJpdmF0ZSByZWFkb25seSBfcHJlZml4OiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBfYWxsb3dOdWxsOiBib29sZWFuO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihjb25maWc/OiBNb2R1bGVDb25maWcpIHtcclxuICAgIGlmIChjb25maWcpIHtcclxuICAgICAgdGhpcy5fcHJlZml4ID0gY29uZmlnLnByZWZpeCB8fCB0aGlzLl9wcmVmaXg7XHJcbiAgICAgIHRoaXMuX2FsbG93TnVsbCA9IGNvbmZpZy5hbGxvd051bGwgfHwgdGhpcy5fYWxsb3dOdWxsO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0cyB0aGUgbnVtYmVyIG9mIGVudHJpZXMgaW4gdGhlIGFwcGxpY2F0aW9ucyBsb2NhbCBzdG9yYWdlLlxyXG4gICAqL1xyXG4gIGNvdW50KCk6IFByb21pc2U8bnVtYmVyPiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIHJlc29sdmUobG9jYWxTdG9yYWdlLmxlbmd0aCk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgcmVqZWN0KGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIHRoZSBudGggKGRlZmluZWQgYnkgdGhlIGluZGV4IHBhcmFtZXRlcikga2V5IGluIHRoZSBzdG9yYWdlLlxyXG4gICAqIFRoZSBvcmRlciBvZiBrZXlzIGlzIHVzZXItYWdlbnQgZGVmaW5lZCwgc28geW91IHNob3VsZCBub3QgcmVseSBvbiBpdC5cclxuICAgKiBAcGFyYW0gaW5kZXggICBBbiBpbnRlZ2VyIHJlcHJlc2VudGluZyB0aGUgbnVtYmVyIG9mIHRoZSBrZXkgeW91IHdhbnQgdG8gZ2V0IHRoZSBuYW1lIG9mLiBUaGlzIGlzIGEgemVyby1iYXNlZCBpbmRleC5cclxuICAgKi9cclxuICBnZXRLZXkoaW5kZXg6IG51bWJlcik6IFByb21pc2U8c3RyaW5nIHwgbnVsbD4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPHN0cmluZyB8IG51bGw+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgaWYgKGluZGV4IDwgMCkge1xyXG4gICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ2luZGV4IGhhcyB0byBiZSAwIG9yIGdyZWF0ZXInKSk7XHJcbiAgICAgIH1cclxuICAgICAgdHJ5IHtcclxuICAgICAgICByZXNvbHZlKGxvY2FsU3RvcmFnZS5rZXkoaW5kZXgpKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICByZWplY3QoZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFkZHMgdGhhIHZhbHVlIHdpdGggdGhlIGdpdmVuIGtleSBvciB1cGRhdGVzIGFuIGV4aXN0aW5nIGVudHJ5LlxyXG4gICAqIEBwYXJhbSBrZXkgICAgIEtleSB0byBzdG9yZS5cclxuICAgKiBAcGFyYW0gdmFsdWUgICBWYWx1ZSB0byBzdG9yZS5cclxuICAgKiBAcGFyYW0gcHJlZml4ICBPcHRpb25hbCBwcmVmaXggdG8gb3ZlcndyaXRlIHRoZSBjb25maWd1cmVkIG9uZS5cclxuICAgKi9cclxuICBzZXQoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcsIHByZWZpeD86IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBpZiAodGhpcy5fYWxsb3dOdWxsXHJcbiAgICAgICAgICB8fCAoIXRoaXMuX2FsbG93TnVsbCAmJiB2YWx1ZSAhPT0gJ251bGwnICYmIHZhbHVlICE9PSBudWxsICYmIHZhbHVlICE9PSB1bmRlZmluZWQpKSB7XHJcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgJHtwcmVmaXggfHwgdGhpcy5fcHJlZml4fV8ke2tleX1gLCB2YWx1ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJldHVybiB0aGlzLnJlbW92ZShrZXksIHByZWZpeCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlc29sdmUodHJ1ZSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgcmVqZWN0KGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXRzIHRoZSBlbnRyeSBzcGVjaWZpZWQgYnkgdGhlIGdpdmVuIGtleSBvciBudWxsLlxyXG4gICAqIEBwYXJhbSBrZXkgICAgIEtleSBpZGVudGlmeWluZyB0aGUgd2FudGVkIGVudHJ5LlxyXG4gICAqIEBwYXJhbSBwcmVmaXggIE9wdGlvbmFsIHByZWZpeCB0byBvdmVyd3JpdGUgdGhlIGNvbmZpZ3VyZWQgb25lLlxyXG4gICAqL1xyXG4gIGdldChrZXk6IHN0cmluZywgcHJlZml4Pzogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmcgfCBudWxsPiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2U8c3RyaW5nIHwgbnVsbD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIHJlc29sdmUobG9jYWxTdG9yYWdlLmdldEl0ZW0oYCR7cHJlZml4IHx8IHRoaXMuX3ByZWZpeH1fJHtrZXl9YCkpO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHJlamVjdChlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVtb3ZlcyB0aGUgZW50cnkgc3BlY2lmaWVkIGJ5IHRoZSBnaXZlbiBrZXkuXHJcbiAgICogQHBhcmFtIGtleSAgICAgS2V5IGlkZW50aWZ5aW5nIHRoZSBlbnRyeSB0byByZW1vdmUuXHJcbiAgICogQHBhcmFtIHByZWZpeCAgT3B0aW9uYWwgcHJlZml4IHRvIG92ZXJ3cml0ZSB0aGUgY29uZmlndXJlZCBvbmUuXHJcbiAgICovXHJcbiAgcmVtb3ZlKGtleTogc3RyaW5nLCBwcmVmaXg/OiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oYCR7cHJlZml4IHx8IHRoaXMuX3ByZWZpeH1fJHtrZXl9YCk7XHJcbiAgICAgICAgcmVzb2x2ZSh0cnVlKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICByZWplY3QoZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENsZWFycyBhbGwgZW50cmllcyBvZiB0aGUgYXBwbGljYXRpb25zIGxvY2FsIHN0b3JhZ2UuXHJcbiAgICovXHJcbiAgY2xlYXIoKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xyXG4gICAgICAgIHJlc29sdmUodHJ1ZSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgcmVqZWN0KGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGJvaG9mZmkgb24gMDQuMDQuMjAxNy5cclxuICovXHJcbmltcG9ydCB7TW9kdWxlQ29uZmlnfSBmcm9tICcuL2ludGVyZmFjZXMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFByb3BlcnR5ID0gKHBhdGg6IHN0cmluZ1tdLCBvYmplY3Q6IGFueSkgPT5cclxuICBwYXRoLnJlZHVjZSgob2JqOiBhbnksIHA6IGFueSkgPT4gKCEhb2JqKSA/IG9ialtwXSA6IG51bGwsIG9iamVjdCk7XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0UHJvcGVydHkgPSAocGF0aDogc3RyaW5nW10gfCBzdHJpbmcsIHZhbHVlOiBhbnksIG9iamVjdDogYW55LCBmYWxzeVRyYW5zZm9ybWVyPzogKCkgPT4gYW55KSA9PiB7XHJcbiAgY29uc3QgbGFzdEtleUluZGV4ID0gcGF0aC5sZW5ndGggLSAxO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGFzdEtleUluZGV4OyArK2kpIHtcclxuICAgIGNvbnN0IGtleSA9IHBhdGhbaV07XHJcbiAgICBpZiAoIShrZXkgaW4gb2JqZWN0KSkge1xyXG4gICAgICBvYmplY3Rba2V5XSA9IHt9O1xyXG4gICAgfVxyXG4gICAgb2JqZWN0ID0gb2JqZWN0W2tleV07XHJcbiAgfVxyXG4gIG9iamVjdFtwYXRoW2xhc3RLZXlJbmRleF1dID0gKCF2YWx1ZSB8fCAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiB2YWx1ZSA9PT0gJ2ZhbHNlJykpXHJcbiAgJiYgISFmYWxzeVRyYW5zZm9ybWVyID8gZmFsc3lUcmFuc2Zvcm1lcigpIDogdmFsdWU7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZGVmYXVsdENvbmZpZzogTW9kdWxlQ29uZmlnID0ge1xyXG4gIGFsbG93TnVsbDogdHJ1ZSxcclxuICBwcmVmaXg6ICduZ3hfbG9jYWxfc3RvcmFnZSdcclxufTtcclxuIiwiaW1wb3J0IHtNb2R1bGVDb25maWd9IGZyb20gJy4vaW50ZXJmYWNlcyc7XHJcbmltcG9ydCB7SW5qZWN0aW9uVG9rZW59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1vZHVsZUNvbmZpZ1Rva2VuID0gbmV3IEluamVjdGlvblRva2VuPE1vZHVsZUNvbmZpZz4oJ21vZHVsZUNvbmZpZycpO1xyXG4iLCJpbXBvcnQge0luamVjdGFibGUsIE9wdGlvbmFsLCBJbmplY3R9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHtNb2R1bGVDb25maWd9IGZyb20gJy4vaW50ZXJmYWNlcyc7XHJcbmltcG9ydCB7UHJvbWlzYWJsZVNlcnZpY2V9IGZyb20gJy4vcHJvbWlzYWJsZS5zZXJ2aWNlJztcclxuaW1wb3J0IHtkZWZhdWx0Q29uZmlnfSBmcm9tICcuL3V0aWxzJztcclxuaW1wb3J0IHsgTW9kdWxlQ29uZmlnVG9rZW4gfSBmcm9tICcuL3Rva2VuJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIExvY2FsU3RvcmFnZVNlcnZpY2Uge1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgX3ByZWZpeDogc3RyaW5nO1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgX2FsbG93TnVsbDogYm9vbGVhbjtcclxuICBwcml2YXRlIHJlYWRvbmx5IF9wcm9taXNhYmxlOiBQcm9taXNhYmxlU2VydmljZTtcclxuXHJcbiAgY29uc3RydWN0b3IoQEluamVjdChNb2R1bGVDb25maWdUb2tlbikgY29uZmlnPzogTW9kdWxlQ29uZmlnKSB7XHJcbiAgICBpZiAoY29uZmlnKSB7XHJcbiAgICAgIHRoaXMuX3ByZWZpeCA9IGNvbmZpZy5wcmVmaXggfHwgZGVmYXVsdENvbmZpZy5wcmVmaXg7XHJcbiAgICAgIHRoaXMuX2FsbG93TnVsbCA9IGNvbmZpZy5hbGxvd051bGwgfHwgZGVmYXVsdENvbmZpZy5hbGxvd051bGw7XHJcbiAgICB9XHJcbiAgICB0aGlzLl9wcm9taXNhYmxlID0gbmV3IFByb21pc2FibGVTZXJ2aWNlKHtcclxuICAgICAgYWxsb3dOdWxsOiB0aGlzLl9hbGxvd051bGwsXHJcbiAgICAgIHByZWZpeDogdGhpcy5fcHJlZml4XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGFzUHJvbWlzYWJsZSgpOiBQcm9taXNhYmxlU2VydmljZSB7XHJcbiAgICByZXR1cm4gdGhpcy5fcHJvbWlzYWJsZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldHMgdGhlIG51bWJlciBvZiBlbnRyaWVzIGluIHRoZSBhcHBsaWNhdGlvbnMgbG9jYWwgc3RvcmFnZS5cclxuICAgKi9cclxuICBjb3VudCgpOiBudW1iZXIgfCB1bmRlZmluZWQge1xyXG4gICAgdHJ5IHtcclxuICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5sZW5ndGg7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgdGhlIG50aCAoZGVmaW5lZCBieSB0aGUgaW5kZXggcGFyYW1ldGVyKSBrZXkgaW4gdGhlIHN0b3JhZ2UuXHJcbiAgICogVGhlIG9yZGVyIG9mIGtleXMgaXMgdXNlci1hZ2VudCBkZWZpbmVkLCBzbyB5b3Ugc2hvdWxkIG5vdCByZWx5IG9uIGl0LlxyXG4gICAqIEBwYXJhbSBpbmRleCAgIEFuIGludGVnZXIgcmVwcmVzZW50aW5nIHRoZSBudW1iZXIgb2YgdGhlIGtleSB5b3Ugd2FudCB0byBnZXQgdGhlIG5hbWUgb2YuIFRoaXMgaXMgYSB6ZXJvLWJhc2VkIGluZGV4LlxyXG4gICAqL1xyXG4gIGdldEtleShpbmRleDogbnVtYmVyKTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCB7XHJcbiAgICBpZiAoaW5kZXggPCAwKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IobmV3IEVycm9yKCdpbmRleCBoYXMgdG8gYmUgMCBvciBncmVhdGVyJykpO1xyXG4gICAgfVxyXG4gICAgdHJ5IHtcclxuICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5rZXkoaW5kZXgpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBZGRzIHRoYSB2YWx1ZSB3aXRoIHRoZSBnaXZlbiBrZXkgb3IgdXBkYXRlcyBhbiBleGlzdGluZyBlbnRyeS5cclxuICAgKiBAcGFyYW0ga2V5ICAgICBLZXkgdG8gc3RvcmUuXHJcbiAgICogQHBhcmFtIHZhbHVlICAgVmFsdWUgdG8gc3RvcmUuXHJcbiAgICogQHBhcmFtIHByZWZpeCAgT3B0aW9uYWwgcHJlZml4IHRvIG92ZXJ3cml0ZSB0aGUgY29uZmlndXJlZCBvbmUuXHJcbiAgICovXHJcbiAgc2V0KGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nLCBwcmVmaXg/OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGlmIChcclxuICAgICAgdGhpcy5fYWxsb3dOdWxsIHx8XHJcbiAgICAgICghdGhpcy5fYWxsb3dOdWxsICYmXHJcbiAgICAgICAgdmFsdWUgIT09ICdudWxsJyAmJlxyXG4gICAgICAgIHZhbHVlICE9PSBudWxsICYmXHJcbiAgICAgICAgdmFsdWUgIT09IHVuZGVmaW5lZClcclxuICAgICkge1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgJHtwcmVmaXggfHwgdGhpcy5fcHJlZml4fV8ke2tleX1gLCB2YWx1ZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnJlbW92ZShrZXksIHByZWZpeCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXRzIHRoZSBlbnRyeSBzcGVjaWZpZWQgYnkgdGhlIGdpdmVuIGtleSBvciBudWxsLlxyXG4gICAqIEBwYXJhbSBrZXkgICAgIEtleSBpZGVudGlmeWluZyB0aGUgd2FudGVkIGVudHJ5LlxyXG4gICAqIEBwYXJhbSBwcmVmaXggIE9wdGlvbmFsIHByZWZpeCB0byBvdmVyd3JpdGUgdGhlIGNvbmZpZ3VyZWQgb25lLlxyXG4gICAqL1xyXG4gIGdldChrZXk6IHN0cmluZywgcHJlZml4Pzogc3RyaW5nKTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCB7XHJcbiAgICB0cnkge1xyXG4gICAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oYCR7cHJlZml4IHx8IHRoaXMuX3ByZWZpeH1fJHtrZXl9YCk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlbW92ZXMgdGhlIGVudHJ5IHNwZWNpZmllZCBieSB0aGUgZ2l2ZW4ga2V5LlxyXG4gICAqIEBwYXJhbSBrZXkgICAgIEtleSBpZGVudGlmeWluZyB0aGUgZW50cnkgdG8gcmVtb3ZlLlxyXG4gICAqIEBwYXJhbSBwcmVmaXggIE9wdGlvbmFsIHByZWZpeCB0byBvdmVyd3JpdGUgdGhlIGNvbmZpZ3VyZWQgb25lLlxyXG4gICAqL1xyXG4gIHJlbW92ZShrZXk6IHN0cmluZywgcHJlZml4Pzogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB0cnkge1xyXG4gICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShgJHtwcmVmaXggfHwgdGhpcy5fcHJlZml4fV8ke2tleX1gKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2xlYXJzIGFsbCBlbnRyaWVzIG9mIHRoZSBhcHBsaWNhdGlvbnMgbG9jYWwgc3RvcmFnZS5cclxuICAgKi9cclxuICBjbGVhcigpOiB2b2lkIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGJvaG9mZmkgb24gMzEuMDEuMjAxOC5cclxuICovXHJcbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7ZnJvbUV2ZW50IGFzIG9ic2VydmFibGVGcm9tRXZlbnQsIEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7c2hhcmUsIGZpbHRlcn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgU3RvcmFnZUV2ZW50U2VydmljZSB7XHJcblxyXG4gIHByaXZhdGUgX2V2ZW50U3RyZWFtOiBCZWhhdmlvclN1YmplY3Q8U3RvcmFnZUV2ZW50PiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8U3RvcmFnZUV2ZW50PihudWxsKTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBvYnNlcnZhYmxlRnJvbUV2ZW50KHdpbmRvdywgJ3N0b3JhZ2UnKVxyXG4gICAgICAuc3Vic2NyaWJlKChldjogU3RvcmFnZUV2ZW50KSA9PiB0aGlzLl9ldmVudFN0cmVhbS5uZXh0KGV2KSk7XHJcbiAgfVxyXG5cclxuICBnZXQgc3RyZWFtKCk6IE9ic2VydmFibGU8U3RvcmFnZUV2ZW50PiB7XHJcbiAgICByZXR1cm4gdGhpcy5fZXZlbnRTdHJlYW1cclxuICAgICAgLmFzT2JzZXJ2YWJsZSgpLnBpcGUoXHJcbiAgICAgICAgZmlsdGVyKGV2ID0+ICEhZXYpLFxyXG4gICAgICAgIHNoYXJlKClcclxuICAgICAgKTtcclxuICB9XHJcbn1cclxuIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgYm9ob2ZmaSBvbiAwMy4wNC4yMDE3LlxyXG4gKi9cclxuaW1wb3J0IHtBZnRlclZpZXdJbml0LCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uRGVzdHJveSwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtmcm9tRXZlbnQgYXMgb2JzZXJ2YWJsZUZyb21FdmVudCwgU3Vic2NyaXB0aW9ufSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHtkZWJvdW5jZVRpbWUsIGZpbHRlcn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHtnZXRQcm9wZXJ0eSwgc2V0UHJvcGVydHl9IGZyb20gJy4uL3V0aWxzJztcclxuaW1wb3J0IHtMb2NhbFN0b3JhZ2VTZXJ2aWNlfSBmcm9tICcuLi9uZ3gtbG9jYWxzdG9yYWdlLnNlcnZpY2UnO1xyXG5pbXBvcnQge1N0b3JhZ2VFdmVudFNlcnZpY2V9IGZyb20gJy4uL3N0b3JhZ2UtZXZlbnQuc2VydmljZSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tuZ3hMb2NhbFN0b3JhZ2VdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTG9jYWxTdG9yYWdlRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcclxuXHJcbiAgQElucHV0KCduZ3hMb2NhbFN0b3JhZ2UnKVxyXG4gIGxzS2V5OiBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICBsc1ByZWZpeDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpXHJcbiAgbHNFdmVudDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpXHJcbiAgbHNEZWJvdW5jZSA9IDA7XHJcbiAgQElucHV0KClcclxuICBsc0luaXRGcm9tU3RvcmFnZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpXHJcbiAgbHNGYWxzeVRyYW5zZm9ybWVyPzogKCkgPT4gYW55O1xyXG5cclxuICBAT3V0cHV0KClcclxuICBsc1N0b3JlZFZhbHVlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIHByaXZhdGUgX2V2ZW50U3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcbiAgcHJpdmF0ZSBfdmFsdWVQYXRoOiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVyOiBFbGVtZW50UmVmLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgbHNzOiBMb2NhbFN0b3JhZ2VTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgZXM6IFN0b3JhZ2VFdmVudFNlcnZpY2UpIHtcclxuXHJcbiAgICB0aGlzLmVzLnN0cmVhbS5waXBlKFxyXG4gICAgLy8gVE9ETzogZmlsdGVyIHNob3VsZCBiZSBtb3JlIGFjY3VyYXRlXHJcbiAgICAgIGZpbHRlcigoZXY6IFN0b3JhZ2VFdmVudCkgPT4gZXYua2V5LmluZGV4T2YodGhpcy5sc0tleSkgPj0gMClcclxuICAgIClcclxuICAgICAgLnN1YnNjcmliZSgoZXY6IFN0b3JhZ2VFdmVudCkgPT4ge1xyXG4gICAgICAgIHNldFByb3BlcnR5KHRoaXMuX3ZhbHVlUGF0aC5sZW5ndGggPyB0aGlzLl92YWx1ZVBhdGggOiBbJ3ZhbHVlJ10sIGV2Lm5ld1ZhbHVlLCB0aGlzLmVyLm5hdGl2ZUVsZW1lbnQsIHRoaXMubHNGYWxzeVRyYW5zZm9ybWVyKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLl9pbml0S2V5KCk7XHJcbiAgICB0aGlzLl9pbml0RnJvbVN0b3JhZ2UoKTtcclxuICAgIHRoaXMuX2hvb2tFdmVudCgpO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbHNWYWx1ZVBhdGgocGF0aDogYW55W10gfCBzdHJpbmcpIHtcclxuICAgIGlmIChwYXRoICE9IG51bGwpIHtcclxuICAgICAgdGhpcy5fdmFsdWVQYXRoID0gQXJyYXkuaXNBcnJheShwYXRoKSA/IHBhdGggOiBwYXRoLnNwbGl0KCcsJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl92YWx1ZVBhdGggPSBbXTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2luaXRLZXkoKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMubHNLZXkpIHtcclxuICAgICAgaWYgKCF0aGlzLmVyLm5hdGl2ZUVsZW1lbnQuaWQgJiYgIXRoaXMuZXIubmF0aXZlRWxlbWVudC5uYW1lKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBrZXkgb3IgZWxlbWVudCBpZCBvciBuYW1lIHN1cHBsaWVkIScpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMubHNLZXkgPSB0aGlzLmVyLm5hdGl2ZUVsZW1lbnQuaWQgfHwgdGhpcy5lci5uYXRpdmVFbGVtZW50Lm5hbWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9ob29rRXZlbnQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5sc0V2ZW50KSB7XHJcbiAgICAgIHRoaXMuX2V2ZW50U3Vic2NyaXB0aW9uID0gb2JzZXJ2YWJsZUZyb21FdmVudCh0aGlzLmVyLm5hdGl2ZUVsZW1lbnQsIHRoaXMubHNFdmVudCkucGlwZShcclxuICAgICAgICBkZWJvdW5jZVRpbWUodGhpcy5sc0RlYm91bmNlKSlcclxuICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMubHNzLmFzUHJvbWlzYWJsZSgpLnNldCh0aGlzLmxzS2V5LFxyXG4gICAgICAgICAgICBnZXRQcm9wZXJ0eSh0aGlzLl92YWx1ZVBhdGgubGVuZ3RoID8gdGhpcy5fdmFsdWVQYXRoIDogWyd2YWx1ZSddLCB0aGlzLmVyLm5hdGl2ZUVsZW1lbnQpLFxyXG4gICAgICAgICAgICB0aGlzLmxzUHJlZml4KVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgdGhpcy5sc3MuYXNQcm9taXNhYmxlKCkuZ2V0KHRoaXMubHNLZXksIHRoaXMubHNQcmVmaXgpXHJcbiAgICAgICAgICAgICAgICAudGhlbigodmFsdWU6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLmxzU3RvcmVkVmFsdWUuZW1pdCh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnI6IEVycm9yKSA9PiBjb25zb2xlLmVycm9yKGVycikpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycjogRXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9pbml0RnJvbVN0b3JhZ2UoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5sc0luaXRGcm9tU3RvcmFnZSkge1xyXG4gICAgICB0aGlzLmxzcy5hc1Byb21pc2FibGUoKS5nZXQodGhpcy5sc0tleSwgdGhpcy5sc1ByZWZpeClcclxuICAgICAgICAudGhlbigoc3RvcmVkVmFsdWU6IGFueSkgPT4ge1xyXG4gICAgICAgICAgc2V0UHJvcGVydHkodGhpcy5fdmFsdWVQYXRoLmxlbmd0aCA/IHRoaXMuX3ZhbHVlUGF0aCA6IFsndmFsdWUnXSwgc3RvcmVkVmFsdWUsIHRoaXMuZXIubmF0aXZlRWxlbWVudCwgdGhpcy5sc0ZhbHN5VHJhbnNmb3JtZXIpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnI6IEVycm9yKSA9PiBjb25zb2xlLmVycm9yKGVycikpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5fZXZlbnRTdWJzY3JpcHRpb24gJiYgIXRoaXMuX2V2ZW50U3Vic2NyaXB0aW9uLmNsb3NlZCkge1xyXG4gICAgICB0aGlzLl9ldmVudFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIvKipcclxuICogQ3JlYXRlZCBieSBib2hvZmZpIG9uIDIyLjA1LjIwMTcuXHJcbiAqL1xyXG5pbXBvcnQge2ZpbHRlcn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHtEZWNvcmF0b3JPcHRzfSBmcm9tICcuL2ludGVyZmFjZXMnO1xyXG5pbXBvcnQge0xvY2FsU3RvcmFnZVNlcnZpY2V9IGZyb20gJy4vbmd4LWxvY2Fsc3RvcmFnZS5zZXJ2aWNlJztcclxuaW1wb3J0IHtTdG9yYWdlRXZlbnRTZXJ2aWNlfSBmcm9tICcuL3N0b3JhZ2UtZXZlbnQuc2VydmljZSc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbmd4TG9jYWxTdG9yYWdlKG9wdGlvbnM/OiBEZWNvcmF0b3JPcHRzKSB7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQ6IE9iamVjdCwgcHJvcGVydHlEZXNjcmlwdGlvbjogc3RyaW5nKSB7XHJcblxyXG4gICAgY29uc3Qgc2VydmljZTogTG9jYWxTdG9yYWdlU2VydmljZSA9IG5ldyBMb2NhbFN0b3JhZ2VTZXJ2aWNlKHtcclxuICAgICAgcHJlZml4OiAhIW9wdGlvbnMgJiYgISFvcHRpb25zLnByZWZpeCA/IG9wdGlvbnMucHJlZml4IDogJydcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGtleSA9ICEhb3B0aW9ucyAmJiAhIW9wdGlvbnMua2V5ID8gb3B0aW9ucy5rZXkgOiBwcm9wZXJ0eURlc2NyaXB0aW9uO1xyXG5cclxuICAgIGNvbnN0IGV2ZW50U2VydmljZTogU3RvcmFnZUV2ZW50U2VydmljZSA9IG5ldyBTdG9yYWdlRXZlbnRTZXJ2aWNlKCk7XHJcbiAgICBldmVudFNlcnZpY2Uuc3RyZWFtLnBpcGUoXHJcbiAgICAgIC8vIFRPRE86IGZpbHRlciBzaG91bGQgYmUgbW9yZSBhY2N1cmF0ZVxyXG4gICAgICBmaWx0ZXIoKGV2OiBTdG9yYWdlRXZlbnQpID0+IGV2LmtleS5pbmRleE9mKGtleSkgPj0gMClcclxuICAgIClcclxuICAgICAgLnN1YnNjcmliZSgoZXY6IFN0b3JhZ2VFdmVudCkgPT4ge1xyXG4gICAgICAgIGlmICghIWV2Lm5ld1ZhbHVlICYmIHR5cGVvZiBldi5uZXdWYWx1ZSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgIGlmIChldi5uZXdWYWx1ZSAhPT0gJ251bGwnKSB7XHJcbiAgICAgICAgICAgIHRhcmdldFtwcm9wZXJ0eURlc2NyaXB0aW9uXSA9IGV2Lm5ld1ZhbHVlO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGFyZ2V0W3Byb3BlcnR5RGVzY3JpcHRpb25dID0gISFvcHRpb25zLm51bGxUcmFuc2Zvcm1lciA/IG9wdGlvbnMubnVsbFRyYW5zZm9ybWVyKCkgOiBudWxsO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgcHJvcGVydHlEZXNjcmlwdGlvbiwge1xyXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zdCBzdG9yYWdlVmFsdWUgPSBzZXJ2aWNlLmdldChrZXkpO1xyXG4gICAgICAgIHJldHVybiBzdG9yYWdlVmFsdWUgPT0gbnVsbCAmJiAhIW9wdGlvbnMubnVsbFRyYW5zZm9ybWVyID8gb3B0aW9ucy5udWxsVHJhbnNmb3JtZXIoKSA6IHN0b3JhZ2VWYWx1ZTtcclxuICAgICAgfSxcclxuICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWU6IGFueSkge1xyXG4gICAgICAgIHNlcnZpY2Uuc2V0KGtleSwgdmFsdWUpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9O1xyXG59XHJcbiIsImltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge01vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlLCBPcHRpb25hbCwgU2tpcFNlbGZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHtNb2R1bGVDb25maWd9IGZyb20gJy4vaW50ZXJmYWNlcyc7XHJcbmltcG9ydCB7TG9jYWxTdG9yYWdlU2VydmljZX0gZnJvbSAnLi9uZ3gtbG9jYWxzdG9yYWdlLnNlcnZpY2UnO1xyXG5pbXBvcnQge1N0b3JhZ2VFdmVudFNlcnZpY2V9IGZyb20gJy4vc3RvcmFnZS1ldmVudC5zZXJ2aWNlJztcclxuaW1wb3J0IHtMb2NhbFN0b3JhZ2VEaXJlY3RpdmV9IGZyb20gJy4vZGlyZWN0aXZlcy9uZ3gtbG9jYWxzdG9yYWdlLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7TW9kdWxlQ29uZmlnVG9rZW59IGZyb20gJy4vdG9rZW4nO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHByb3ZpZGVTdG9yYWdlU2VydmljZShtb2R1bGVDb25maWc6IE1vZHVsZUNvbmZpZyk6IExvY2FsU3RvcmFnZVNlcnZpY2Uge1xyXG4gIHJldHVybiBuZXcgTG9jYWxTdG9yYWdlU2VydmljZShtb2R1bGVDb25maWcpO1xyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgTG9jYWxTdG9yYWdlRGlyZWN0aXZlXHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBMb2NhbFN0b3JhZ2VEaXJlY3RpdmVcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3hMb2NhbFN0b3JhZ2VNb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KGNvbmZpZz86IE1vZHVsZUNvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IE5neExvY2FsU3RvcmFnZU1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcHJvdmlkZTogTW9kdWxlQ29uZmlnVG9rZW4sXHJcbiAgICAgICAgICB1c2VWYWx1ZTogY29uZmlnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBwcm92aWRlOiBMb2NhbFN0b3JhZ2VTZXJ2aWNlLFxyXG4gICAgICAgICAgdXNlRmFjdG9yeTogcHJvdmlkZVN0b3JhZ2VTZXJ2aWNlLFxyXG4gICAgICAgICAgZGVwczogW1xyXG4gICAgICAgICAgICBNb2R1bGVDb25maWdUb2tlblxyXG4gICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgU3RvcmFnZUV2ZW50U2VydmljZVxyXG4gICAgICBdXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcGFyZW50TW9kdWxlOiBOZ3hMb2NhbFN0b3JhZ2VNb2R1bGUpIHtcclxuICAgIGlmIChwYXJlbnRNb2R1bGUpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdOZ3hMb2NhbFN0b3JhZ2VNb2R1bGUgaXMgYWxyZWFkeSBsb2FkZWQuIEltcG9ydCBpdCBpbiB0aGUgQXBwTW9kdWxlIG9ubHknKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIm9ic2VydmFibGVGcm9tRXZlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBS0EsSUFBQTtJQUtFLDJCQUFZLE1BQXFCO1FBQy9CLElBQUksTUFBTSxFQUFFO1lBQ1YsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDN0MsSUFBSSxDQUFDLFVBQVUsR0FB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