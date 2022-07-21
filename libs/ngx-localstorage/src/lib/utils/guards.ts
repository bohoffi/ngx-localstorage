import { StorageSerializer } from '../interfaces/storage-serializer';

/**
 * StorageSerializer Guard
 */
export const isSerializer = (prefixOrSerializer?: unknown): prefixOrSerializer is StorageSerializer => {
  return !!prefixOrSerializer && (prefixOrSerializer as StorageSerializer).serialize !== undefined;
}
