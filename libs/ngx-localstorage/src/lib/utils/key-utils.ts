/**
 * Constructs the storage key based on a prefix - if given - and the key itself
 */
export const constructKey = (key: string, prefix?: string, configuredPrefix?: string, delimiter?: string): string => {
  const prefixToUse = prefix || configuredPrefix;
  if (prefixToUse) {
    return `${prefixToUse}${delimiter || ''}${key}`;
  }
  return key;
}
