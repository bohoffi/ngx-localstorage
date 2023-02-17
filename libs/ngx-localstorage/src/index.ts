/*
 * Public API Surface of ngx-localstorage
 */
export { LocalStorageDirective } from './lib/directives/ngx-localstorage.directive';
// services
export { LocalStorageService } from './lib/services/ngx-localstorage.service';
// interfaces
export { NgxLocalstorageConfiguration } from './lib/interfaces/storage-configuration';
export { StorageSerializer } from './lib/interfaces/storage-serializer';
// providers
export { NgxLocalStorageFeatures, NgxLocalstorageFeature, provideNgxLocalstorage, SerializerFeature, withSerializer } from './lib/provider';
// tokens
export { NGX_LOCAL_STORAGE_CONFIG } from './lib/tokens/storage-config';
export { STORAGE_SUPPORT } from './lib/tokens/storage';
export { NGX_LOCAL_STORAGE_SERIALIZER } from './lib/tokens/storage-serializer';
