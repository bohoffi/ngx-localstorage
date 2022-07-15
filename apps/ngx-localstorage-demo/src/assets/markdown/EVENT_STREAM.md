#### Code inside component

```ts
export class EventStreamComponent {
  $events: StorageEvent[] = [];

  constructor(private readonly localstorageService: LocalStorageService) {
    this.localstorageService.subscribe(event => {
      this.$events = [...this.$events, event];
      console.log('events', this.$events);
    });
  }
}
```
