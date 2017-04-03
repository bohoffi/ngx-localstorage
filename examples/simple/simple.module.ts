/**
 * Created by HOFFM59 on 03.04.2017.
 */
import {Component, NgModule} from '@angular/core';
import {LocalStorageService} from "../../src/lib";
import {NgxLocalStorageModule} from "../../src/ngx-localstorage.module";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {
    title = 'app works!';

    constructor(private lsService: LocalStorageService) {
        this.clear();
        this.logCount();
        this.add('a', 'b');
        this.logCount();
        this.clear();
        this.logCount();
    }

    private logCount(): void {
        console.log('count:');
        this.lsService.count()
            .then(count => console.log(count))
            .catch(error => console.error(error));
    }

    private add(key: string, value: string): void {
        this.lsService.set(key, value)
            .then(res => console.log(res))
            .catch(err => console.error(err));
    }

    private clear(): void {
        this.lsService.clear()
            .then(res => console.log(res))
            .catch(err => console.error(err));
    }
}

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        NgxLocalStorageModule.forRoot()
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}