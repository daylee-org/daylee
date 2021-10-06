export type SpacingType =
  | 'none'
  | 'tight'
  | 'normal'
  | 'loose'
  | 'extra-loose'
  | string;

export function getSize(
  length?: SpacingType,
  defaultValue?: string,
) {
  switch (length) {
    case 'extra-loose':
      return '100px';
    case 'loose':
      return '73px';
    case 'normal':
      return '32px';
    case 'none':
      return '0px';
    case 'tight':
      return '10px';
    default:
      return length ?? defaultValue ?? '0px';
  }
}
