import { ThemeColors } from 'providers';
import styled from 'styled-components';

const Wrapper = styled.div<Props>`
  display: flex;
  flex-direction: row;

  padding: ${(prop) => getSize(prop.py)}
    ${(prop) => getSize(prop.px)}
    ${(prop) => getSize(prop.py)}
    ${(prop) => getSize(prop.px)};

  box-shadow: ${(props) =>
    props.shadow ? 'var(--baseBoxShadow)' : 'none'};

  border-radius: ${(props) =>
    props.noRadius ? '0px' : ' var(--borderRadius)'};

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
  | 'extra-loose'
  | string;

interface Props {
  id?: string;
  noRadius?: boolean;
  spacing?: SpacingType;
  px?: SpacingType;
  py?: SpacingType;
  center?: boolean;
  vertical?: boolean;
  children?: React.ReactNode;
  width?: string;
  height?: string;
  spread?: boolean;
  shadow?: boolean;
  background?: ThemeColors;
}

export function Stack({ children, id, ...props }: Props) {
  return (
    <Wrapper id={id} {...props}>
      {children}
    </Wrapper>
  );
}

function getSize(
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

function getBackgroundColor(background?: ThemeColors) {
  return background
    ? `var(--${background})`
    : 'transparent';
}
