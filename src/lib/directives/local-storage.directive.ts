/**
 * Created by HOFFM59 on 03.04.2017.
 */
import {Directive, ElementRef, Input} from "@angular/core";
import {LocalStorageService} from "../services/local-storage.service";

@Directive({
    selector: '[ngxLocalStorage]'
})
export class LocalStorageDirective {

    constructor(private _element: ElementRef,
                private _service: LocalStorageService) {
    }

    @Input('ngxLocalStorage')
    prefix: string;
}