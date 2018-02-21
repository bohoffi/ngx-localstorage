<a name="2.0.0">2.0.0</a>

### Features

* **StorageEventService**
  * allows to hook onto the events from storage `Observable<StorageEvent>`

### Bug fixes

* **Reactivity**
  * the Decorator and the directive are now reactive
  * if you have storage changes in other tabs these changes are reflected to all instances

<a name="1.2.0">1.2.0</a>

### Breaking changes

* **LocalStorageService**
  * _new default usage_: removed the prior Promise-based usage in favour of direct calls
  * Promised-based usage is still possible by using `service.asPromisable()`

### Features

* **Decorator:**
  * _ngxLocalStorage_: loads stored value on startup and stores value on property change
