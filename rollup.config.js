/**
 * Created by HOFFM59 on 03.04.2017.
 */
export default {
    entry: 'index.js',
    dest: 'bundles/ngx-localstorage.umd.js',
    sourceMap: false,
    format: 'umd',
    moduleName: 'ng.localstorage',
    globals: {
        '@angular/core': 'ng.core',
        '@angular/common': 'ng.common',
        'rxjs/Observable': 'Rx',
        // 'rxjs/ReplaySubject': 'Rx',
        'rxjs/add/operator/map': 'Rx.Observable.prototype',
        // 'rxjs/add/operator/mergeMap': 'Rx.Observable.prototype',
        // 'rxjs/add/operator/pluck': 'Rx.Observable.prototype',
        'rxjs/add/operator/first': 'Rx.Observable.prototype',
        // 'rxjs/add/observable/fromEvent': 'Rx.Observable',
        // 'rxjs/add/observable/merge': 'Rx.Observable',
        'rxjs/add/observable/throw': 'Rx.Observable',
        'rxjs/add/observable/of': 'Rx.Observable'
    }
}