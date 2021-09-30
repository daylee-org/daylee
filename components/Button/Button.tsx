import classNames from 'classnames';
import { Typography } from '../Typography/Typography';
import { AddButton } from './Icons/AddButton';
import { Chevron } from './Icons/Chevron';
import Link from 'next/link';

import styles from './Button.module.scss';
import { KeyboardEvent } from 'react';

interface Props {
  label: string;
  variant?: 'primary' | 'secondary' | 'add' | 'collapse';
  underline?: boolean;
  selected?: boolean;
  onClick?(): void;
  tight?: boolean;
  linkTo?: string;
  disabled?: boolean;
}

export function Button({
  label,
  tight,
  onClick,
  selected,
  underline,
  disabled,
  linkTo,
  variant = 'primary',
}: Props) {
  const isTertiary =
    variant === 'add' || variant === 'collapse';

  const classes = classNames(styles.Button, {
    [styles.rotate]: selected,
    [styles.primary]: variant === 'primary',
    [styles.secondary]: variant === 'secondary',
    [styles.tertiary]: isTertiary,
    [styles.tertiary]: isTertiary,
    [styles.tight]: tight,
    [styles.disabled]: disabled,
  });

  const buttonMarkup = (
    <button
      disabled={disabled}
      className={classes}
      onClick={onClick}
      onKeyPress={handleKeyPress}
    >
      {getIcon()}
      <Typography underline={underline}>{label}</Typography>
    </button>
  );

  return linkTo ? (
    <Link href={linkTo}>{buttonMarkup}</Link>
  ) : (
    buttonMarkup
  );

  function getIcon() {
    switch (variant) {
      case 'add':
        return <AddButton />;
      case 'collapse':
        return <Chevron />;
      default:
        return null;
    }
  }

  function handleKeyPress(
    event: KeyboardEvent<HTMLButtonElement>,
  ) {
    if (onClick && event.keyCode === 13) {
      onClick();
    }
  }
}
