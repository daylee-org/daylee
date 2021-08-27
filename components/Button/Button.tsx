import classNames from 'classnames';
import { ReactChild, ReactChildren } from 'react';
import { Typography } from '../Typography/Typography';

import styles from './Button.module.scss';

interface Props {
  children: ReactChild | ReactChildren;
  variant?: 'primary' | 'secondary' | 'tertiary';
  pressed?: boolean;
  onClick?(): void;
}

export function Button({
  onClick,
  children,
  pressed,
  variant = 'primary',
}: Props) {
  const classes = classNames(styles.Button, {
    [styles.pressed]: pressed,
    [styles.primary]: variant === 'primary',
    [styles.secondary]: variant === 'secondary',
    [styles.tertiary]: variant === 'tertiary',
  });

  return (
    <button className={classes} onClick={onClick}>
      <Typography element="h3">{children}</Typography>
    </button>
  );
}
