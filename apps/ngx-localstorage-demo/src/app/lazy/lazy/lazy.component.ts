import { Component } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "ngx-localstorage-lazy",
  templateUrl: "./lazy.component.html",
  styleUrls: ["./lazy.component.scss"],
})
export class LazyComponent {

  constructor(
    private readonly router: Router
  ) { }

  public close(): void {
    this.router.navigate([{ outlets: { lazy: null } }]);
  }
}
