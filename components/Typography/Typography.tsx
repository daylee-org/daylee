import {
  ReactChild,
  ReactChildren,
  ReactNode,
} from 'react';
import classnames from 'classnames';

import styles from './Typography.module.scss';

type TypographyType =
  | 'header1'
  | 'header2'
  | 'header3'
  | 'header4'
  | 'header5'
  | 'bigCaption'
  | 'mediumCaption'
  | 'smallCaption'
  | 'bigText'
  | 'mediumText'
  | 'smallText';
interface Props {
  children: ReactNode;
  element?: 'h1' | 'h2' | 'h3' | 'p';
  bold?: boolean;
  subdued?: boolean;
  underline?: boolean;
  className?: string;
  wrap?: boolean;
  thin?: boolean;
  center?: boolean;
  danger?: boolean;

  type?: TypographyType;
}

export function Typography({
  bold,
  wrap,
  thin,
  danger,
  center,
  children,
  className,
  underline,
  element = 'p',

  type,
}: Props) {
  const Element = getElement(type);

  const classes = classnames(styles.Typography, className, {
    [styles.bold]: bold,
    [styles.underline]: underline,
    [styles.wrap]: wrap,
    [styles.thin]: thin,
    [styles.center]: center,
    [styles.danger]: danger,
    [styles.header1]: type === 'header1',
    [styles.header2]: type === 'header2',
    [styles.header3]: type === 'header3',
    [styles.header4]: type === 'header4',
    [styles.header5]: type === 'header5',
    [styles.bigText]: type === 'bigText',
  });

  return <Element className={classes}>{children}</Element>;

  function getElement(type?: TypographyType) {
    switch (type) {
      case 'header1':
        return 'h1';
      default:
        return 'p';
    }
  }
}
