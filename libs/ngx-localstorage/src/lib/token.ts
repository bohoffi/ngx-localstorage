import {ModuleConfig} from './interfaces';
import {InjectionToken} from '@angular/core';

export const ModuleConfigToken = new InjectionToken<ModuleConfig>('moduleConfig');
