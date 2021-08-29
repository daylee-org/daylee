import { ReactChild, ReactChildren } from 'react';
import classnames from 'classnames';

import styles from './Typography.module.scss';

interface Props {
  children: ReactChild | ReactChildren;
  element?: 'h1' | 'h2' | 'h3' | 'p';
  bold?: boolean;
  subdued?: boolean;
  underline?: boolean;
  className?: string;
}

export function Typography({
  bold,
  children,
  className,
  underline,
  element = 'p',
}: Props) {
  const Element = element;
  const classes = classnames(styles.Typography, className, {
    [styles.bold]: bold,
    [styles.underline]: underline,
  });

  return <Element className={classes}>{children}</Element>;
}
