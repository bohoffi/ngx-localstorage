import {ModuleConfig} from './interfaces';
/**
 * Created by bohoffi on 04.04.2017.
 */
export const getProperty = (path: any, object: any) =>
    path.reduce((xs: any, x: any) => (xs && xs[x]) ? xs[x] : null, object);

export const setProperty = (path: Array<string> | string, value: any, object: any) => {
    const lastKeyIndex = path.length - 1;
    for (let i = 0; i < lastKeyIndex; ++i) {
        const key = path[i];
        if (!(key in object)) {
            object[key] = {};
        }
        object = object[key];
    }
    object[path[lastKeyIndex]] = value;
};

export const defaultConfig: any = {
    allowNull: true,
    prefix: 'ngx_local_storage'
};
