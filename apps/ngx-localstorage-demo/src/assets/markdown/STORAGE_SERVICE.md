#### Code inside component

```ts
export class StorageServiceComponent implements OnInit {

  entryCount = 0;
  storedObject: any;

  constructor(private lss: LocalStorageService) {
    this.lss.set('demo-key', {
      id: 1,
      name: 'John Doe'
    })
  }

  ngOnInit() {
    this.entryCount = this.lss.count();

    // read values via service
    this.storedObject = this.lss.get('demo-key') as { id: number; name: string; };
  }
}
```
