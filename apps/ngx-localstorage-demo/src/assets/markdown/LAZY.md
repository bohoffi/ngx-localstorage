#### Code inside lazy (feature) module

```ts
...
import { NgxLocalstorageDirectiveModule } from 'ngx-localstorage';

@NgModule({
  declarations: [
    ...
  ],
  imports: [
    ...

    NgxLocalstorageDirectiveModule,

    ...
  ]
})
export class LazyModule { }
```

#### Component template

```html
<input type="text" id="txt1" ngxLocalStorage prefix="demo" initFromStorage="true" forEvent="input" [valuePath]="['value']" />
```
