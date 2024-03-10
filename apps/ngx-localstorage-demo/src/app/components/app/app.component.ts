import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NgDocNavbarComponent, NgDocRootComponent, NgDocSidebarComponent } from '@ng-doc/app';
import { VERSION } from 'ngx-localstorage';

@Component({
  selector: 'ngx-localstorage-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [NgDocRootComponent, NgDocNavbarComponent, NgDocSidebarComponent, RouterLink, RouterOutlet]
})
export class AppComponent {
  protected readonly libVersion = VERSION;
}
