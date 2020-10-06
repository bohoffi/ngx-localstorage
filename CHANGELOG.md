<a name="3.2.0"></a>
# [3.2.0](https://github.com/bohoffi/ngx-localstorage/compare/3.1.0...3.2.0) (2020-10-06)

### Features

* **Framework**
  * Updates compatibility to Angular v9.x

<a name="3.1.0"></a>
# [3.1.0](https://github.com/bohoffi/ngx-localstorage/compare/3.0.0...3.1.0) (2020-03-15)

### Features

* **Framework**
  * Updates compatibility to Angular v9.x

<a name="3.0.0"></a>
# [3.0.0](https://github.com/bohoffi/ngx-localstorage/compare/2.4.1...3.0.0) (2020-03-08)

### Features

* **Service**
  * the service is now fed by a default (de)serializer using `JSON.stringify()/JSON.parse()`

### Breaking changes

* **Service**
  * the service is now using a default (de)serialization mechanism (mentioned above) (#24) (fd5feca)
  * depending on your prior usage it may break your code
  * it's possible to either inject an app wide (de)serializer or use one per storage call (see README)

<a name="2.4.1"></a>
# [2.4.1](https://github.com/bohoffi/ngx-localstorage/compare/2.4.0...2.4.1) (2020-02-29)

### Bug fixes

* **Service**
  * Service use configured prefix if set ([#21](https://github.com/bohoffi/ngx-localstorage/issues/21))

<a name="2.4.0"></a>
# [2.4.0](https://github.com/bohoffi/ngx-localstorage/compare/2.3.0...2.4.0) (2019-08-19)

### Features

* **Configuration**
  * Allow usage without key prefix

### Changes

* **Angular**
  * Added back schematics support

<a name="2.3.0"></a>
# [2.3.0](https://github.com/bohoffi/ngx-localstorage/compare/2.2.1...2.3.0) (2018-12-18)

### Changes

* **Angular**
  * Removed schematics support
  * updated compatibility to Angular >=4.0.0

<a name="2.2.1"></a>
# [2.2.1](https://github.com/bohoffi/ngx-localstorage/compare/2.1.0...2.2.1) (2018-08-13)

### Features

* **Angular**
  * Added schematics support ([#11](https://github.com/bohoffi/ngx-localstorage/issues/11))

<a name="2.1.0"></a>
# [2.1.0](https://github.com/bohoffi/ngx-localstorage/compare/2.0.1...2.1.0) (2018-08-12)

### Bug fixes

* **Angular 6 compatibility**
  * fixed build errors ([#12](https://github.com/bohoffi/ngx-localstorage/issues/12))

### Features

* **Angular**
  * Updated to Angular 6


<a name="2.0.1"></a>
# [2.0.1](https://github.com/bohoffi/ngx-localstorage/compare/2.0.0...2.0.1) (2018-02-22)

### Bug fixes

* **AoT (production) builds**
  * fixed "Encountered undefined provider!" error

<a name="2.0.0"></a>
# [2.0.2](https://github.com/bohoffi/ngx-localstorage/compare/1.2.0...2.0.0) (2018-02-21)

### Features

* **Reactivity**
  * the Decorator and the directive are now reactive
  * if you have storage changes in other tabs these changes are reflected to all instances
* **StorageEventService**
  * allows to hook onto the events from storage `Observable<StorageEvent>`
* **Decorator**
  * _ngxLocalStorage_ received a new property `nullTransformer?: () => any` which is used to transform null values (e.g. when value is removed from storage)
* **Directive**
  * _lsFalsyTransformer_ received a new property `lsFalsyTransformer?: () => any` which is used to transform falsy values (e.g. 'false' is bound to a checkbox input)

### Bug fixes

* **Angular 6 compatibility**
  * fixed warnings on AoT builds

<a name="1.2.0"></a>
# 1.2.0 (2017-05-22)

### Breaking changes

* **LocalStorageService**
  * _new default usage_: removed the prior Promise-based usage in favour of direct calls
  * Promised-based usage is still possible by using `service.asPromisable()`

### Features

* **Decorator:**
  * _ngxLocalStorage_: loads stored value on startup and stores value on property change
