import { ServiceOptions } from '../interfaces/service-options';
import { StorageSerializer } from '../interfaces/storage-serializer';

/**
 * StorageSerializer Guard
 */
export const isSerializer = (value?: unknown): value is StorageSerializer => {
  const checkProperty: keyof StorageSerializer = 'serialize';
  return !!value && !isString(value) && checkProperty in (value as StorageSerializer);
};

/**
 * ServiceOptions Guard
 */
export const isServiceOptions = (value?: unknown): value is ServiceOptions => {
  const checkProperty: keyof ServiceOptions = 'prefix';
  return !!value && !isString(value) && checkProperty in (value as ServiceOptions);
};

/**
 * string Guard
 */
export const isString = (value?: unknown): value is string => {
  return typeof value === 'string';
};
