import { EnvironmentProviders, makeEnvironmentProviders, Provider, Type } from '@angular/core';
import { NgxLocalstorageConfiguration } from './interfaces/storage-configuration';
import { StorageSerializer } from './interfaces/storage-serializer';
import { NGX_LOCAL_STORAGE_CONFIG } from './tokens/storage-config';
import { NGX_LOCAL_STORAGE_SERIALIZER } from './tokens/storage-serializer';

enum FeatureKind {
  Serializer
}

/**
 * @docs-private
 */
export interface NgxLocalstorageFeature<Kind extends FeatureKind> {
  kind: Kind;
  providers: Provider[];
}

/**
 * @docs-private
 */
export type NgxLocalStorageFeatures = SerializerFeature;

/**
 * Provides the basic configuration and optional additional features.
 * @param configuration configuration used by the service and directive
 * @param features optional features; e.g. a custom serializer
 * @returns providers used by `ngx-localstorage`
 */
export const provideNgxLocalstorage = (
  configuration?: NgxLocalstorageConfiguration,
  ...features: NgxLocalStorageFeatures[]
): EnvironmentProviders => {
  if (features?.filter(feature => feature.kind === FeatureKind.Serializer)?.length > 1) {
    throw new Error('Only one serializer feature is allowed!');
  }

  return makeEnvironmentProviders([
    {
      provide: NGX_LOCAL_STORAGE_CONFIG,
      useValue: configuration
    },
    features?.map(feature => feature.providers)
  ]);
};

/**
 * @docs-private
 */
export type SerializerFeature = NgxLocalstorageFeature<FeatureKind.Serializer>;

/**
 * Provides a custom serializer.
 */
export const withSerializer = (serializer: Type<StorageSerializer>): SerializerFeature => ({
  kind: FeatureKind.Serializer,
  providers: [
    {
      provide: NGX_LOCAL_STORAGE_SERIALIZER,
      useClass: serializer
    }
  ]
});
