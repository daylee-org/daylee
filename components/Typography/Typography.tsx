import { ReactChild, ReactChildren } from 'react';
import classnames from 'classnames';

import styles from './Typography.module.scss';

interface Props {
  children: ReactChild | ReactChildren;
  element?: 'h1' | 'h2' | 'h3' | 'p';
  bold?: boolean;
  subdued?: boolean;
  className?: string;
}

export function Typography({
  bold,
  children,
  className,
  element = 'p',
}: Props) {
  const Element = element;
  const classes = classnames(styles.Typography, className, {
    [styles.Bold]: bold,
  });

  return <Element className={classes}>{children}</Element>;
}
