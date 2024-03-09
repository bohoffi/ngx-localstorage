# {{ NgDocPage.title }}

ngx-localstorage is a library providing a wrapper for localstorage/sessionstorage access.
This way a project can ensure a standardized way of writing to and reading from web storage by eliminating scattered serializers or project specific key prefixes all over the workspace.

## Installation

Installing ngx-localstorage is as easy as with every simple npm package:

```bash
npm install ngx-localstorage
```

## Configuration

For configuration you can either provide the InjectionToken directly or use the provider function. Both of them expect an `NgxLocalstorageConfiguration` object.

```typescript name="InjectionToken" group="configuration"
...
providers: [
    {
        provide: NGX_LOCAL_STORAGE_CONFIG,
        useValue: {
            prefix: 'demo',
            delimiter: '@'
        }
    }
]
...
```

```typescript name="Provider function" group="configuration"
...
providers: [
    provideNgxLocalstorage({
        prefix: 'demo',
        delimiter: '@'
    })
]
...
```

### Serialization

Per default the library utilizes `JSON.stringify()/JSON.parse()` for (de)serializing values between your app and storage but you are free to provide your own implementation
of `StorageSerializer`.

```typescript name="InjectionToken" group="serialization"
...
providers: [
    {
        provide: NGX_LOCAL_STORAGE_SERIALIZER,
        useClass: <custom serializer implementing StorageSerializer>
    }
]
...
```

```typescript name="Provider function feature" group="serialization"
...
providers: [
    provideNgxLocalstorage({
        ...
    },
    withSerializer(<custom serializer implementing StorageSerializer>))
]
...
```

Despite this global configuration you can pass a specific serializer to each `get()/set()` call of the `LocalStorageService`.
