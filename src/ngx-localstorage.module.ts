/**
 * Created by HOFFM59 on 03.04.2017.
 */
import {ModuleWithProviders, NgModule} from "@angular/core";

@NgModule({})
export class AngularLocalStorageModule {

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: AngularLocalStorageModule
        }
    }
}