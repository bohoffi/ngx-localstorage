<a name="4.0.0"></a>

# [4.0.0](https://github.com/bohoffi/ngx-localstorage/compare/3.5.0...4.0.0) (2022-XX-XX)

### Features

* subscibe directly to `LocalStorageService` to obtain `StorageEvent` stream ([9125a8b](https://github.com/bohoffi/ngx-localstorage/commit/9125a8b2ebf6ecd9610e44be23cae6ce89a1723a))
* library errors will be emitted through service stream ([c34359b](https://github.com/bohoffi/ngx-localstorage/commit/c34359baedefc6f6c0ac18e749b6a944dd430c7d))
* abort initialization when storage is not available ([13d68ee](https://github.com/bohoffi/ngx-localstorage/commit/13d68eed51c67c850c2574a3282084e540c69845))
* expose `STORAGE_SUPPORT` token ([4f2659d](https://github.com/bohoffi/ngx-localstorage/commit/4f2659df1fd9c29d85967534a6b4edaaa32ac23c))
  * check storage availability before actually using the library
* add `serializer` to decorator options (defaults to `DefaultSerializer`) ([57f00ca](https://github.com/bohoffi/ngx-localstorage/commit/57f00ca79f206a9eebe4497052f7264ec927fc26))
* provide `DefaultSerializer` by default ([3e77633](https://github.com/bohoffi/ngx-localstorage/commit/3e77633535e0e6c31ffe6249aa6e309064c423d5))

### BREAKING CHANGES

* library now utilizes SCAM ([6ee4690](https://github.com/bohoffi/ngx-localstorage/commit/6ee46904f482c66e1004e04b4c7d2959c4331c8c))
  * removed `NgxLocalStorageModule`
  * added `NgxLocalstorageDirectiveModule`
* update configuration and decorator options ([0d36315](https://github.com/bohoffi/ngx-localstorage/commit/0d363159bca1a5df17a36d7cec8a97faa9e7d19d))
  * removed `storage: Storage`
  * added `storageType: 'localStorage' | 'sessionStorage'`
* removed `StorageEventService` ([9125a8b](https://github.com/bohoffi/ngx-localstorage/commit/9125a8b2ebf6ecd9610e44be23cae6ce89a1723a))
  * Storage events can now bo obtained by subscribing to `LocalStorageService` directily via `subscribe`
* update properties in `LocalStorageDirective`([c3b7d48](https://github.com/bohoffi/ngx-localstorage/commit/c3b7d48bd73eed88e35e9dec359bdeeed895bfa3))
  * remove `ls` prefix
* drop decorator support in favor of directive ([2681110](https://github.com/bohoffi/ngx-localstorage/commit/2681110ad65e36ff9f83899b2817f5d0e4eea8d5))

### Deprecations

  * mark `PromisableService` as deprecated ([2133daf](https://github.com/bohoffi/ngx-localstorage/commit/2133dafe669d8a7b126da85e770d340b051b1c9d))
  * mark several overloads in `LocalStorageService` as deprecated ([a124382](https://github.com/bohoffi/ngx-localstorage/commit/a12438239638522c4cb12ca29addb54aa0d52bb1))

<a name="3.5.0"></a>
# [3.5.0](https://github.com/bohoffi/ngx-localstorage/compare/3.4.0...3.5.0) (2022-10-23)

### Features

* Update to Ivy compatibility

<a name="3.4.0"></a>
# [3.4.0](https://github.com/bohoffi/ngx-localstorage/compare/3.3.1...3.4.0) (2021-07-16)

### Features

* **Configuration**
  * add optional custom delimiter ([#42](https://github.com/bohoffi/ngx-localstorage/pull/42))
    * thanks to [@assureclaims](https://github.com/assureclaims)

<a name="3.3.1"></a>
# [3.3.1](https://github.com/bohoffi/ngx-localstorage/compare/3.3.0...3.3.1) (2021-05-07)

### Bug fixes

* **StorageService**
  * incorrect remove call in `set` with nullish value ([#40](https://github.com/bohoffi/ngx-localstorage/issues/40))

<a name="3.3.0"></a>
# [3.3.0](https://github.com/bohoffi/ngx-localstorage/compare/3.2.1...3.3.0) (2021-02-26)
### Features

* **Service**
  * Adds the possibility to use sessionstorage instead of localstorage (thanks to [@vladimirstempel](https://github.com/vladimirstempel))
    * default storage will stay localstorage
    * set via module configuration

<a name="3.2.1"></a>
# [3.2.1](https://github.com/bohoffi/ngx-localstorage/compare/3.2.0...3.2.1) (2020-11-06)

### Bug fixes

* **Module**
  * add support for submodules and lazy-loaded submodules ([#32](https://github.com/bohoffi/ngx-localstorage/issues/32))

<a name="3.2.0"></a>
# [3.2.0](https://github.com/bohoffi/ngx-localstorage/compare/3.1.0...3.2.0) (2020-10-06)

### Features

* **Framework**
  * Updates compatibility to Angular v10.x

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
