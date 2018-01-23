/**
 * Created by bohoffi on 03.04.2017.
 */
export default {
    entry: 'index.js',
    dest: 'bundles/ngx-localstorage.umd.js',
    sourceMap: false,
    format: 'umd',
    moduleName: 'ngx.localstorage',
    globals: {
        '@angular/core': 'ng.core',
        '@angular/common': 'ng.common',
        'rxjs/Observable': 'Rx',
        'rxjs/Subscription': 'Rx',
        'rxjs/add/observable/fromEvent': 'Rx.Observable.prototype',
        'rxjs/add/observable/debounceTime': 'Rx.Observable.prototype'
    }
}