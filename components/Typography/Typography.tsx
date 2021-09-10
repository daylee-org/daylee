import {
  ReactChild,
  ReactChildren,
  ReactNode,
} from 'react';
import classnames from 'classnames';

import styles from './Typography.module.scss';

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
}: Props) {
  const Element = element;
  const classes = classnames(styles.Typography, className, {
    [styles.bold]: bold,
    [styles.underline]: underline,
    [styles.wrap]: wrap,
    [styles.thin]: thin,
    [styles.center]: center,
    [styles.danger]: danger,
  });

  return <Element className={classes}>{children}</Element>;
}
