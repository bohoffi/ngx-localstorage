<img src="https://raw.githubusercontent.com/bohoffi/ngx-localstorage/develop/assets/logo.svg" width="150">

[![npm version](https://img.shields.io/npm/v/ngx-localstorage.svg)](https://www.npmjs.com/package/ngx-localstorage)
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-8-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->
![PR-builder](https://github.com/bohoffi/ngx-localstorage/workflows/PR-builder/badge.svg)
# ngx-localstorage 

An Angular wrapper for localstorage/sessionstorage access.

* [Installation](#installation)
* [Usage](#usage)
  * [Serialization](#serialization)
* [API](#api)

Feel free to take a look at the [DEMO](https://bohoffi.github.io/ngx-localstorage/).

<a href="https://www.buymeacoffee.com/bohoffi" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: 41px !important;width: 174px !important;box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;" ></a>

## Installation
Install via npm:
```
npm install ngx-localstorage --save
```

## Usage

#### Import `NgxLocalStorageModule`

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

#### Configuration (`NgxLocalStorageModule.forRoot(moduleConfig)`)

* __prefix__
  * Type: `string?`
  * Determines the key prefix.
  * Default: __undefined__
* __allowNull__
  * Type: `boolean?`
  * Determines if _null | 'null'_ values should be stored.
  * Default: __true__
* __storageType__
  * Type: `StorageType?`
  * Determines the storage type.
  * Default:  __'localStorage'__
* __delimiter__
  * Type: `string?`
  * Determines the delimiter in between prefix and key.
  * Default: __underscore('_')__

### Submodule support (`NgxLocalStorageModule.forChild()`)

### Serialization

#### Default serialization

The library utilizes the `JSON.stringify()/JSON.parse()` mechanics to pass values (of any type) to and from localstorage per default.
If you wish you can override that behaviour by injecting your own custom serializer (app wide) or pass one per stoage call.

#### App wide serializer
Inject your custom serializer implentation using the provided injection token:

```ts
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgxLocalStorageModule, NGX_LOCAL_STORAGE_SERIALIZER} from 'ngx-localstorage';

@NgModule({
    imports: [
        BrowserModule,
        NgxLocalStorageModule.forRoot()
    ],
    bootstrap: [AppComponent],
    providers: [
      {
        provide: NGX_LOCAL_STORAGE_SERIALIZER,
        useClass: <custom serializer implementing StorageSerializer>
      }
    ]
})
export class AppModule { }
```

##### Per call serializer
Every `set()/get()` call on `LocalstorageService` now supports to pass an optional (de)seriaizer. If none is provided the app wide (or default) one is used.
  
## API

### LocalStorageService

#### Methods

- `subscribe(): Observable<StorageEvent>`: Gets a stream of StorageEvent
- `count(): number`: Gets the number of entries in the applications local storage.
- `getKey(index: number): string | null`: Returns the nth (defined by the index parameter) key in the storage. The order of keys is user-agent defined, so you should not rely on it.
- `set(...): void`: Adds tha value with the given key or updates an existing entry using either the provided or default serializer (check method overloads).
- `get(...): string | null`: Gets the entry specified by the given key or null using either the provided or default serializer (check method overloads).
- `remove(...): void`: Removes the entry specified by the given key.
- `clear(): void`: Clears all entries of the applications local storage.

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
}
```

### ngxLocalStorage (Directive)

#### Properties

- `ngxLocalStorage (key)` (`string`): Determines the key (combined with the prefix) which is used to store the value. If omitted the `id` or the `name`attribute will be used.
- `prefix?` (`string`): Determines the prefix (combined with the key) to store the value.
- `forEvent?` (`string`): Determines the event to hook up to store the value.
- `storageDebounce` (`number`): Determines the 'delay' when processing the event.
- `initFromStorage` (`boolean`): Determines if the stored value (if there is one) should be set automatically on application load. __Default__: `false`
- `valuePath` (`string[] | string`): Determines the path to access the value to store.
- `falsyTransformer` (`() => any`): Used to transform falsy values received from storage.

#### Methods/Events

- `storedValue`: Event emitted when the bound value got stored.

##### Example

Capture the value of an input element when the user is typing and loads the stored value on startup:
```html
<p>
  <label for="txt1">Text</label>
  <input type="text" id="txt1" ngxLocalStorage prefix="demo" initFromStorage forEvent="input" [valuePath]="['value']" />
</p>
```

Defining the `valuePath` for a checkbox input:
```html
<p>
  <input type="checkbox" id="cbox1" ngxLocalStorage initFromStorage forEvent="change" [valuePath]="['checked']" [falsyTransformer]="defaultFalsyTransformer">
  <label for="cbox1">Checkbox</label>
</p>
```

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://bohoffi.github.io/"><img src="https://avatars0.githubusercontent.com/u/9944566?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Basti Hoffmann</b></sub></a><br /><a href="https://github.com/bohoffi/ngx-localstorage/commits?author=bohoffi" title="Code">💻</a> <a href="https://github.com/bohoffi/ngx-localstorage/commits?author=bohoffi" title="Documentation">📖</a> <a href="#ideas-bohoffi" title="Ideas, Planning, & Feedback">🤔</a> <a href="#maintenance-bohoffi" title="Maintenance">🚧</a> <a href="#platform-bohoffi" title="Packaging/porting to new platform">📦</a> <a href="https://github.com/bohoffi/ngx-localstorage/pulls?q=is%3Apr+reviewed-by%3Abohoffi" title="Reviewed Pull Requests">👀</a></td>
    <td align="center"><a href="https://mattlewis.me/"><img src="https://avatars1.githubusercontent.com/u/6425649?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Matt Lewis</b></sub></a><br /><a href="#maintenance-mattlewis92" title="Maintenance">🚧</a></td>
    <td align="center"><a href="https://www.bhalash.com/"><img src="https://avatars1.githubusercontent.com/u/1775913?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Mark</b></sub></a><br /><a href="https://github.com/bohoffi/ngx-localstorage/issues?q=author%3Abhalash" title="Bug reports">🐛</a> <a href="#example-bhalash" title="Examples">💡</a></td>
    <td align="center"><a href="https://github.com/NewteqDeveloper"><img src="https://avatars0.githubusercontent.com/u/20768842?v=4?s=100" width="100px;" alt=""/><br /><sub><b>NewteqDeveloper</b></sub></a><br /><a href="#example-NewteqDeveloper" title="Examples">💡</a></td>
    <td align="center"><a href="https://github.com/abdatta"><img src="https://avatars0.githubusercontent.com/u/20218826?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Abhishek Datta</b></sub></a><br /><a href="#maintenance-abdatta" title="Maintenance">🚧</a></td>
    <td align="center"><a href="https://ifyoudo.net/"><img src="https://avatars0.githubusercontent.com/u/317770?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Mikael Syska</b></sub></a><br /><a href="https://github.com/bohoffi/ngx-localstorage/issues?q=author%3Asyska" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://github.com/vladimirstempel"><img src="https://avatars.githubusercontent.com/u/16229503?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Vladimir Stempel</b></sub></a><br /><a href="https://github.com/bohoffi/ngx-localstorage/commits?author=vladimirstempel" title="Code">💻</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/assureclaims"><img src="https://avatars.githubusercontent.com/u/84139537?v=4?s=100" width="100px;" alt=""/><br /><sub><b>assureclaims</b></sub></a><br /><a href="https://github.com/bohoffi/ngx-localstorage/commits?author=assureclaims" title="Code">💻</a> <a href="#design-assureclaims" title="Design">🎨</a> <a href="https://github.com/bohoffi/ngx-localstorage/commits?author=assureclaims" title="Documentation">📖</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
