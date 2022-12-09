import { EnvironmentProviders, makeEnvironmentProviders } from '@angular/core';
import { NgxLocalstorageConfiguration } from '../interfaces/storage-configuration';
import { NGX_LOCAL_STORAGE_CONFIG } from '../tokens/storage-config';

export const provideNgxLocalstorage = (configuration?: NgxLocalstorageConfiguration): EnvironmentProviders => {
    return makeEnvironmentProviders([
        {
            provide: NGX_LOCAL_STORAGE_CONFIG,
            useValue: configuration
        }
    ]);
};
