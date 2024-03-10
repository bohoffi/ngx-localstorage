# {{ NgDocPage.title }}

This directive provides an automatic sync between your UI control and web storage. To use it either import it into your module or your component.

```typescript name="Module driven app" group="import"
@NgModule({
  declarations: [],
  imports: [LocalStorageDirective],
  exports: []
})
export class YourModule {}
```

```typescript name="Standalone API" group="import"
@Component({
    selector: 'your-comp-selector'
    standalone: true,
    imports: [
        LocalStorageDirective
    ]
})
export class YourComponent {}
```

## Access using native HTML API

The directive fully supports the native HTML API for binding values.

{{ NgDocActions.demoPane("NativeHtmlApiComponent") }}

## Access using `ReactiveForms` API

Besides the native binding it supports binding using the `ReactiveForms` API as well which reduces boilerplate code.

{{ NgDocActions.demoPane("ReactiveFormsApiComponent") }}
