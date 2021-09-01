import { ThemeType } from 'providers';
import styled from 'styled-components';

const Wrapper = styled.div<Props>`
  display: flex;
  flex-direction: row;

  padding: ${(prop) => getSize(prop.py)}
    ${(prop) => getSize(prop.px)}
    ${(prop) => getSize(prop.py)}
    ${(prop) => getSize(prop.px)};

  border-radius: var(--borderRadius);

  background: ${(prop) =>
    getBackgroundColor(prop.background)};

  width: ${(prop) => getSize(prop.width, 'auto')};
  height: ${(prop) => getSize(prop.height, 'auto')};

  & > *:not(:last-child) {
    margin-right: ${(prop) => getSize(prop.spacing)};
  }

  ${(prop) =>
    prop.vertical
      ? `
    flex-direction: column;

    width: ${prop.width};
    height: ${prop.height};

    & > *:not(:last-child) {
      margin-right: 0;
      margin-bottom: ${getSize(prop.spacing)};
    }
    `
      : ``}
  ${(prop) => (prop.center ? `align-items: center;` : ``)}
  ${(prop) =>
    prop.spread ? `justify-content: space-between;` : ``}
`;

type SpacingType =
  | 'none'
  | 'tight'
  | 'normal'
  | 'loose'
  | string;

type Colors = keyof Omit<ThemeType, 'borderRadius'>;

interface Props {
  id: string;
  spacing?: SpacingType;
  px?: SpacingType;
  py?: SpacingType;
  center?: boolean;
  vertical?: boolean;
  children?: React.ReactNode;
  width?: string;
  height?: string;
  spread?: boolean;
  background?: Colors;
}

export function Stack({ children, ...props }: Props) {
  return <Wrapper {...props}>{children}</Wrapper>;
}

function getSize(
  length?: SpacingType,
  defaultValue?: string,
) {
  switch (length) {
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

function getBackgroundColor(background?: Colors) {
  return background
    ? `var(--${background})`
    : 'transparent';
}
