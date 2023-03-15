<img src="https://raw.githubusercontent.com/bohoffi/ngx-localstorage/develop/assets/logo.svg" width="150">

[![npm version](https://img.shields.io/npm/v/ngx-localstorage.svg)](https://www.npmjs.com/package/ngx-localstorage)

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->

[![All Contributors](https://img.shields.io/badge/all_contributors-8-orange.svg?style=flat-square)](#contributors-)

<!-- ALL-CONTRIBUTORS-BADGE:END -->

![PR-builder](https://github.com/bohoffi/ngx-localstorage/workflows/PR-builder/badge.svg)

# ngx-localstorage

An Angular wrapper for localstorage/sessionstorage access.

- [Installation](#installation)
- [Usage](#usage)
  - [Configuration](#configuration)
  - [Serialization](#serialization)

Feel free to take a look at the [DEMO / API](https://bohoffi.github.io/ngx-localstorage/).

## Installation

Install via npm:

```
npm install ngx-localstorage
```

## Usage

If you want to use the `ngxLocalStorage` directive you have to import it either in yopur module or component/directive.

#### Import `LocalStorageDirective`

```ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocalStorageDirective } from 'ngx-localstorage';

@NgModule({
  imports: [BrowserModule, LocalStorageDirective],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

### Configuration

For configuration provide it using the `NGX_LOCAL_STORAGE_CONFIG` InjectionToken or use the `provideNgxLocalstorage()` helper method (which optionally allows providing additional features as well).

- **prefix**
  - Type: `string?`
  - Determines the key prefix.
  - Default: **undefined**
- **allowNull**
  - Type: `boolean?`
  - Determines if _null | 'null'_ values should be stored.
  - Default: **true**
- **storageType**
  - Type: `StorageType?`
  - Determines the storage type.
  - Default: **'localStorage'**
- **delimiter**
  - Type: `string?`
  - Determines the delimiter in between prefix and key.
  - Default: **underscore('\_')**

### Serialization

#### Default serialization

The library utilizes the `JSON.stringify()/JSON.parse()` mechanics to pass values (of any type) to and from localstorage per default.
If you wish you can override that behaviour by injecting your own custom serializer (app wide) or pass one per stoage call.

#### App wide serializer

Inject your custom serializer implentation using the provided injection token or pass it to the `provideNgxLocalstorage()` helper method:

```ts
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NGX_LOCAL_STORAGE_SERIALIZER} from 'ngx-localstorage';

@NgModule({
    imports: [
        BrowserModule
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
