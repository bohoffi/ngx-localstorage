import { InjectionToken, Injectable, Inject, Directive, ElementRef, EventEmitter, Input, Output, NgModule, Optional, SkipSelf } from '@angular/core';
import { fromEvent, BehaviorSubject } from 'rxjs';
import { share, filter, debounceTime } from 'rxjs/operators';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class PromisableService {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const getProperty = (path, object) => path.reduce((obj, p) => (!!obj) ? obj[p] : null, object);
/** @type {?} */
const setProperty = (path, value, object, falsyTransformer) => {
    /** @type {?} */
    const lastKeyIndex = path.length - 1;
    for (let i = 0; i < lastKeyIndex; ++i) {
        /** @type {?} */
        const key = path[i];
        if (!(key in object)) {
            object[key] = {};
        }
        object = object[key];
    }
    object[path[lastKeyIndex]] = (!value || (typeof value === 'string' && value === 'false'))
        && !!falsyTransformer ? falsyTransformer() : value;
};
/** @type {?} */
const defaultConfig = {
    allowNull: true,
    prefix: 'ngx_local_storage'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const ModuleConfigToken = new InjectionToken('moduleConfig');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class LocalStorageService {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class StorageEventService {
    constructor() {
        this._eventStream = new BehaviorSubject(null);
        fromEvent(window, 'storage')
            .subscribe((ev) => this._eventStream.next(ev));
    }
    /**
     * @return {?}
     */
    get stream() {
        return this._eventStream
            .asObservable().pipe(filter(ev => !!ev), share());
    }
}
StorageEventService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StorageEventService.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class LocalStorageDirective {
    /**
     * @param {?} er
     * @param {?} lss
     * @param {?} es
     */
    constructor(er, lss, es) {
        this.er = er;
        this.lss = lss;
        this.es = es;
        this.lsDebounce = 0;
        this.lsInitFromStorage = false;
        this.lsStoredValue = new EventEmitter();
        this._valuePath = [];
        this.es.stream.pipe(
        // TODO: filter should be more accurate
        filter((ev) => ev.key.indexOf(this.lsKey) >= 0))
            .subscribe((ev) => {
            setProperty(this._valuePath.length ? this._valuePath : ['value'], ev.newValue, this.er.nativeElement, this.lsFalsyTransformer);
        });
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this._initKey();
        this._initFromStorage();
        this._hookEvent();
    }
    /**
     * @param {?} path
     * @return {?}
     */
    set lsValuePath(path) {
        if (path != null) {
            this._valuePath = Array.isArray(path) ? path : path.split(',');
        }
        else {
            this._valuePath = [];
        }
    }
    /**
     * @return {?}
     */
    _initKey() {
        if (!this.lsKey) {
            if (!this.er.nativeElement.id && !this.er.nativeElement.name) {
                throw new Error('No key or element id or name supplied!');
            }
            this.lsKey = this.er.nativeElement.id || this.er.nativeElement.name;
        }
    }
    /**
     * @return {?}
     */
    _hookEvent() {
        if (this.lsEvent) {
            this._eventSubscription = fromEvent(this.er.nativeElement, this.lsEvent).pipe(debounceTime(this.lsDebounce))
                .subscribe(() => {
                this.lss.asPromisable().set(this.lsKey, getProperty(this._valuePath.length ? this._valuePath : ['value'], this.er.nativeElement), this.lsPrefix)
                    .then(() => {
                    this.lss.asPromisable().get(this.lsKey, this.lsPrefix)
                        .then((value) => {
                        this.lsStoredValue.emit(value);
                    })
                        .catch((err) => console.error(err));
                })
                    .catch((err) => console.error(err));
            });
        }
    }
    /**
     * @return {?}
     */
    _initFromStorage() {
        if (this.lsInitFromStorage) {
            this.lss.asPromisable().get(this.lsKey, this.lsPrefix)
                .then((storedValue) => {
                setProperty(this._valuePath.length ? this._valuePath : ['value'], storedValue, this.er.nativeElement, this.lsFalsyTransformer);
            })
                .catch((err) => console.error(err));
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this._eventSubscription && !this._eventSubscription.closed) {
            this._eventSubscription.unsubscribe();
        }
    }
}
LocalStorageDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ngxLocalStorage]'
            },] }
];
/** @nocollapse */
LocalStorageDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: LocalStorageService },
    { type: StorageEventService }
];
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
        const service = new LocalStorageService({
            prefix: !!options && !!options.prefix ? options.prefix : ''
        });
        /** @type {?} */
        const key = !!options && !!options.key ? options.key : propertyDescription;
        /** @type {?} */
        const eventService = new StorageEventService();
        eventService.stream.pipe(
        // TODO: filter should be more accurate
        filter((ev) => ev.key.indexOf(key) >= 0))
            .subscribe((ev) => {
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
                const storageValue = service.get(key);
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
class NgxLocalStorageModule {
    /**
     * @param {?} parentModule
     */
    constructor(parentModule) {
        if (parentModule) {
            throw new Error('NgxLocalStorageModule is already loaded. Import it in the AppModule only');
        }
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    static forRoot(config) {
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
    }
}
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
NgxLocalStorageModule.ctorParameters = () => [
    { type: NgxLocalStorageModule, decorators: [{ type: Optional }, { type: SkipSelf }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { LocalStorageService, StorageEventService, LocalStorageDirective, ngxLocalStorage, provideStorageService, NgxLocalStorageModule, ModuleConfigToken as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWxvY2Fsc3RvcmFnZS5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmd4LWxvY2Fsc3RvcmFnZS9saWIvcHJvbWlzYWJsZS5zZXJ2aWNlLnRzIiwibmc6Ly9uZ3gtbG9jYWxzdG9yYWdlL2xpYi91dGlscy50cyIsIm5nOi8vbmd4LWxvY2Fsc3RvcmFnZS9saWIvdG9rZW4udHMiLCJuZzovL25neC1sb2NhbHN0b3JhZ2UvbGliL25neC1sb2NhbHN0b3JhZ2Uuc2VydmljZS50cyIsIm5nOi8vbmd4LWxvY2Fsc3RvcmFnZS9saWIvc3RvcmFnZS1ldmVudC5zZXJ2aWNlLnRzIiwibmc6Ly9uZ3gtbG9jYWxzdG9yYWdlL2xpYi9kaXJlY3RpdmVzL25neC1sb2NhbHN0b3JhZ2UuZGlyZWN0aXZlLnRzIiwibmc6Ly9uZ3gtbG9jYWxzdG9yYWdlL2xpYi9kZWNvcmF0b3JzLnRzIiwibmc6Ly9uZ3gtbG9jYWxzdG9yYWdlL2xpYi9uZ3gtbG9jYWxzdG9yYWdlLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ3JlYXRlZCBieSBib2hvZmZpIG9uIDIyLjA1LjIwMTcuXHJcbiovXHJcbmltcG9ydCB7TW9kdWxlQ29uZmlnfSBmcm9tICcuL2ludGVyZmFjZXMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFByb21pc2FibGVTZXJ2aWNlIHtcclxuXHJcbiAgcHJpdmF0ZSByZWFkb25seSBfcHJlZml4OiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBfYWxsb3dOdWxsOiBib29sZWFuO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihjb25maWc/OiBNb2R1bGVDb25maWcpIHtcclxuICAgIGlmIChjb25maWcpIHtcclxuICAgICAgdGhpcy5fcHJlZml4ID0gY29uZmlnLnByZWZpeCB8fCB0aGlzLl9wcmVmaXg7XHJcbiAgICAgIHRoaXMuX2FsbG93TnVsbCA9IGNvbmZpZy5hbGxvd051bGwgfHwgdGhpcy5fYWxsb3dOdWxsO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0cyB0aGUgbnVtYmVyIG9mIGVudHJpZXMgaW4gdGhlIGFwcGxpY2F0aW9ucyBsb2NhbCBzdG9yYWdlLlxyXG4gICAqL1xyXG4gIGNvdW50KCk6IFByb21pc2U8bnVtYmVyPiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIHJlc29sdmUobG9jYWxTdG9yYWdlLmxlbmd0aCk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgcmVqZWN0KGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIHRoZSBudGggKGRlZmluZWQgYnkgdGhlIGluZGV4IHBhcmFtZXRlcikga2V5IGluIHRoZSBzdG9yYWdlLlxyXG4gICAqIFRoZSBvcmRlciBvZiBrZXlzIGlzIHVzZXItYWdlbnQgZGVmaW5lZCwgc28geW91IHNob3VsZCBub3QgcmVseSBvbiBpdC5cclxuICAgKiBAcGFyYW0gaW5kZXggICBBbiBpbnRlZ2VyIHJlcHJlc2VudGluZyB0aGUgbnVtYmVyIG9mIHRoZSBrZXkgeW91IHdhbnQgdG8gZ2V0IHRoZSBuYW1lIG9mLiBUaGlzIGlzIGEgemVyby1iYXNlZCBpbmRleC5cclxuICAgKi9cclxuICBnZXRLZXkoaW5kZXg6IG51bWJlcik6IFByb21pc2U8c3RyaW5nIHwgbnVsbD4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPHN0cmluZyB8IG51bGw+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgaWYgKGluZGV4IDwgMCkge1xyXG4gICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ2luZGV4IGhhcyB0byBiZSAwIG9yIGdyZWF0ZXInKSk7XHJcbiAgICAgIH1cclxuICAgICAgdHJ5IHtcclxuICAgICAgICByZXNvbHZlKGxvY2FsU3RvcmFnZS5rZXkoaW5kZXgpKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICByZWplY3QoZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFkZHMgdGhhIHZhbHVlIHdpdGggdGhlIGdpdmVuIGtleSBvciB1cGRhdGVzIGFuIGV4aXN0aW5nIGVudHJ5LlxyXG4gICAqIEBwYXJhbSBrZXkgICAgIEtleSB0byBzdG9yZS5cclxuICAgKiBAcGFyYW0gdmFsdWUgICBWYWx1ZSB0byBzdG9yZS5cclxuICAgKiBAcGFyYW0gcHJlZml4ICBPcHRpb25hbCBwcmVmaXggdG8gb3ZlcndyaXRlIHRoZSBjb25maWd1cmVkIG9uZS5cclxuICAgKi9cclxuICBzZXQoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcsIHByZWZpeD86IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBpZiAodGhpcy5fYWxsb3dOdWxsXHJcbiAgICAgICAgICB8fCAoIXRoaXMuX2FsbG93TnVsbCAmJiB2YWx1ZSAhPT0gJ251bGwnICYmIHZhbHVlICE9PSBudWxsICYmIHZhbHVlICE9PSB1bmRlZmluZWQpKSB7XHJcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgJHtwcmVmaXggfHwgdGhpcy5fcHJlZml4fV8ke2tleX1gLCB2YWx1ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJldHVybiB0aGlzLnJlbW92ZShrZXksIHByZWZpeCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlc29sdmUodHJ1ZSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgcmVqZWN0KGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXRzIHRoZSBlbnRyeSBzcGVjaWZpZWQgYnkgdGhlIGdpdmVuIGtleSBvciBudWxsLlxyXG4gICAqIEBwYXJhbSBrZXkgICAgIEtleSBpZGVudGlmeWluZyB0aGUgd2FudGVkIGVudHJ5LlxyXG4gICAqIEBwYXJhbSBwcmVmaXggIE9wdGlvbmFsIHByZWZpeCB0byBvdmVyd3JpdGUgdGhlIGNvbmZpZ3VyZWQgb25lLlxyXG4gICAqL1xyXG4gIGdldChrZXk6IHN0cmluZywgcHJlZml4Pzogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmcgfCBudWxsPiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2U8c3RyaW5nIHwgbnVsbD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIHJlc29sdmUobG9jYWxTdG9yYWdlLmdldEl0ZW0oYCR7cHJlZml4IHx8IHRoaXMuX3ByZWZpeH1fJHtrZXl9YCkpO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHJlamVjdChlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVtb3ZlcyB0aGUgZW50cnkgc3BlY2lmaWVkIGJ5IHRoZSBnaXZlbiBrZXkuXHJcbiAgICogQHBhcmFtIGtleSAgICAgS2V5IGlkZW50aWZ5aW5nIHRoZSBlbnRyeSB0byByZW1vdmUuXHJcbiAgICogQHBhcmFtIHByZWZpeCAgT3B0aW9uYWwgcHJlZml4IHRvIG92ZXJ3cml0ZSB0aGUgY29uZmlndXJlZCBvbmUuXHJcbiAgICovXHJcbiAgcmVtb3ZlKGtleTogc3RyaW5nLCBwcmVmaXg/OiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oYCR7cHJlZml4IHx8IHRoaXMuX3ByZWZpeH1fJHtrZXl9YCk7XHJcbiAgICAgICAgcmVzb2x2ZSh0cnVlKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICByZWplY3QoZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENsZWFycyBhbGwgZW50cmllcyBvZiB0aGUgYXBwbGljYXRpb25zIGxvY2FsIHN0b3JhZ2UuXHJcbiAgICovXHJcbiAgY2xlYXIoKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xyXG4gICAgICAgIHJlc29sdmUodHJ1ZSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgcmVqZWN0KGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGJvaG9mZmkgb24gMDQuMDQuMjAxNy5cclxuICovXHJcbmltcG9ydCB7TW9kdWxlQ29uZmlnfSBmcm9tICcuL2ludGVyZmFjZXMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFByb3BlcnR5ID0gKHBhdGg6IHN0cmluZ1tdLCBvYmplY3Q6IGFueSkgPT5cclxuICBwYXRoLnJlZHVjZSgob2JqOiBhbnksIHA6IGFueSkgPT4gKCEhb2JqKSA/IG9ialtwXSA6IG51bGwsIG9iamVjdCk7XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0UHJvcGVydHkgPSAocGF0aDogc3RyaW5nW10gfCBzdHJpbmcsIHZhbHVlOiBhbnksIG9iamVjdDogYW55LCBmYWxzeVRyYW5zZm9ybWVyPzogKCkgPT4gYW55KSA9PiB7XHJcbiAgY29uc3QgbGFzdEtleUluZGV4ID0gcGF0aC5sZW5ndGggLSAxO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGFzdEtleUluZGV4OyArK2kpIHtcclxuICAgIGNvbnN0IGtleSA9IHBhdGhbaV07XHJcbiAgICBpZiAoIShrZXkgaW4gb2JqZWN0KSkge1xyXG4gICAgICBvYmplY3Rba2V5XSA9IHt9O1xyXG4gICAgfVxyXG4gICAgb2JqZWN0ID0gb2JqZWN0W2tleV07XHJcbiAgfVxyXG4gIG9iamVjdFtwYXRoW2xhc3RLZXlJbmRleF1dID0gKCF2YWx1ZSB8fCAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiB2YWx1ZSA9PT0gJ2ZhbHNlJykpXHJcbiAgJiYgISFmYWxzeVRyYW5zZm9ybWVyID8gZmFsc3lUcmFuc2Zvcm1lcigpIDogdmFsdWU7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZGVmYXVsdENvbmZpZzogTW9kdWxlQ29uZmlnID0ge1xyXG4gIGFsbG93TnVsbDogdHJ1ZSxcclxuICBwcmVmaXg6ICduZ3hfbG9jYWxfc3RvcmFnZSdcclxufTtcclxuIiwiaW1wb3J0IHtNb2R1bGVDb25maWd9IGZyb20gJy4vaW50ZXJmYWNlcyc7XHJcbmltcG9ydCB7SW5qZWN0aW9uVG9rZW59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1vZHVsZUNvbmZpZ1Rva2VuID0gbmV3IEluamVjdGlvblRva2VuPE1vZHVsZUNvbmZpZz4oJ21vZHVsZUNvbmZpZycpO1xyXG4iLCJpbXBvcnQge0luamVjdGFibGUsIE9wdGlvbmFsLCBJbmplY3R9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHtNb2R1bGVDb25maWd9IGZyb20gJy4vaW50ZXJmYWNlcyc7XHJcbmltcG9ydCB7UHJvbWlzYWJsZVNlcnZpY2V9IGZyb20gJy4vcHJvbWlzYWJsZS5zZXJ2aWNlJztcclxuaW1wb3J0IHtkZWZhdWx0Q29uZmlnfSBmcm9tICcuL3V0aWxzJztcclxuaW1wb3J0IHsgTW9kdWxlQ29uZmlnVG9rZW4gfSBmcm9tICcuL3Rva2VuJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIExvY2FsU3RvcmFnZVNlcnZpY2Uge1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgX3ByZWZpeDogc3RyaW5nO1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgX2FsbG93TnVsbDogYm9vbGVhbjtcclxuICBwcml2YXRlIHJlYWRvbmx5IF9wcm9taXNhYmxlOiBQcm9taXNhYmxlU2VydmljZTtcclxuXHJcbiAgY29uc3RydWN0b3IoQEluamVjdChNb2R1bGVDb25maWdUb2tlbikgY29uZmlnPzogTW9kdWxlQ29uZmlnKSB7XHJcbiAgICBpZiAoY29uZmlnKSB7XHJcbiAgICAgIHRoaXMuX3ByZWZpeCA9IGNvbmZpZy5wcmVmaXggfHwgZGVmYXVsdENvbmZpZy5wcmVmaXg7XHJcbiAgICAgIHRoaXMuX2FsbG93TnVsbCA9IGNvbmZpZy5hbGxvd051bGwgfHwgZGVmYXVsdENvbmZpZy5hbGxvd051bGw7XHJcbiAgICB9XHJcbiAgICB0aGlzLl9wcm9taXNhYmxlID0gbmV3IFByb21pc2FibGVTZXJ2aWNlKHtcclxuICAgICAgYWxsb3dOdWxsOiB0aGlzLl9hbGxvd051bGwsXHJcbiAgICAgIHByZWZpeDogdGhpcy5fcHJlZml4XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGFzUHJvbWlzYWJsZSgpOiBQcm9taXNhYmxlU2VydmljZSB7XHJcbiAgICByZXR1cm4gdGhpcy5fcHJvbWlzYWJsZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldHMgdGhlIG51bWJlciBvZiBlbnRyaWVzIGluIHRoZSBhcHBsaWNhdGlvbnMgbG9jYWwgc3RvcmFnZS5cclxuICAgKi9cclxuICBjb3VudCgpOiBudW1iZXIgfCB1bmRlZmluZWQge1xyXG4gICAgdHJ5IHtcclxuICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5sZW5ndGg7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgdGhlIG50aCAoZGVmaW5lZCBieSB0aGUgaW5kZXggcGFyYW1ldGVyKSBrZXkgaW4gdGhlIHN0b3JhZ2UuXHJcbiAgICogVGhlIG9yZGVyIG9mIGtleXMgaXMgdXNlci1hZ2VudCBkZWZpbmVkLCBzbyB5b3Ugc2hvdWxkIG5vdCByZWx5IG9uIGl0LlxyXG4gICAqIEBwYXJhbSBpbmRleCAgIEFuIGludGVnZXIgcmVwcmVzZW50aW5nIHRoZSBudW1iZXIgb2YgdGhlIGtleSB5b3Ugd2FudCB0byBnZXQgdGhlIG5hbWUgb2YuIFRoaXMgaXMgYSB6ZXJvLWJhc2VkIGluZGV4LlxyXG4gICAqL1xyXG4gIGdldEtleShpbmRleDogbnVtYmVyKTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCB7XHJcbiAgICBpZiAoaW5kZXggPCAwKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IobmV3IEVycm9yKCdpbmRleCBoYXMgdG8gYmUgMCBvciBncmVhdGVyJykpO1xyXG4gICAgfVxyXG4gICAgdHJ5IHtcclxuICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5rZXkoaW5kZXgpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBZGRzIHRoYSB2YWx1ZSB3aXRoIHRoZSBnaXZlbiBrZXkgb3IgdXBkYXRlcyBhbiBleGlzdGluZyBlbnRyeS5cclxuICAgKiBAcGFyYW0ga2V5ICAgICBLZXkgdG8gc3RvcmUuXHJcbiAgICogQHBhcmFtIHZhbHVlICAgVmFsdWUgdG8gc3RvcmUuXHJcbiAgICogQHBhcmFtIHByZWZpeCAgT3B0aW9uYWwgcHJlZml4IHRvIG92ZXJ3cml0ZSB0aGUgY29uZmlndXJlZCBvbmUuXHJcbiAgICovXHJcbiAgc2V0KGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nLCBwcmVmaXg/OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGlmIChcclxuICAgICAgdGhpcy5fYWxsb3dOdWxsIHx8XHJcbiAgICAgICghdGhpcy5fYWxsb3dOdWxsICYmXHJcbiAgICAgICAgdmFsdWUgIT09ICdudWxsJyAmJlxyXG4gICAgICAgIHZhbHVlICE9PSBudWxsICYmXHJcbiAgICAgICAgdmFsdWUgIT09IHVuZGVmaW5lZClcclxuICAgICkge1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgJHtwcmVmaXggfHwgdGhpcy5fcHJlZml4fV8ke2tleX1gLCB2YWx1ZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnJlbW92ZShrZXksIHByZWZpeCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXRzIHRoZSBlbnRyeSBzcGVjaWZpZWQgYnkgdGhlIGdpdmVuIGtleSBvciBudWxsLlxyXG4gICAqIEBwYXJhbSBrZXkgICAgIEtleSBpZGVudGlmeWluZyB0aGUgd2FudGVkIGVudHJ5LlxyXG4gICAqIEBwYXJhbSBwcmVmaXggIE9wdGlvbmFsIHByZWZpeCB0byBvdmVyd3JpdGUgdGhlIGNvbmZpZ3VyZWQgb25lLlxyXG4gICAqL1xyXG4gIGdldChrZXk6IHN0cmluZywgcHJlZml4Pzogc3RyaW5nKTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCB7XHJcbiAgICB0cnkge1xyXG4gICAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oYCR7cHJlZml4IHx8IHRoaXMuX3ByZWZpeH1fJHtrZXl9YCk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlbW92ZXMgdGhlIGVudHJ5IHNwZWNpZmllZCBieSB0aGUgZ2l2ZW4ga2V5LlxyXG4gICAqIEBwYXJhbSBrZXkgICAgIEtleSBpZGVudGlmeWluZyB0aGUgZW50cnkgdG8gcmVtb3ZlLlxyXG4gICAqIEBwYXJhbSBwcmVmaXggIE9wdGlvbmFsIHByZWZpeCB0byBvdmVyd3JpdGUgdGhlIGNvbmZpZ3VyZWQgb25lLlxyXG4gICAqL1xyXG4gIHJlbW92ZShrZXk6IHN0cmluZywgcHJlZml4Pzogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB0cnkge1xyXG4gICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShgJHtwcmVmaXggfHwgdGhpcy5fcHJlZml4fV8ke2tleX1gKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2xlYXJzIGFsbCBlbnRyaWVzIG9mIHRoZSBhcHBsaWNhdGlvbnMgbG9jYWwgc3RvcmFnZS5cclxuICAgKi9cclxuICBjbGVhcigpOiB2b2lkIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGJvaG9mZmkgb24gMzEuMDEuMjAxOC5cclxuICovXHJcbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7ZnJvbUV2ZW50IGFzIG9ic2VydmFibGVGcm9tRXZlbnQsIEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7c2hhcmUsIGZpbHRlcn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgU3RvcmFnZUV2ZW50U2VydmljZSB7XHJcblxyXG4gIHByaXZhdGUgX2V2ZW50U3RyZWFtOiBCZWhhdmlvclN1YmplY3Q8U3RvcmFnZUV2ZW50PiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8U3RvcmFnZUV2ZW50PihudWxsKTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBvYnNlcnZhYmxlRnJvbUV2ZW50KHdpbmRvdywgJ3N0b3JhZ2UnKVxyXG4gICAgICAuc3Vic2NyaWJlKChldjogU3RvcmFnZUV2ZW50KSA9PiB0aGlzLl9ldmVudFN0cmVhbS5uZXh0KGV2KSk7XHJcbiAgfVxyXG5cclxuICBnZXQgc3RyZWFtKCk6IE9ic2VydmFibGU8U3RvcmFnZUV2ZW50PiB7XHJcbiAgICByZXR1cm4gdGhpcy5fZXZlbnRTdHJlYW1cclxuICAgICAgLmFzT2JzZXJ2YWJsZSgpLnBpcGUoXHJcbiAgICAgICAgZmlsdGVyKGV2ID0+ICEhZXYpLFxyXG4gICAgICAgIHNoYXJlKClcclxuICAgICAgKTtcclxuICB9XHJcbn1cclxuIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgYm9ob2ZmaSBvbiAwMy4wNC4yMDE3LlxyXG4gKi9cclxuaW1wb3J0IHtBZnRlclZpZXdJbml0LCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uRGVzdHJveSwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtmcm9tRXZlbnQgYXMgb2JzZXJ2YWJsZUZyb21FdmVudCwgU3Vic2NyaXB0aW9ufSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHtkZWJvdW5jZVRpbWUsIGZpbHRlcn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHtnZXRQcm9wZXJ0eSwgc2V0UHJvcGVydHl9IGZyb20gJy4uL3V0aWxzJztcclxuaW1wb3J0IHtMb2NhbFN0b3JhZ2VTZXJ2aWNlfSBmcm9tICcuLi9uZ3gtbG9jYWxzdG9yYWdlLnNlcnZpY2UnO1xyXG5pbXBvcnQge1N0b3JhZ2VFdmVudFNlcnZpY2V9IGZyb20gJy4uL3N0b3JhZ2UtZXZlbnQuc2VydmljZSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tuZ3hMb2NhbFN0b3JhZ2VdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTG9jYWxTdG9yYWdlRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcclxuXHJcbiAgQElucHV0KCduZ3hMb2NhbFN0b3JhZ2UnKVxyXG4gIGxzS2V5OiBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICBsc1ByZWZpeDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpXHJcbiAgbHNFdmVudDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpXHJcbiAgbHNEZWJvdW5jZSA9IDA7XHJcbiAgQElucHV0KClcclxuICBsc0luaXRGcm9tU3RvcmFnZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpXHJcbiAgbHNGYWxzeVRyYW5zZm9ybWVyPzogKCkgPT4gYW55O1xyXG5cclxuICBAT3V0cHV0KClcclxuICBsc1N0b3JlZFZhbHVlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIHByaXZhdGUgX2V2ZW50U3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcbiAgcHJpdmF0ZSBfdmFsdWVQYXRoOiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVyOiBFbGVtZW50UmVmLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgbHNzOiBMb2NhbFN0b3JhZ2VTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgZXM6IFN0b3JhZ2VFdmVudFNlcnZpY2UpIHtcclxuXHJcbiAgICB0aGlzLmVzLnN0cmVhbS5waXBlKFxyXG4gICAgLy8gVE9ETzogZmlsdGVyIHNob3VsZCBiZSBtb3JlIGFjY3VyYXRlXHJcbiAgICAgIGZpbHRlcigoZXY6IFN0b3JhZ2VFdmVudCkgPT4gZXYua2V5LmluZGV4T2YodGhpcy5sc0tleSkgPj0gMClcclxuICAgIClcclxuICAgICAgLnN1YnNjcmliZSgoZXY6IFN0b3JhZ2VFdmVudCkgPT4ge1xyXG4gICAgICAgIHNldFByb3BlcnR5KHRoaXMuX3ZhbHVlUGF0aC5sZW5ndGggPyB0aGlzLl92YWx1ZVBhdGggOiBbJ3ZhbHVlJ10sIGV2Lm5ld1ZhbHVlLCB0aGlzLmVyLm5hdGl2ZUVsZW1lbnQsIHRoaXMubHNGYWxzeVRyYW5zZm9ybWVyKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLl9pbml0S2V5KCk7XHJcbiAgICB0aGlzLl9pbml0RnJvbVN0b3JhZ2UoKTtcclxuICAgIHRoaXMuX2hvb2tFdmVudCgpO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbHNWYWx1ZVBhdGgocGF0aDogYW55W10gfCBzdHJpbmcpIHtcclxuICAgIGlmIChwYXRoICE9IG51bGwpIHtcclxuICAgICAgdGhpcy5fdmFsdWVQYXRoID0gQXJyYXkuaXNBcnJheShwYXRoKSA/IHBhdGggOiBwYXRoLnNwbGl0KCcsJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl92YWx1ZVBhdGggPSBbXTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2luaXRLZXkoKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMubHNLZXkpIHtcclxuICAgICAgaWYgKCF0aGlzLmVyLm5hdGl2ZUVsZW1lbnQuaWQgJiYgIXRoaXMuZXIubmF0aXZlRWxlbWVudC5uYW1lKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBrZXkgb3IgZWxlbWVudCBpZCBvciBuYW1lIHN1cHBsaWVkIScpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMubHNLZXkgPSB0aGlzLmVyLm5hdGl2ZUVsZW1lbnQuaWQgfHwgdGhpcy5lci5uYXRpdmVFbGVtZW50Lm5hbWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9ob29rRXZlbnQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5sc0V2ZW50KSB7XHJcbiAgICAgIHRoaXMuX2V2ZW50U3Vic2NyaXB0aW9uID0gb2JzZXJ2YWJsZUZyb21FdmVudCh0aGlzLmVyLm5hdGl2ZUVsZW1lbnQsIHRoaXMubHNFdmVudCkucGlwZShcclxuICAgICAgICBkZWJvdW5jZVRpbWUodGhpcy5sc0RlYm91bmNlKSlcclxuICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMubHNzLmFzUHJvbWlzYWJsZSgpLnNldCh0aGlzLmxzS2V5LFxyXG4gICAgICAgICAgICBnZXRQcm9wZXJ0eSh0aGlzLl92YWx1ZVBhdGgubGVuZ3RoID8gdGhpcy5fdmFsdWVQYXRoIDogWyd2YWx1ZSddLCB0aGlzLmVyLm5hdGl2ZUVsZW1lbnQpLFxyXG4gICAgICAgICAgICB0aGlzLmxzUHJlZml4KVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgdGhpcy5sc3MuYXNQcm9taXNhYmxlKCkuZ2V0KHRoaXMubHNLZXksIHRoaXMubHNQcmVmaXgpXHJcbiAgICAgICAgICAgICAgICAudGhlbigodmFsdWU6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLmxzU3RvcmVkVmFsdWUuZW1pdCh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnI6IEVycm9yKSA9PiBjb25zb2xlLmVycm9yKGVycikpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycjogRXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9pbml0RnJvbVN0b3JhZ2UoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5sc0luaXRGcm9tU3RvcmFnZSkge1xyXG4gICAgICB0aGlzLmxzcy5hc1Byb21pc2FibGUoKS5nZXQodGhpcy5sc0tleSwgdGhpcy5sc1ByZWZpeClcclxuICAgICAgICAudGhlbigoc3RvcmVkVmFsdWU6IGFueSkgPT4ge1xyXG4gICAgICAgICAgc2V0UHJvcGVydHkodGhpcy5fdmFsdWVQYXRoLmxlbmd0aCA/IHRoaXMuX3ZhbHVlUGF0aCA6IFsndmFsdWUnXSwgc3RvcmVkVmFsdWUsIHRoaXMuZXIubmF0aXZlRWxlbWVudCwgdGhpcy5sc0ZhbHN5VHJhbnNmb3JtZXIpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnI6IEVycm9yKSA9PiBjb25zb2xlLmVycm9yKGVycikpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5fZXZlbnRTdWJzY3JpcHRpb24gJiYgIXRoaXMuX2V2ZW50U3Vic2NyaXB0aW9uLmNsb3NlZCkge1xyXG4gICAgICB0aGlzLl9ldmVudFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIvKipcclxuICogQ3JlYXRlZCBieSBib2hvZmZpIG9uIDIyLjA1LjIwMTcuXHJcbiAqL1xyXG5pbXBvcnQge2ZpbHRlcn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHtEZWNvcmF0b3JPcHRzfSBmcm9tICcuL2ludGVyZmFjZXMnO1xyXG5pbXBvcnQge0xvY2FsU3RvcmFnZVNlcnZpY2V9IGZyb20gJy4vbmd4LWxvY2Fsc3RvcmFnZS5zZXJ2aWNlJztcclxuaW1wb3J0IHtTdG9yYWdlRXZlbnRTZXJ2aWNlfSBmcm9tICcuL3N0b3JhZ2UtZXZlbnQuc2VydmljZSc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbmd4TG9jYWxTdG9yYWdlKG9wdGlvbnM/OiBEZWNvcmF0b3JPcHRzKSB7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQ6IE9iamVjdCwgcHJvcGVydHlEZXNjcmlwdGlvbjogc3RyaW5nKSB7XHJcblxyXG4gICAgY29uc3Qgc2VydmljZTogTG9jYWxTdG9yYWdlU2VydmljZSA9IG5ldyBMb2NhbFN0b3JhZ2VTZXJ2aWNlKHtcclxuICAgICAgcHJlZml4OiAhIW9wdGlvbnMgJiYgISFvcHRpb25zLnByZWZpeCA/IG9wdGlvbnMucHJlZml4IDogJydcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGtleSA9ICEhb3B0aW9ucyAmJiAhIW9wdGlvbnMua2V5ID8gb3B0aW9ucy5rZXkgOiBwcm9wZXJ0eURlc2NyaXB0aW9uO1xyXG5cclxuICAgIGNvbnN0IGV2ZW50U2VydmljZTogU3RvcmFnZUV2ZW50U2VydmljZSA9IG5ldyBTdG9yYWdlRXZlbnRTZXJ2aWNlKCk7XHJcbiAgICBldmVudFNlcnZpY2Uuc3RyZWFtLnBpcGUoXHJcbiAgICAgIC8vIFRPRE86IGZpbHRlciBzaG91bGQgYmUgbW9yZSBhY2N1cmF0ZVxyXG4gICAgICBmaWx0ZXIoKGV2OiBTdG9yYWdlRXZlbnQpID0+IGV2LmtleS5pbmRleE9mKGtleSkgPj0gMClcclxuICAgIClcclxuICAgICAgLnN1YnNjcmliZSgoZXY6IFN0b3JhZ2VFdmVudCkgPT4ge1xyXG4gICAgICAgIGlmICghIWV2Lm5ld1ZhbHVlICYmIHR5cGVvZiBldi5uZXdWYWx1ZSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgIGlmIChldi5uZXdWYWx1ZSAhPT0gJ251bGwnKSB7XHJcbiAgICAgICAgICAgIHRhcmdldFtwcm9wZXJ0eURlc2NyaXB0aW9uXSA9IGV2Lm5ld1ZhbHVlO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGFyZ2V0W3Byb3BlcnR5RGVzY3JpcHRpb25dID0gISFvcHRpb25zLm51bGxUcmFuc2Zvcm1lciA/IG9wdGlvbnMubnVsbFRyYW5zZm9ybWVyKCkgOiBudWxsO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgcHJvcGVydHlEZXNjcmlwdGlvbiwge1xyXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zdCBzdG9yYWdlVmFsdWUgPSBzZXJ2aWNlLmdldChrZXkpO1xyXG4gICAgICAgIHJldHVybiBzdG9yYWdlVmFsdWUgPT0gbnVsbCAmJiAhIW9wdGlvbnMubnVsbFRyYW5zZm9ybWVyID8gb3B0aW9ucy5udWxsVHJhbnNmb3JtZXIoKSA6IHN0b3JhZ2VWYWx1ZTtcclxuICAgICAgfSxcclxuICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWU6IGFueSkge1xyXG4gICAgICAgIHNlcnZpY2Uuc2V0KGtleSwgdmFsdWUpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9O1xyXG59XHJcbiIsImltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge01vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlLCBPcHRpb25hbCwgU2tpcFNlbGZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHtNb2R1bGVDb25maWd9IGZyb20gJy4vaW50ZXJmYWNlcyc7XHJcbmltcG9ydCB7TG9jYWxTdG9yYWdlU2VydmljZX0gZnJvbSAnLi9uZ3gtbG9jYWxzdG9yYWdlLnNlcnZpY2UnO1xyXG5pbXBvcnQge1N0b3JhZ2VFdmVudFNlcnZpY2V9IGZyb20gJy4vc3RvcmFnZS1ldmVudC5zZXJ2aWNlJztcclxuaW1wb3J0IHtMb2NhbFN0b3JhZ2VEaXJlY3RpdmV9IGZyb20gJy4vZGlyZWN0aXZlcy9uZ3gtbG9jYWxzdG9yYWdlLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7TW9kdWxlQ29uZmlnVG9rZW59IGZyb20gJy4vdG9rZW4nO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHByb3ZpZGVTdG9yYWdlU2VydmljZShtb2R1bGVDb25maWc6IE1vZHVsZUNvbmZpZyk6IExvY2FsU3RvcmFnZVNlcnZpY2Uge1xyXG4gIHJldHVybiBuZXcgTG9jYWxTdG9yYWdlU2VydmljZShtb2R1bGVDb25maWcpO1xyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgTG9jYWxTdG9yYWdlRGlyZWN0aXZlXHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBMb2NhbFN0b3JhZ2VEaXJlY3RpdmVcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3hMb2NhbFN0b3JhZ2VNb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KGNvbmZpZz86IE1vZHVsZUNvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IE5neExvY2FsU3RvcmFnZU1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcHJvdmlkZTogTW9kdWxlQ29uZmlnVG9rZW4sXHJcbiAgICAgICAgICB1c2VWYWx1ZTogY29uZmlnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBwcm92aWRlOiBMb2NhbFN0b3JhZ2VTZXJ2aWNlLFxyXG4gICAgICAgICAgdXNlRmFjdG9yeTogcHJvdmlkZVN0b3JhZ2VTZXJ2aWNlLFxyXG4gICAgICAgICAgZGVwczogW1xyXG4gICAgICAgICAgICBNb2R1bGVDb25maWdUb2tlblxyXG4gICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgU3RvcmFnZUV2ZW50U2VydmljZVxyXG4gICAgICBdXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcGFyZW50TW9kdWxlOiBOZ3hMb2NhbFN0b3JhZ2VNb2R1bGUpIHtcclxuICAgIGlmIChwYXJlbnRNb2R1bGUpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdOZ3hMb2NhbFN0b3JhZ2VNb2R1bGUgaXMgYWxyZWFkeSBsb2FkZWQuIEltcG9ydCBpdCBpbiB0aGUgQXBwTW9kdWxlIG9ubHknKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIm9ic2VydmFibGVGcm9tRXZlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBS0E7Ozs7SUFLRSxZQUFZLE1BQXFCO1FBQy9CLElBQUksTUFBTSxFQUFFO1lBQ1YsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDN0MsSUFBSSxDQUFDLFVBQVUsR0FBRyxN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