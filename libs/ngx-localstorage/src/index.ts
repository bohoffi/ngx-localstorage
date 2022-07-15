/*
 * Public API Surface of ngx-localstorage
 */
// module
export * from './lib/ngx-localstorage.module';
// services
export * from './lib/services/ngx-localstorage.service';
// directives
export * from './lib/directives/ngx-localstorage.directive';
// decorator
export * from './lib/decorators';
// interfaces
export * from './lib/interfaces/decorator-options';
export * from './lib/interfaces/storage-configuration';
export * from './lib/interfaces/storage-serializer';
// tokens
export { NGX_LOCAL_STORAGE_CONFIG } from './lib/tokens/storage-config';
export * from './lib/tokens/storage-serializer';
