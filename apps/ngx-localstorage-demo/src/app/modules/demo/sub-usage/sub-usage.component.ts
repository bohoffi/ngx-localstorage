import { Component } from '@angular/core';

@Component({
  selector: 'app-sub-usage',
  template: `
    <a [routerLink]="['sub']">Navigate to sub</a><br>
    <router-outlet></router-outlet>
  `,
  styles: [
  ]
})
export class SubUsageComponent { }
