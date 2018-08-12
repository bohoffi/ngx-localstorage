import { InjectionToken, Injectable, Inject, Directive, ElementRef, EventEmitter, Input, Output, NgModule, Optional, SkipSelf } from '@angular/core';
import { fromEvent, BehaviorSubject } from 'rxjs';
import { share, filter, debounceTime } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

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
                imports: [
                    CommonModule
                ],
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWxvY2Fsc3RvcmFnZS5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmd4LWxvY2Fsc3RvcmFnZS9saWIvcHJvbWlzYWJsZS5zZXJ2aWNlLnRzIiwibmc6Ly9uZ3gtbG9jYWxzdG9yYWdlL2xpYi91dGlscy50cyIsIm5nOi8vbmd4LWxvY2Fsc3RvcmFnZS9saWIvdG9rZW4udHMiLCJuZzovL25neC1sb2NhbHN0b3JhZ2UvbGliL25neC1sb2NhbHN0b3JhZ2Uuc2VydmljZS50cyIsIm5nOi8vbmd4LWxvY2Fsc3RvcmFnZS9saWIvc3RvcmFnZS1ldmVudC5zZXJ2aWNlLnRzIiwibmc6Ly9uZ3gtbG9jYWxzdG9yYWdlL2xpYi9kaXJlY3RpdmVzL25neC1sb2NhbHN0b3JhZ2UuZGlyZWN0aXZlLnRzIiwibmc6Ly9uZ3gtbG9jYWxzdG9yYWdlL2xpYi9kZWNvcmF0b3JzLnRzIiwibmc6Ly9uZ3gtbG9jYWxzdG9yYWdlL2xpYi9uZ3gtbG9jYWxzdG9yYWdlLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ3JlYXRlZCBieSBib2hvZmZpIG9uIDIyLjA1LjIwMTcuXHJcbiovXHJcbmltcG9ydCB7TW9kdWxlQ29uZmlnfSBmcm9tICcuL2ludGVyZmFjZXMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFByb21pc2FibGVTZXJ2aWNlIHtcclxuXHJcbiAgcHJpdmF0ZSByZWFkb25seSBfcHJlZml4OiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBfYWxsb3dOdWxsOiBib29sZWFuO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihjb25maWc/OiBNb2R1bGVDb25maWcpIHtcclxuICAgIGlmIChjb25maWcpIHtcclxuICAgICAgdGhpcy5fcHJlZml4ID0gY29uZmlnLnByZWZpeCB8fCB0aGlzLl9wcmVmaXg7XHJcbiAgICAgIHRoaXMuX2FsbG93TnVsbCA9IGNvbmZpZy5hbGxvd051bGwgfHwgdGhpcy5fYWxsb3dOdWxsO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0cyB0aGUgbnVtYmVyIG9mIGVudHJpZXMgaW4gdGhlIGFwcGxpY2F0aW9ucyBsb2NhbCBzdG9yYWdlLlxyXG4gICAqL1xyXG4gIGNvdW50KCk6IFByb21pc2U8bnVtYmVyPiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIHJlc29sdmUobG9jYWxTdG9yYWdlLmxlbmd0aCk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgcmVqZWN0KGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIHRoZSBudGggKGRlZmluZWQgYnkgdGhlIGluZGV4IHBhcmFtZXRlcikga2V5IGluIHRoZSBzdG9yYWdlLlxyXG4gICAqIFRoZSBvcmRlciBvZiBrZXlzIGlzIHVzZXItYWdlbnQgZGVmaW5lZCwgc28geW91IHNob3VsZCBub3QgcmVseSBvbiBpdC5cclxuICAgKiBAcGFyYW0gaW5kZXggICBBbiBpbnRlZ2VyIHJlcHJlc2VudGluZyB0aGUgbnVtYmVyIG9mIHRoZSBrZXkgeW91IHdhbnQgdG8gZ2V0IHRoZSBuYW1lIG9mLiBUaGlzIGlzIGEgemVyby1iYXNlZCBpbmRleC5cclxuICAgKi9cclxuICBnZXRLZXkoaW5kZXg6IG51bWJlcik6IFByb21pc2U8c3RyaW5nIHwgbnVsbD4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPHN0cmluZyB8IG51bGw+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgaWYgKGluZGV4IDwgMCkge1xyXG4gICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ2luZGV4IGhhcyB0byBiZSAwIG9yIGdyZWF0ZXInKSk7XHJcbiAgICAgIH1cclxuICAgICAgdHJ5IHtcclxuICAgICAgICByZXNvbHZlKGxvY2FsU3RvcmFnZS5rZXkoaW5kZXgpKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICByZWplY3QoZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFkZHMgdGhhIHZhbHVlIHdpdGggdGhlIGdpdmVuIGtleSBvciB1cGRhdGVzIGFuIGV4aXN0aW5nIGVudHJ5LlxyXG4gICAqIEBwYXJhbSBrZXkgICAgIEtleSB0byBzdG9yZS5cclxuICAgKiBAcGFyYW0gdmFsdWUgICBWYWx1ZSB0byBzdG9yZS5cclxuICAgKiBAcGFyYW0gcHJlZml4ICBPcHRpb25hbCBwcmVmaXggdG8gb3ZlcndyaXRlIHRoZSBjb25maWd1cmVkIG9uZS5cclxuICAgKi9cclxuICBzZXQoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcsIHByZWZpeD86IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBpZiAodGhpcy5fYWxsb3dOdWxsXHJcbiAgICAgICAgICB8fCAoIXRoaXMuX2FsbG93TnVsbCAmJiB2YWx1ZSAhPT0gJ251bGwnICYmIHZhbHVlICE9PSBudWxsICYmIHZhbHVlICE9PSB1bmRlZmluZWQpKSB7XHJcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgJHtwcmVmaXggfHwgdGhpcy5fcHJlZml4fV8ke2tleX1gLCB2YWx1ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJldHVybiB0aGlzLnJlbW92ZShrZXksIHByZWZpeCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlc29sdmUodHJ1ZSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgcmVqZWN0KGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXRzIHRoZSBlbnRyeSBzcGVjaWZpZWQgYnkgdGhlIGdpdmVuIGtleSBvciBudWxsLlxyXG4gICAqIEBwYXJhbSBrZXkgICAgIEtleSBpZGVudGlmeWluZyB0aGUgd2FudGVkIGVudHJ5LlxyXG4gICAqIEBwYXJhbSBwcmVmaXggIE9wdGlvbmFsIHByZWZpeCB0byBvdmVyd3JpdGUgdGhlIGNvbmZpZ3VyZWQgb25lLlxyXG4gICAqL1xyXG4gIGdldChrZXk6IHN0cmluZywgcHJlZml4Pzogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmcgfCBudWxsPiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2U8c3RyaW5nIHwgbnVsbD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIHJlc29sdmUobG9jYWxTdG9yYWdlLmdldEl0ZW0oYCR7cHJlZml4IHx8IHRoaXMuX3ByZWZpeH1fJHtrZXl9YCkpO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHJlamVjdChlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVtb3ZlcyB0aGUgZW50cnkgc3BlY2lmaWVkIGJ5IHRoZSBnaXZlbiBrZXkuXHJcbiAgICogQHBhcmFtIGtleSAgICAgS2V5IGlkZW50aWZ5aW5nIHRoZSBlbnRyeSB0byByZW1vdmUuXHJcbiAgICogQHBhcmFtIHByZWZpeCAgT3B0aW9uYWwgcHJlZml4IHRvIG92ZXJ3cml0ZSB0aGUgY29uZmlndXJlZCBvbmUuXHJcbiAgICovXHJcbiAgcmVtb3ZlKGtleTogc3RyaW5nLCBwcmVmaXg/OiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oYCR7cHJlZml4IHx8IHRoaXMuX3ByZWZpeH1fJHtrZXl9YCk7XHJcbiAgICAgICAgcmVzb2x2ZSh0cnVlKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICByZWplY3QoZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENsZWFycyBhbGwgZW50cmllcyBvZiB0aGUgYXBwbGljYXRpb25zIGxvY2FsIHN0b3JhZ2UuXHJcbiAgICovXHJcbiAgY2xlYXIoKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xyXG4gICAgICAgIHJlc29sdmUodHJ1ZSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgcmVqZWN0KGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGJvaG9mZmkgb24gMDQuMDQuMjAxNy5cclxuICovXHJcbmltcG9ydCB7TW9kdWxlQ29uZmlnfSBmcm9tICcuL2ludGVyZmFjZXMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFByb3BlcnR5ID0gKHBhdGg6IHN0cmluZ1tdLCBvYmplY3Q6IGFueSkgPT5cclxuICBwYXRoLnJlZHVjZSgob2JqOiBhbnksIHA6IGFueSkgPT4gKCEhb2JqKSA/IG9ialtwXSA6IG51bGwsIG9iamVjdCk7XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0UHJvcGVydHkgPSAocGF0aDogc3RyaW5nW10gfCBzdHJpbmcsIHZhbHVlOiBhbnksIG9iamVjdDogYW55LCBmYWxzeVRyYW5zZm9ybWVyPzogKCkgPT4gYW55KSA9PiB7XHJcbiAgY29uc3QgbGFzdEtleUluZGV4ID0gcGF0aC5sZW5ndGggLSAxO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGFzdEtleUluZGV4OyArK2kpIHtcclxuICAgIGNvbnN0IGtleSA9IHBhdGhbaV07XHJcbiAgICBpZiAoIShrZXkgaW4gb2JqZWN0KSkge1xyXG4gICAgICBvYmplY3Rba2V5XSA9IHt9O1xyXG4gICAgfVxyXG4gICAgb2JqZWN0ID0gb2JqZWN0W2tleV07XHJcbiAgfVxyXG4gIG9iamVjdFtwYXRoW2xhc3RLZXlJbmRleF1dID0gKCF2YWx1ZSB8fCAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiB2YWx1ZSA9PT0gJ2ZhbHNlJykpXHJcbiAgJiYgISFmYWxzeVRyYW5zZm9ybWVyID8gZmFsc3lUcmFuc2Zvcm1lcigpIDogdmFsdWU7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZGVmYXVsdENvbmZpZzogTW9kdWxlQ29uZmlnID0ge1xyXG4gIGFsbG93TnVsbDogdHJ1ZSxcclxuICBwcmVmaXg6ICduZ3hfbG9jYWxfc3RvcmFnZSdcclxufTtcclxuIiwiaW1wb3J0IHtNb2R1bGVDb25maWd9IGZyb20gJy4vaW50ZXJmYWNlcyc7XHJcbmltcG9ydCB7SW5qZWN0aW9uVG9rZW59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1vZHVsZUNvbmZpZ1Rva2VuID0gbmV3IEluamVjdGlvblRva2VuPE1vZHVsZUNvbmZpZz4oJ21vZHVsZUNvbmZpZycpO1xyXG4iLCJpbXBvcnQge0luamVjdGFibGUsIE9wdGlvbmFsLCBJbmplY3R9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge01vZHVsZUNvbmZpZ30gZnJvbSAnLi9pbnRlcmZhY2VzJztcbmltcG9ydCB7UHJvbWlzYWJsZVNlcnZpY2V9IGZyb20gJy4vcHJvbWlzYWJsZS5zZXJ2aWNlJztcbmltcG9ydCB7ZGVmYXVsdENvbmZpZ30gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgeyBNb2R1bGVDb25maWdUb2tlbiB9IGZyb20gJy4vdG9rZW4nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTG9jYWxTdG9yYWdlU2VydmljZSB7XG4gIHByaXZhdGUgcmVhZG9ubHkgX3ByZWZpeDogc3RyaW5nO1xuICBwcml2YXRlIHJlYWRvbmx5IF9hbGxvd051bGw6IGJvb2xlYW47XG4gIHByaXZhdGUgcmVhZG9ubHkgX3Byb21pc2FibGU6IFByb21pc2FibGVTZXJ2aWNlO1xuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoTW9kdWxlQ29uZmlnVG9rZW4pIGNvbmZpZz86IE1vZHVsZUNvbmZpZykge1xuICAgIGlmIChjb25maWcpIHtcbiAgICAgIHRoaXMuX3ByZWZpeCA9IGNvbmZpZy5wcmVmaXggfHwgZGVmYXVsdENvbmZpZy5wcmVmaXg7XG4gICAgICB0aGlzLl9hbGxvd051bGwgPSBjb25maWcuYWxsb3dOdWxsIHx8IGRlZmF1bHRDb25maWcuYWxsb3dOdWxsO1xuICAgIH1cbiAgICB0aGlzLl9wcm9taXNhYmxlID0gbmV3IFByb21pc2FibGVTZXJ2aWNlKHtcbiAgICAgIGFsbG93TnVsbDogdGhpcy5fYWxsb3dOdWxsLFxuICAgICAgcHJlZml4OiB0aGlzLl9wcmVmaXhcbiAgICB9KTtcbiAgfVxuXG4gIGFzUHJvbWlzYWJsZSgpOiBQcm9taXNhYmxlU2VydmljZSB7XG4gICAgcmV0dXJuIHRoaXMuX3Byb21pc2FibGU7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB0aGUgbnVtYmVyIG9mIGVudHJpZXMgaW4gdGhlIGFwcGxpY2F0aW9ucyBsb2NhbCBzdG9yYWdlLlxuICAgKi9cbiAgY291bnQoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5sZW5ndGg7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBudGggKGRlZmluZWQgYnkgdGhlIGluZGV4IHBhcmFtZXRlcikga2V5IGluIHRoZSBzdG9yYWdlLlxuICAgKiBUaGUgb3JkZXIgb2Yga2V5cyBpcyB1c2VyLWFnZW50IGRlZmluZWQsIHNvIHlvdSBzaG91bGQgbm90IHJlbHkgb24gaXQuXG4gICAqIEBwYXJhbSBpbmRleCAgIEFuIGludGVnZXIgcmVwcmVzZW50aW5nIHRoZSBudW1iZXIgb2YgdGhlIGtleSB5b3Ugd2FudCB0byBnZXQgdGhlIG5hbWUgb2YuIFRoaXMgaXMgYSB6ZXJvLWJhc2VkIGluZGV4LlxuICAgKi9cbiAgZ2V0S2V5KGluZGV4OiBudW1iZXIpOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkIHtcbiAgICBpZiAoaW5kZXggPCAwKSB7XG4gICAgICBjb25zb2xlLmVycm9yKG5ldyBFcnJvcignaW5kZXggaGFzIHRvIGJlIDAgb3IgZ3JlYXRlcicpKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2Uua2V5KGluZGV4KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgdGhhIHZhbHVlIHdpdGggdGhlIGdpdmVuIGtleSBvciB1cGRhdGVzIGFuIGV4aXN0aW5nIGVudHJ5LlxuICAgKiBAcGFyYW0ga2V5ICAgICBLZXkgdG8gc3RvcmUuXG4gICAqIEBwYXJhbSB2YWx1ZSAgIFZhbHVlIHRvIHN0b3JlLlxuICAgKiBAcGFyYW0gcHJlZml4ICBPcHRpb25hbCBwcmVmaXggdG8gb3ZlcndyaXRlIHRoZSBjb25maWd1cmVkIG9uZS5cbiAgICovXG4gIHNldChrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZywgcHJlZml4Pzogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKFxuICAgICAgdGhpcy5fYWxsb3dOdWxsIHx8XG4gICAgICAoIXRoaXMuX2FsbG93TnVsbCAmJlxuICAgICAgICB2YWx1ZSAhPT0gJ251bGwnICYmXG4gICAgICAgIHZhbHVlICE9PSBudWxsICYmXG4gICAgICAgIHZhbHVlICE9PSB1bmRlZmluZWQpXG4gICAgKSB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgJHtwcmVmaXggfHwgdGhpcy5fcHJlZml4fV8ke2tleX1gLCB2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVtb3ZlKGtleSwgcHJlZml4KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB0aGUgZW50cnkgc3BlY2lmaWVkIGJ5IHRoZSBnaXZlbiBrZXkgb3IgbnVsbC5cbiAgICogQHBhcmFtIGtleSAgICAgS2V5IGlkZW50aWZ5aW5nIHRoZSB3YW50ZWQgZW50cnkuXG4gICAqIEBwYXJhbSBwcmVmaXggIE9wdGlvbmFsIHByZWZpeCB0byBvdmVyd3JpdGUgdGhlIGNvbmZpZ3VyZWQgb25lLlxuICAgKi9cbiAgZ2V0KGtleTogc3RyaW5nLCBwcmVmaXg/OiBzdHJpbmcpOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKGAke3ByZWZpeCB8fCB0aGlzLl9wcmVmaXh9XyR7a2V5fWApO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyB0aGUgZW50cnkgc3BlY2lmaWVkIGJ5IHRoZSBnaXZlbiBrZXkuXG4gICAqIEBwYXJhbSBrZXkgICAgIEtleSBpZGVudGlmeWluZyB0aGUgZW50cnkgdG8gcmVtb3ZlLlxuICAgKiBAcGFyYW0gcHJlZml4ICBPcHRpb25hbCBwcmVmaXggdG8gb3ZlcndyaXRlIHRoZSBjb25maWd1cmVkIG9uZS5cbiAgICovXG4gIHJlbW92ZShrZXk6IHN0cmluZywgcHJlZml4Pzogc3RyaW5nKTogdm9pZCB7XG4gICAgdHJ5IHtcbiAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGAke3ByZWZpeCB8fCB0aGlzLl9wcmVmaXh9XyR7a2V5fWApO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXJzIGFsbCBlbnRyaWVzIG9mIHRoZSBhcHBsaWNhdGlvbnMgbG9jYWwgc3RvcmFnZS5cbiAgICovXG4gIGNsZWFyKCk6IHZvaWQge1xuICAgIHRyeSB7XG4gICAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgfVxuICB9XG59XG4iLCIvKipcclxuICogQ3JlYXRlZCBieSBib2hvZmZpIG9uIDMxLjAxLjIwMTguXHJcbiAqL1xyXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge2Zyb21FdmVudCBhcyBvYnNlcnZhYmxlRnJvbUV2ZW50LCBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGV9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQge3NoYXJlLCBmaWx0ZXJ9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFN0b3JhZ2VFdmVudFNlcnZpY2Uge1xyXG5cclxuICBwcml2YXRlIF9ldmVudFN0cmVhbTogQmVoYXZpb3JTdWJqZWN0PFN0b3JhZ2VFdmVudD4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PFN0b3JhZ2VFdmVudD4obnVsbCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgb2JzZXJ2YWJsZUZyb21FdmVudCh3aW5kb3csICdzdG9yYWdlJylcclxuICAgICAgLnN1YnNjcmliZSgoZXY6IFN0b3JhZ2VFdmVudCkgPT4gdGhpcy5fZXZlbnRTdHJlYW0ubmV4dChldikpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHN0cmVhbSgpOiBPYnNlcnZhYmxlPFN0b3JhZ2VFdmVudD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2V2ZW50U3RyZWFtXHJcbiAgICAgIC5hc09ic2VydmFibGUoKS5waXBlKFxyXG4gICAgICAgIGZpbHRlcihldiA9PiAhIWV2KSxcclxuICAgICAgICBzaGFyZSgpXHJcbiAgICAgICk7XHJcbiAgfVxyXG59XHJcbiIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGJvaG9mZmkgb24gMDMuMDQuMjAxNy5cclxuICovXHJcbmltcG9ydCB7QWZ0ZXJWaWV3SW5pdCwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkRlc3Ryb3ksIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7ZnJvbUV2ZW50IGFzIG9ic2VydmFibGVGcm9tRXZlbnQsIFN1YnNjcmlwdGlvbn0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7ZGVib3VuY2VUaW1lLCBmaWx0ZXJ9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7Z2V0UHJvcGVydHksIHNldFByb3BlcnR5fSBmcm9tICcuLi91dGlscyc7XHJcbmltcG9ydCB7TG9jYWxTdG9yYWdlU2VydmljZX0gZnJvbSAnLi4vbmd4LWxvY2Fsc3RvcmFnZS5zZXJ2aWNlJztcclxuaW1wb3J0IHtTdG9yYWdlRXZlbnRTZXJ2aWNlfSBmcm9tICcuLi9zdG9yYWdlLWV2ZW50LnNlcnZpY2UnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbbmd4TG9jYWxTdG9yYWdlXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIExvY2FsU3RvcmFnZURpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XHJcblxyXG4gIEBJbnB1dCgnbmd4TG9jYWxTdG9yYWdlJylcclxuICBsc0tleTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpXHJcbiAgbHNQcmVmaXg6IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIGxzRXZlbnQ6IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIGxzRGVib3VuY2UgPSAwO1xyXG4gIEBJbnB1dCgpXHJcbiAgbHNJbml0RnJvbVN0b3JhZ2UgPSBmYWxzZTtcclxuICBASW5wdXQoKVxyXG4gIGxzRmFsc3lUcmFuc2Zvcm1lcj86ICgpID0+IGFueTtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgbHNTdG9yZWRWYWx1ZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICBwcml2YXRlIF9ldmVudFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG4gIHByaXZhdGUgX3ZhbHVlUGF0aDogc3RyaW5nW10gPSBbXTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlcjogRWxlbWVudFJlZixcclxuICAgICAgICAgICAgICBwcml2YXRlIGxzczogTG9jYWxTdG9yYWdlU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIGVzOiBTdG9yYWdlRXZlbnRTZXJ2aWNlKSB7XHJcblxyXG4gICAgdGhpcy5lcy5zdHJlYW0ucGlwZShcclxuICAgIC8vIFRPRE86IGZpbHRlciBzaG91bGQgYmUgbW9yZSBhY2N1cmF0ZVxyXG4gICAgICBmaWx0ZXIoKGV2OiBTdG9yYWdlRXZlbnQpID0+IGV2LmtleS5pbmRleE9mKHRoaXMubHNLZXkpID49IDApXHJcbiAgICApXHJcbiAgICAgIC5zdWJzY3JpYmUoKGV2OiBTdG9yYWdlRXZlbnQpID0+IHtcclxuICAgICAgICBzZXRQcm9wZXJ0eSh0aGlzLl92YWx1ZVBhdGgubGVuZ3RoID8gdGhpcy5fdmFsdWVQYXRoIDogWyd2YWx1ZSddLCBldi5uZXdWYWx1ZSwgdGhpcy5lci5uYXRpdmVFbGVtZW50LCB0aGlzLmxzRmFsc3lUcmFuc2Zvcm1lcik7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5faW5pdEtleSgpO1xyXG4gICAgdGhpcy5faW5pdEZyb21TdG9yYWdlKCk7XHJcbiAgICB0aGlzLl9ob29rRXZlbnQoKTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGxzVmFsdWVQYXRoKHBhdGg6IGFueVtdIHwgc3RyaW5nKSB7XHJcbiAgICBpZiAocGF0aCAhPSBudWxsKSB7XHJcbiAgICAgIHRoaXMuX3ZhbHVlUGF0aCA9IEFycmF5LmlzQXJyYXkocGF0aCkgPyBwYXRoIDogcGF0aC5zcGxpdCgnLCcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fdmFsdWVQYXRoID0gW107XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9pbml0S2V5KCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLmxzS2V5KSB7XHJcbiAgICAgIGlmICghdGhpcy5lci5uYXRpdmVFbGVtZW50LmlkICYmICF0aGlzLmVyLm5hdGl2ZUVsZW1lbnQubmFtZSkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTm8ga2V5IG9yIGVsZW1lbnQgaWQgb3IgbmFtZSBzdXBwbGllZCEnKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmxzS2V5ID0gdGhpcy5lci5uYXRpdmVFbGVtZW50LmlkIHx8IHRoaXMuZXIubmF0aXZlRWxlbWVudC5uYW1lO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfaG9va0V2ZW50KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubHNFdmVudCkge1xyXG4gICAgICB0aGlzLl9ldmVudFN1YnNjcmlwdGlvbiA9IG9ic2VydmFibGVGcm9tRXZlbnQodGhpcy5lci5uYXRpdmVFbGVtZW50LCB0aGlzLmxzRXZlbnQpLnBpcGUoXHJcbiAgICAgICAgZGVib3VuY2VUaW1lKHRoaXMubHNEZWJvdW5jZSkpXHJcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmxzcy5hc1Byb21pc2FibGUoKS5zZXQodGhpcy5sc0tleSxcclxuICAgICAgICAgICAgZ2V0UHJvcGVydHkodGhpcy5fdmFsdWVQYXRoLmxlbmd0aCA/IHRoaXMuX3ZhbHVlUGF0aCA6IFsndmFsdWUnXSwgdGhpcy5lci5uYXRpdmVFbGVtZW50KSxcclxuICAgICAgICAgICAgdGhpcy5sc1ByZWZpeClcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgIHRoaXMubHNzLmFzUHJvbWlzYWJsZSgpLmdldCh0aGlzLmxzS2V5LCB0aGlzLmxzUHJlZml4KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHZhbHVlOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5sc1N0b3JlZFZhbHVlLmVtaXQodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyOiBFcnJvcikgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnI6IEVycm9yKSA9PiBjb25zb2xlLmVycm9yKGVycikpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfaW5pdEZyb21TdG9yYWdlKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubHNJbml0RnJvbVN0b3JhZ2UpIHtcclxuICAgICAgdGhpcy5sc3MuYXNQcm9taXNhYmxlKCkuZ2V0KHRoaXMubHNLZXksIHRoaXMubHNQcmVmaXgpXHJcbiAgICAgICAgLnRoZW4oKHN0b3JlZFZhbHVlOiBhbnkpID0+IHtcclxuICAgICAgICAgIHNldFByb3BlcnR5KHRoaXMuX3ZhbHVlUGF0aC5sZW5ndGggPyB0aGlzLl92YWx1ZVBhdGggOiBbJ3ZhbHVlJ10sIHN0b3JlZFZhbHVlLCB0aGlzLmVyLm5hdGl2ZUVsZW1lbnQsIHRoaXMubHNGYWxzeVRyYW5zZm9ybWVyKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyOiBFcnJvcikgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuX2V2ZW50U3Vic2NyaXB0aW9uICYmICF0aGlzLl9ldmVudFN1YnNjcmlwdGlvbi5jbG9zZWQpIHtcclxuICAgICAgdGhpcy5fZXZlbnRTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgYm9ob2ZmaSBvbiAyMi4wNS4yMDE3LlxyXG4gKi9cclxuaW1wb3J0IHtmaWx0ZXJ9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7RGVjb3JhdG9yT3B0c30gZnJvbSAnLi9pbnRlcmZhY2VzJztcclxuaW1wb3J0IHtMb2NhbFN0b3JhZ2VTZXJ2aWNlfSBmcm9tICcuL25neC1sb2NhbHN0b3JhZ2Uuc2VydmljZSc7XHJcbmltcG9ydCB7U3RvcmFnZUV2ZW50U2VydmljZX0gZnJvbSAnLi9zdG9yYWdlLWV2ZW50LnNlcnZpY2UnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG5neExvY2FsU3RvcmFnZShvcHRpb25zPzogRGVjb3JhdG9yT3B0cykge1xyXG4gIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0OiBPYmplY3QsIHByb3BlcnR5RGVzY3JpcHRpb246IHN0cmluZykge1xyXG5cclxuICAgIGNvbnN0IHNlcnZpY2U6IExvY2FsU3RvcmFnZVNlcnZpY2UgPSBuZXcgTG9jYWxTdG9yYWdlU2VydmljZSh7XHJcbiAgICAgIHByZWZpeDogISFvcHRpb25zICYmICEhb3B0aW9ucy5wcmVmaXggPyBvcHRpb25zLnByZWZpeCA6ICcnXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBrZXkgPSAhIW9wdGlvbnMgJiYgISFvcHRpb25zLmtleSA/IG9wdGlvbnMua2V5IDogcHJvcGVydHlEZXNjcmlwdGlvbjtcclxuXHJcbiAgICBjb25zdCBldmVudFNlcnZpY2U6IFN0b3JhZ2VFdmVudFNlcnZpY2UgPSBuZXcgU3RvcmFnZUV2ZW50U2VydmljZSgpO1xyXG4gICAgZXZlbnRTZXJ2aWNlLnN0cmVhbS5waXBlKFxyXG4gICAgICAvLyBUT0RPOiBmaWx0ZXIgc2hvdWxkIGJlIG1vcmUgYWNjdXJhdGVcclxuICAgICAgZmlsdGVyKChldjogU3RvcmFnZUV2ZW50KSA9PiBldi5rZXkuaW5kZXhPZihrZXkpID49IDApXHJcbiAgICApXHJcbiAgICAgIC5zdWJzY3JpYmUoKGV2OiBTdG9yYWdlRXZlbnQpID0+IHtcclxuICAgICAgICBpZiAoISFldi5uZXdWYWx1ZSAmJiB0eXBlb2YgZXYubmV3VmFsdWUgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICBpZiAoZXYubmV3VmFsdWUgIT09ICdudWxsJykge1xyXG4gICAgICAgICAgICB0YXJnZXRbcHJvcGVydHlEZXNjcmlwdGlvbl0gPSBldi5uZXdWYWx1ZTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRhcmdldFtwcm9wZXJ0eURlc2NyaXB0aW9uXSA9ICEhb3B0aW9ucy5udWxsVHJhbnNmb3JtZXIgPyBvcHRpb25zLm51bGxUcmFuc2Zvcm1lcigpIDogbnVsbDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIHByb3BlcnR5RGVzY3JpcHRpb24sIHtcclxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc3Qgc3RvcmFnZVZhbHVlID0gc2VydmljZS5nZXQoa2V5KTtcclxuICAgICAgICByZXR1cm4gc3RvcmFnZVZhbHVlID09IG51bGwgJiYgISFvcHRpb25zLm51bGxUcmFuc2Zvcm1lciA/IG9wdGlvbnMubnVsbFRyYW5zZm9ybWVyKCkgOiBzdG9yYWdlVmFsdWU7XHJcbiAgICAgIH0sXHJcbiAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlOiBhbnkpIHtcclxuICAgICAgICBzZXJ2aWNlLnNldChrZXksIHZhbHVlKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfTtcclxufVxyXG4iLCJpbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7TW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUsIE9wdGlvbmFsLCBTa2lwU2VsZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7TW9kdWxlQ29uZmlnfSBmcm9tICcuL2ludGVyZmFjZXMnO1xuaW1wb3J0IHtMb2NhbFN0b3JhZ2VTZXJ2aWNlfSBmcm9tICcuL25neC1sb2NhbHN0b3JhZ2Uuc2VydmljZSc7XG5pbXBvcnQge1N0b3JhZ2VFdmVudFNlcnZpY2V9IGZyb20gJy4vc3RvcmFnZS1ldmVudC5zZXJ2aWNlJztcbmltcG9ydCB7TG9jYWxTdG9yYWdlRGlyZWN0aXZlfSBmcm9tICcuL2RpcmVjdGl2ZXMvbmd4LWxvY2Fsc3RvcmFnZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHtNb2R1bGVDb25maWdUb2tlbn0gZnJvbSAnLi90b2tlbic7XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm92aWRlU3RvcmFnZVNlcnZpY2UobW9kdWxlQ29uZmlnOiBNb2R1bGVDb25maWcpOiBMb2NhbFN0b3JhZ2VTZXJ2aWNlIHtcbiAgcmV0dXJuIG5ldyBMb2NhbFN0b3JhZ2VTZXJ2aWNlKG1vZHVsZUNvbmZpZyk7XG59XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgTG9jYWxTdG9yYWdlRGlyZWN0aXZlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBMb2NhbFN0b3JhZ2VEaXJlY3RpdmVcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hMb2NhbFN0b3JhZ2VNb2R1bGUge1xuXG4gIHN0YXRpYyBmb3JSb290KGNvbmZpZz86IE1vZHVsZUNvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogTmd4TG9jYWxTdG9yYWdlTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBNb2R1bGVDb25maWdUb2tlbixcbiAgICAgICAgICB1c2VWYWx1ZTogY29uZmlnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBMb2NhbFN0b3JhZ2VTZXJ2aWNlLFxuICAgICAgICAgIHVzZUZhY3Rvcnk6IHByb3ZpZGVTdG9yYWdlU2VydmljZSxcbiAgICAgICAgICBkZXBzOiBbXG4gICAgICAgICAgICBNb2R1bGVDb25maWdUb2tlblxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgU3RvcmFnZUV2ZW50U2VydmljZVxuICAgICAgXVxuICAgIH07XG4gIH1cblxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBwYXJlbnRNb2R1bGU6IE5neExvY2FsU3RvcmFnZU1vZHVsZSkge1xuICAgIGlmIChwYXJlbnRNb2R1bGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTmd4TG9jYWxTdG9yYWdlTW9kdWxlIGlzIGFscmVhZHkgbG9hZGVkLiBJbXBvcnQgaXQgaW4gdGhlIEFwcE1vZHVsZSBvbmx5Jyk7XG4gICAgfVxuICB9XG59XG4iXSwibmFtZXMiOlsib2JzZXJ2YWJsZUZyb21FdmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBS0E7Ozs7SUFLRSxZQUFZLE1BQXFCO1FBQy9CLElBQUksTUFBTSxFQUFFO1lBQ1YsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDN0MsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUM7U0FDdkQ7S0FDRjs7Ozs7SUFLRCxLQUFLO1FBQ0gsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNO1lBQ2pDLElBQUk7Z0JBQ0YsT0FBTyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUM5QjtZQUFDLE9BQU8sS0FBSyxFQUFFO2dCQUNkLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNmO1NBQ0YsQ0FBQyxDQUFDO0tBQ0o7Ozs7Ozs7SUFPRCxNQUFNLENBQUMsS0FBYTtRQUNsQixPQUFPLElBQUksT0FBTyxDQUFnQixDQUFDLE9B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