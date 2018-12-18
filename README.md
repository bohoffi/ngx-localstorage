[![npm version](https://img.shields.io/npm/v/ngx-localstorage.svg)](https://www.npmjs.com/package/ngx-localstorage)
[![Join the chat at https://gitter.im/bohoffi/ngx-localstorage](https://badges.gitter.im//bohoffi/ngx-localstorage.svg)](https://gitter.im//bohoffi/ngx-localstorage?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
# ngx-localstorage 

An Angular wrapper for local storage access.

* [Installation](#installation)
* [Usage](#usage)
* [API](#api)

Feel free to take a look at the [DEMO](https://bohoffi.github.io/ngx-localstorage/).

## Installation
Install via npm:
```
npm install ngx-localstorage --save
```

## Usage

#### 1. Import `NgxLocalStorageModule`

```ts
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgxLocalStorageModule} from 'ngx-localstorage';

@NgModule({
    imports: [
        BrowserModule,
        NgxLocalStorageModule.forRoot()
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
```

##### Configuration (`NgxLocalStorageModule.forRoot(moduleConfig)`)

* __prefix__
  * Type: `string`
  * Determines the key prefix.
  * Default: __ngx_local_storage__
* __allowNull__
  * Type: `boolean`
  * Determines if _null | 'null'_ values should be stored.
  * Default: __true__
  
## API

### LocalStorageService

#### Methods

- `count(): number`: Gets the number of entries in the applications local storage.
- `getKey(index: number): string | null`: Returns the nth (defined by the index parameter) key in the storage. The order of keys is user-agent defined, so you should not rely on it.
- `set(key: string, value: string, prefix?: string): void`: Adds tha value with the given key or updates an existing entry.
- `get(key: string, prefix?: string): string | null`: Gets the entry specified by the given key or null.
- `remove(key: string, prefix?: string): void`: Removes the entry specified by the given key.
- `clear(): void`: Clears all entries of the applications local storage.

_Promise-based_

- `asPromisable(): PromisableService`: provide the storage operations wrapped in a Promise
- `count(): Promise<number>`: Gets the number of entries in the applications local storage.
- `getKey(index: number): Promise<string | null>`: Returns the nth (defined by the index parameter) key in the storage. The order of keys is user-agent defined, so you should not rely on it.
- `set(key: string, value: string, prefix?: string): Promise<boolean>`: Adds tha value with the given key or updates an existing entry.
- `get(key: string, prefix?: string): Promise<string | null>`: Gets the entry specified by the given key or null.
- `remove(key: string, prefix?: string): Promise<boolean>`: Removes the entry specified by the given key.
- `clear(): Promise<boolean>`: Clears all entries of the applications local storage.

##### Example

```ts
import {LocalStorageService} from 'ngx-localstorage';

@Component({
  selector: 'app-storage-access',
  template: './storage-access.component.html'
})
export class StorageAccessComponent implements OnInit {

  constructor(private _storageService: LocalStorageService) {
  }
  
  ngOnInit(): void {
    console.log('Entries count: ', this._storageService.count())
  
    // Pomise-based
    this._storageService.asPromisable().count()
      .then(count => console.log('Entries count: ', count))
      .catch(error => console.error(error));
  }
}
```
### StorageEventService

#### Properties

- `stream(): Observable<StorageEvent>`: Gets a stream of StorageEvent.

### ngxLocalStorage (Directive)

#### Properties

- `lsKey` (`string`): Determines the key (combined with the prefix) which is used to store the value. If omitted the `id` or the `name`attribute will be used.
- `lsPrefix` (`string`): Determines the prefix (combined with the key) to store the value.
- `lsEvent` (`string`): Determines the event to hook up to store the value.
- `lsDebounce` (`number`): Determines the 'delay' when processing the event.
- `lsInitFromStorage` (`boolean`): Determines if the stored value (if there is one) should be set automatically on application load. __Default__: `false`
- `lsValuePath` (`string[] | string`): Determines the path to access the value to store.
- `lsFalsyTransformer` (`() => any`): Used to transform falsy values received from storage.

#### Methods/Events

- `lsStoredValue`: Used to register an event listener when a value gets stored.

##### Example

Capture the value of an input element when the user is typing and loads the stored value on startup:
```html
<p>
  <label for="text">Text:</label>
  <input id="text" type="text" ngxLocalStorage lsEvent="input" lsDebounce="500" lsInitFromStorage="true"
    (storedValue)="logStoredValue($event)">
</p>
```

Defining the `valuePath` for a checkbox input:
```html
<p>
  <input type="checkbox" id="cbox1" ngxLocalStorage lsEvent="change" [valuePath]="['checked']">
  <label for="cbox1">Checkbox</label>
</p>
```

### ngxLocalStorage (Property-Decorator)

#### Parameters

- `key?: string`: specify a key to store the value; if omitted the property name will be used
- `prefix?: string`: specify a prefix to store the value; if omitted the modules default prefix will be used
- `nullTransformer?: () => any`: Used to transform null values received from storage.

##### Example

```ts
import {ngxLocalStorage} from 'ngx-localstorage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements AfterViewInit {

  @ngxLocalStorage()
  code: any;
}
```
