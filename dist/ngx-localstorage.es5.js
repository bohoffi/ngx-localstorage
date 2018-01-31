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
var PromisableService = /** @class */ (function () {
    /**
     * @param {?=} config
     */
    function PromisableService(config) {
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
    PromisableService.prototype.count = function () {
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
     * @param {?} index   An integer representing the number of the key you want to get the name of. This is a zero-based index.
     * @return {?}
     */
    PromisableService.prototype.getKey = function (index) {
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
     * @param {?} key     Key to store.
     * @param {?} value   Value to store.
     * @param {?=} prefix  Optional prefix to overwrite the configured one.
     * @return {?}
     */
    PromisableService.prototype.set = function (key, value, prefix) {
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
     * @param {?} key     Key identifying the wanted entry.
     * @param {?=} prefix  Optional prefix to overwrite the configured one.
     * @return {?}
     */
    PromisableService.prototype.get = function (key, prefix) {
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
     * @param {?} key     Key identifying the entry to remove.
     * @param {?=} prefix  Optional prefix to overwrite the configured one.
     * @return {?}
     */
    PromisableService.prototype.remove = function (key, prefix) {
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
     * @return {?}
     */
    PromisableService.prototype.clear = function () {
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
 * Created by bohoffi on 04.04.2017.
 */
var getProperty = function (path, object) { return path.reduce(function (xs, x) { return (xs && xs[x]) ? xs[x] : null; }, object); };
var setProperty = function (path, value, object) {
    var /** @type {?} */ lastKeyIndex = path.length - 1;
    for (var /** @type {?} */ i = 0; i < lastKeyIndex; ++i) {
        var /** @type {?} */ key = path[i];
        if (!(key in object)) {
            object[key] = {};
        }
        object = object[key];
    }
    object[path[lastKeyIndex]] = value;
};
var defaultConfig = {
    allowNull: true,
    prefix: 'ngx_local_storage'
};
/**
 * Created by bohoffi on 03.04.2017.
 */
var LocalStorageService = /** @class */ (function () {
    /**
     * @param {?=} config
     */
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
    LocalStorageService.prototype.asPromisable = function () {
        return this._promisable;
    };
    /**
     * Gets the number of entries in the applications local storage.
     * @return {?}
     */
    LocalStorageService.prototype.count = function () {
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
     * @param {?} index   An integer representing the number of the key you want to get the name of. This is a zero-based index.
     * @return {?}
     */
    LocalStorageService.prototype.getKey = function (index) {
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
     * @param {?} key     Key to store.
     * @param {?} value   Value to store.
     * @param {?=} prefix  Optional prefix to overwrite the configured one.
     * @return {?}
     */
    LocalStorageService.prototype.set = function (key, value, prefix) {
        if (this._allowNull
            || (!this._allowNull && value !== 'null' && value !== null && value !== undefined)) {
            localStorage.setItem((prefix || this._prefix) + "_" + key, value);
        }
        else {
            this.remove(key, prefix);
        }
    };
    /**
     * Gets the entry specified by the given key or null.
     * @param {?} key     Key identifying the wanted entry.
     * @param {?=} prefix  Optional prefix to overwrite the configured one.
     * @return {?}
     */
    LocalStorageService.prototype.get = function (key, prefix) {
        try {
            return localStorage.getItem((prefix || this._prefix) + "_" + key);
        }
        catch (error) {
            console.error(error);
        }
    };
    /**
     * Removes the entry specified by the given key.
     * @param {?} key     Key identifying the entry to remove.
     * @param {?=} prefix  Optional prefix to overwrite the configured one.
     * @return {?}
     */
    LocalStorageService.prototype.remove = function (key, prefix) {
        try {
            localStorage.removeItem((prefix || this._prefix) + "_" + key);
        }
        catch (error) {
            console.error(error);
        }
    };
    /**
     * Clears all entries of the applications local storage.
     * @return {?}
     */
    LocalStorageService.prototype.clear = function () {
        try {
            localStorage.clear();
        }
        catch (error) {
            console.error(error);
        }
    };
    return LocalStorageService;
}());
LocalStorageService.decorators = [
    { type: Injectable },
];
/**
 * @nocollapse
 */
LocalStorageService.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: Optional },] },
]; };
/**
 * Created by bohoffi on 04.04.2017.
 */
/**
 * Created by HOFFM59 on 31.01.2018.
 */
var StorageEventService = /** @class */ (function () {
    function StorageEventService() {
        var _this = this;
        this._eventStream = new BehaviorSubject$1(null);
        Observable$1.fromEvent(window, 'storage')
            .subscribe(function (ev) { return _this._eventStream.next(ev); });
    }
    Object.defineProperty(StorageEventService.prototype, "stream", {
        /**
         * @return {?}
         */
        get: function () {
            return this._eventStream
                .asObservable()
                .filter(function (ev) { return !!ev; })
                .share();
        },
        enumerable: true,
        configurable: true
    });
    return StorageEventService;
}());
StorageEventService.decorators = [
    { type: Injectable },
];
/**
 * @nocollapse
 */
StorageEventService.ctorParameters = function () { return []; };
/**
 * Created by bohoffi on 03.04.2017.
 */
var LocalStorageDirective = /** @class */ (function () {
    /**
     * @param {?} _element
     * @param {?} _service
     * @param {?} _evService
     */
    function LocalStorageDirective(_element, _service, _evService) {
        var _this = this;
        this._element = _element;
        this._service = _service;
        this._evService = _evService;
        this.lsDebounce = 0;
        this.lsInitFromStorage = false;
        this.lsStoredValue = new EventEmitter();
        this._valuePath = [];
        this._evService.stream
            .filter(function (ev) { return ev.key.indexOf(_this.lsKey) >= 0; })
            .subscribe(function (ev) {
            //if (!!ev.newValue && typeof ev.newValue === 'string' && ev.newValue !== 'null') {
            if (!!ev.newValue && typeof ev.newValue === 'string') {
                if (ev.newValue !== 'null') {
                    setProperty(_this._valuePath.length ? _this._valuePath : ['value'], ev.newValue, _this._element.nativeElement);
                }
                else {
                    setProperty(_this._valuePath.length ? _this._valuePath : ['value'], '', _this._element.nativeElement);
                }
            }
        });
    }
    /**
     * @return {?}
     */
    LocalStorageDirective.prototype.ngAfterViewInit = function () {
        this._initKey();
        this._initFromStorage();
        this._hookEvent();
    };
    Object.defineProperty(LocalStorageDirective.prototype, "lsValuePath", {
        /**
         * @param {?} path
         * @return {?}
         */
        set: function (path) {
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
    LocalStorageDirective.prototype._initKey = function () {
        if (!this.lsKey) {
            if (!this._element.nativeElement.id && !this._element.nativeElement.name) {
                throw new Error('No key or element id or name supplied!');
            }
            this.lsKey = this._element.nativeElement.id || this._element.nativeElement.name;
        }
    };
    /**
     * @return {?}
     */
    LocalStorageDirective.prototype._hookEvent = function () {
        var _this = this;
        if (this.lsEvent) {
            this._eventSubscription = Observable$1.fromEvent(this._element.nativeElement, this.lsEvent)
                .debounceTime(this.lsDebounce)
                .subscribe(function () {
                _this._service.asPromisable().set(_this.lsKey, getProperty(_this._valuePath.length ? _this._valuePath : ['value'], _this._element.nativeElement), _this.lsPrefix)
                    .then(function () {
                    _this._service.asPromisable().get(_this.lsKey, _this.lsPrefix)
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
    LocalStorageDirective.prototype._initFromStorage = function () {
        var _this = this;
        if (this.lsInitFromStorage) {
            this._service.asPromisable().get(this.lsKey, this.lsPrefix)
                .then(function (storedValue) {
                if (!!storedValue && typeof storedValue === 'string' && storedValue !== 'null') {
                    setProperty(_this._valuePath.length ? _this._valuePath : ['value'], storedValue, _this._element.nativeElement);
                }
            })
                .catch(function (err) { return console.error(err); });
        }
    };
    /**
     * @return {?}
     */
    LocalStorageDirective.prototype.ngOnDestroy = function () {
        if (this._eventSubscription && !this._eventSubscription.closed) {
            this._eventSubscription.unsubscribe();
        }
    };
    return LocalStorageDirective;
}());
LocalStorageDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ngxLocalStorage]'
            },] },
];
/**
 * @nocollapse
 */
LocalStorageDirective.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: LocalStorageService, },
    { type: StorageEventService, },
]; };
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
        var /** @type {?} */ service = new LocalStorageService({
            prefix: !!options && !!options.prefix ? options.prefix : ''
        });
        var /** @type {?} */ key = !!options && !!options.key ? options.key : propertyDescription;
        var /** @type {?} */ eventService = new StorageEventService();
        eventService.stream
            .filter(function (ev) { return ev.key.indexOf(key) >= 0; })
            .subscribe(function (ev) {
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
var ModuleConfigToken = new InjectionToken('moduleConfig');
/**
 * @param {?} moduleConfig
 * @return {?}
 */
function provideStorageService(moduleConfig) {
    return new LocalStorageService(moduleConfig);
}
var NgxLocalStorageModule = /** @class */ (function () {
    /**
     * @param {?} parentModule
     */
    function NgxLocalStorageModule(parentModule) {
        if (parentModule) {
            throw new Error('NgxLocalStorageModule is already loaded. Import it in the AppModule only');
        }
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    NgxLocalStorageModule.forRoot = function (config) {
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
    return NgxLocalStorageModule;
}());
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
NgxLocalStorageModule.ctorParameters = function () { return [
    { type: NgxLocalStorageModule, decorators: [{ type: Optional }, { type: SkipSelf },] },
]; };
/**
 * Generated bundle index. Do not edit.
 */
export { ModuleConfigToken, provideStorageService, NgxLocalStorageModule, LocalStorageService, ngxLocalStorage, LocalStorageDirective as ɵb, StorageEventService as ɵc };
//# sourceMappingURL=ngx-localstorage.es5.js.map
