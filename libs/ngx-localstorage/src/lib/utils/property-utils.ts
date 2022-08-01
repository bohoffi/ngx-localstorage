/**
 * Gets an objects property based on its path.
 * @param object Object to access
 * @param path Path to the property
 */
export const getPropByPath = (object: unknown, path: string[]): unknown | undefined => {

  const checkProperty = (o: unknown | undefined, key: string): unknown | undefined => typeof o === 'object'
    ? (o as Record<string, unknown>)[key]
    : undefined;

  return path.slice(0).reduce<unknown | undefined>((prev: unknown | undefined, curr: string, _i: number, arr: string[]) => {
    if (prev === undefined) {
      arr.splice(1);
    }
    return checkProperty(prev, curr)
  }, object);
};

/**
* Sets an objects property based on its path.
* @param object Object whose value to set
* @param path Path to the property
* @param value Value to set
* @param falsyTransformer optional transformer handling falsy values
*/
export const setPropByPath = (object: unknown, path: string[], value: unknown, falsyTransformer?: () => unknown): void => {

  const checkProperty = (o: unknown | undefined, key: string): unknown | undefined => typeof o === 'object'
    ? (o as Record<string, unknown>)[key]
    : undefined;

  path.slice(0).reduce<unknown | undefined>((prev: unknown | undefined, curr: string, i: number, arr: string[]) => {
    if (prev === undefined) {
      arr.splice(1);
    }

    // last path segment
    if (i === path.length - 1) {

      (object as Record<string, unknown>)[curr] = (!value || (typeof value === 'string' && value === 'false'))
        && !!falsyTransformer ? falsyTransformer() : value;

      arr.splice(1);
    }

    return checkProperty(prev, curr)
  }, object);
};
