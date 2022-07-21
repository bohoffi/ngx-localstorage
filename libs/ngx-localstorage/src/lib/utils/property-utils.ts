/**
 * Gets an objects property based on its path.
 * @param path Path to the property
 * @param object Object to access
 */
export const getProperty = (path: string[], object: any) =>
  // eslint-disable-next-line no-extra-boolean-cast
  path.reduce((obj: any, p: any) => (!!obj) ? obj[p] : null, object);

/**
* Sets an objects property based on its path.
* @param path Path to the property
* @param value Value to set
* @param object Object whose value to set
* @param falsyTransformer optional transformer handling falsy values
*/
export const setProperty = (path: string[] | string, value: any, object: any, falsyTransformer?: () => any) => {
  const lastKeyIndex = path.length - 1;
  for (let i = 0; i < lastKeyIndex; ++i) {
    const key = path[i];
    if (!(key in object)) {
      object[key] = {};
    }
    object = object[key];
  }
  object[path[lastKeyIndex]] = (!value || (typeof value === 'string' && value === 'false'))
    && !!falsyTransformer ? falsyTransformer() : value;
};
