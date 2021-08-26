import { ReactChild, ReactChildren } from 'react';
import styles from './Typography.module.scss';
import classnames from 'classnames';

interface Props {
  children: ReactChild | ReactChildren;
  element: 'h1' | 'h2' | 'h3' | 'p';
  bold?: boolean;
  subdued?: boolean;
}

export function Typography({
  children,
  bold,
  element,
}: Props) {
  const Element = element;
  const classes = classnames(styles.Typography, {
    [styles.Bold]: bold,
  });

  return <Element className={classes}>{children}</Element>;
}
