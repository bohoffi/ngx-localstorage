import { Directive, ElementRef, EventEmitter, Injectable, InjectionToken, Input, NgModule, Optional, Output, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable as Observable$1 } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/debounceTime';
import { BehaviorSubject as BehaviorSubject$1 } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/share';

/**
 * Created by HOFFM59 on 22.05.2017.
*/
class PromisableService {
    /**
     * @param {?=} config
     */
    constructor(config) {
        this._prefix = 'ngx_local_storage';
        this._allowNull = true;
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
 * Created by bohoffi on 04.04.2017.
 */
const getProperty = (path, object) => path.reduce((xs, x) => (xs && xs[x]) ? xs[x] : null, object);
const setProperty = (path, value, object) => {
    const /** @type {?} */ lastKeyIndex = path.length - 1;
    for (let /** @type {?} */ i = 0; i < lastKeyIndex; ++i) {
        const /** @type {?} */ key = path[i];
        if (!(key in object)) {
            object[key] = {};
        }
        object = object[key];
    }
    object[path[lastKeyIndex]] = value;
};
const defaultConfig = {
    allowNull: true,
    prefix: 'ngx_local_storage'
};

/**
 * Created by bohoffi on 03.04.2017.
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
        if (this._allowNull
            || (!this._allowNull && value !== 'null' && value !== null && value !== undefined)) {
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
    { type: Injectable },
];
/**
 * @nocollapse
 */
LocalStorageService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional },] },
];

/**
 * Created by bohoffi on 04.04.2017.
 */

/**
 * Created by HOFFM59 on 31.01.2018.
 */
class StorageEventService {
    constructor() {
        this._eventStream = new BehaviorSubject$1(null);
        Observable$1.fromEvent(window, 'storage')
            .subscribe((ev) => this._eventStream.next(ev));
    }
    /**
     * @return {?}
     */
    get stream() {
        return this._eventStream
            .asObservable()
            .filter(ev => !!ev)
            .share();
    }
}
StorageEventService.decorators = [
    { type: Injectable },
];
/**
 * @nocollapse
 */
StorageEventService.ctorParameters = () => [];

/**
 * Created by bohoffi on 03.04.2017.
 */
class LocalStorageDirective {
    /**
     * @param {?} _element
     * @param {?} _service
     * @param {?} _evService
     */
    constructor(_element, _service, _evService) {
        this._element = _element;
        this._service = _service;
        this._evService = _evService;
        this.lsDebounce = 0;
        this.lsInitFromStorage = false;
        this.lsStoredValue = new EventEmitter();
        this._valuePath = [];
        this._evService.stream
            .filter((ev) => ev.key.indexOf(this.lsKey) >= 0)
            .subscribe((ev) => {
            //if (!!ev.newValue && typeof ev.newValue === 'string' && ev.newValue !== 'null') {
            if (!!ev.newValue && typeof ev.newValue === 'string') {
                if (ev.newValue !== 'null') {
                    setProperty(this._valuePath.length ? this._valuePath : ['value'], ev.newValue, this._element.nativeElement);
                }
                else {
                    setProperty(this._valuePath.length ? this._valuePath : ['value'], '', this._element.nativeElement);
                }
            }
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
            if (!this._element.nativeElement.id && !this._element.nativeElement.name) {
                throw new Error('No key or element id or name supplied!');
            }
            this.lsKey = this._element.nativeElement.id || this._element.nativeElement.name;
        }
    }
    /**
     * @return {?}
     */
    _hookEvent() {
        if (this.lsEvent) {
            this._eventSubscription = Observable$1.fromEvent(this._element.nativeElement, this.lsEvent)
                .debounceTime(this.lsDebounce)
                .subscribe(() => {
                this._service.asPromisable().set(this.lsKey, getProperty(this._valuePath.length ? this._valuePath : ['value'], this._element.nativeElement), this.lsPrefix)
                    .then(() => {
                    this._service.asPromisable().get(this.lsKey, this.lsPrefix)
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
            this._service.asPromisable().get(this.lsKey, this.lsPrefix)
                .then((storedValue) => {
                if (!!storedValue && typeof storedValue === 'string' && storedValue !== 'null') {
                    setProperty(this._valuePath.length ? this._valuePath : ['value'], storedValue, this._element.nativeElement);
                }
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
            },] },
];
/**
 * @nocollapse
 */
LocalStorageDirective.ctorParameters = () => [
    { type: ElementRef, },
    { type: LocalStorageService, },
    { type: StorageEventService, },
];
LocalStorageDirective.propDecorators = {
    'lsKey': [{ type: Input, args: ['ngxLocalStorage',] },],
    'lsPrefix': [{ type: Input },],
    'lsEvent': [{ type: Input },],
    'lsDebounce': [{ type: Input },],
    'lsInitFromStorage': [{ type: Input },],
    'lsStoredValue': [{ type: Output },],
    'lsValuePath': [{ type: Input },],
};

/**
 * Created by bohoffi on 04.04.2017.
 */

/**
* Created by HOFFM59 on 22.05.2017.
*/
/**
 * @param {?=} options
 * @return {?}
 */
function ngxLocalStorage(options) {
    return function (target, propertyDescription) {
        const /** @type {?} */ service = new LocalStorageService({
            prefix: !!options && !!options.prefix ? options.prefix : ''
        });
        const /** @type {?} */ key = !!options && !!options.key ? options.key : propertyDescription;
        const /** @type {?} */ eventService = new StorageEventService();
        eventService.stream
            .filter((ev) => ev.key.indexOf(key) >= 0)
            .subscribe((ev) => {
            //target[propertyDescription] = ev.newValue;
            if (!!ev.newValue && typeof ev.newValue === 'string') {
                if (ev.newValue !== 'null') {
                    //setProperty(this._valuePath.length ? this._valuePath : ['value'], ev.newValue, this._element.nativeElement);
                    target[propertyDescription] = ev.newValue;
                }
                else {
                    //setProperty(this._valuePath.length ? this._valuePath : ['value'], '', this._element.nativeElement);
                    target[propertyDescription] = '';
                }
            }
        });
        Object.defineProperty(target, propertyDescription, {
            get: function () {
                return service.get(key);
            },
            set: function (value) {
                service.set(key, value);
            }
        });
    };
}

/**
 * Created by bohoffi on 03.04.2017.
 */
const ModuleConfigToken = new InjectionToken('moduleConfig');
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
            },] },
];
/**
 * @nocollapse
 */
NgxLocalStorageModule.ctorParameters = () => [
    { type: NgxLocalStorageModule, decorators: [{ type: Optional }, { type: SkipSelf },] },
];

/**
 * Generated bundle index. Do not edit.
 */

export { ModuleConfigToken, provideStorageService, NgxLocalStorageModule, LocalStorageService, ngxLocalStorage, LocalStorageDirective as ɵb, StorageEventService as ɵc };
//# sourceMappingURL=ngx-localstorage.js.map
