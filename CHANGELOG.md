<a name="2.1.0">2.1.0</a>
# [2.1.0](https://github.com/BalticCode/ngx-hotkeys/compare/2.0.1...2.1.0) (2018-08-12)

### Bug fixes

* **Angular 6 compatibility**
  * fixed build errors ([#12](https://github.com/bohoffi/ngx-localstorage/issues/12))

### Features

* **Angular**
  * Updated to Angular 6

<a name="2.0.1">2.0.1</a>

### Bug fixes

* **AoT (production) builds**
  * fixed "Encountered undefined provider!" error

<a name="2.0.0">2.0.0</a>

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

<a name="1.2.0">1.2.0</a>

### Breaking changes

* **LocalStorageService**
  * _new default usage_: removed the prior Promise-based usage in favour of direct calls
  * Promised-based usage is still possible by using `service.asPromisable()`

### Features

* **Decorator:**
  * _ngxLocalStorage_: loads stored value on startup and stores value on property change
