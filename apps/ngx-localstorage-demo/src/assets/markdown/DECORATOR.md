#### Code inside component

```ts
@ngxLocalStorage({ key: 'cbox1', nullTransformer: () => false })
boundBoolean: boolean;

@ngxLocalStorage({ key: 'txt1', prefix: 'demo' })
boundText: string;
```
