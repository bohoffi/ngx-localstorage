import {ModuleConfig} from '../../../../src/app/modules/ngx-localstorage/lib/interfaces';
import {InjectionToken} from '@angular/core';

export const ModuleConfigToken = new InjectionToken<ModuleConfig>('moduleConfig');
