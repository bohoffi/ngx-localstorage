/**
 * Returns an array representation of the input value.
 *
 * @param value - the input value
 * @return array representation of the input value
 */
export function valuePathAttribute(value: unknown): string[] {
  if (Array.isArray(value)) {
    return value;
  } else if (value != null) {
    return value.toString().split(',');
  } else {
    return [];
  }
}
