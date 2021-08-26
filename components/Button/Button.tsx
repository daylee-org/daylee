import classNames from 'classnames';
import { ReactChild, ReactChildren } from 'react';
import { Typography } from '../Typography/Typography';

import styles from './Button.module.scss';

interface Props {
  children: ReactChild | ReactChildren;
  onClick?(): void;
}

export function Button({ onClick, children }: Props) {
  const classes = classNames(styles.Button);

  return (
    <button className={classes} onClick={onClick}>
      <Typography element="h3">{children}</Typography>
    </button>
  );
}
