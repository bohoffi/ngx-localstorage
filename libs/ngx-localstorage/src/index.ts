/*
 * Public API Surface of ngx-localstorage
 */
// modules
export * from './lib/directives/ngx-localstorage-directive.module';
// services
export * from './lib/services/ngx-localstorage.service';
// interfaces
export * from './lib/interfaces/storage-configuration';
export * from './lib/interfaces/storage-serializer';
// tokens
export { NGX_LOCAL_STORAGE_CONFIG } from './lib/tokens/storage-config';
export { STORAGE_SUPPORT } from './lib/tokens/storage';
export * from './lib/tokens/storage-serializer';
