import classNames from 'classnames';
import { ThemeType } from 'providers';
import styles from './Stack.module.scss';

type SpacingType =
  | 'none'
  | 'tight'
  | 'normal'
  | 'loose'
  | string;

interface Props {
  id: string;
  spacing?: SpacingType;
  paddingX?: SpacingType;
  paddingY?: SpacingType;
  center?: boolean;
  vertical?: boolean;
  children?: React.ReactNode;
  length?: string;
  breadth?: string;
  spread?: boolean;
  background?: keyof Omit<ThemeType, 'borderRadius'>;
}

export function Stack({
  id,
  center,
  spread,
  vertical,
  children,
  length = 'auto',
  breadth = 'auto',
  spacing = 'auto',
  paddingX = 'auto',
  paddingY = 'auto',
  background,
}: Props) {
  const classes = classNames(styles.Stack, {
    [styles.vertical]: vertical,
    [styles.center]: center,
    [styles.spread]: spread,
  });

  const backgroundColor = background
    ? `var(--${background})`
    : 'transparent';

  return (
    <div className={styles.Wrapper}>
      <div id={id} className={classes}>
        {children}
      </div>
      <style>{`
        #${id} {
          --margin: ${getSize(spacing)};

          --paddingX: ${getSize(paddingX)};
          --paddingY: ${getSize(paddingY)};

          --breadth: ${breadth};
          --length: ${length};
          --background: ${backgroundColor};
        }
      `}</style>
    </div>
  );

  function getSize(length: SpacingType) {
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
        return length;
    }
  }
}
