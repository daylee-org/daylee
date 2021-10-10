import classNames from 'classnames';
import { Typography } from '../Typography/Typography';
import { AddButton } from './Icons/AddButton';
import { Chevron } from './Icons/Chevron';
import Link from 'next/link';

import styles from './Button.module.scss';
import { KeyboardEvent, ReactNode } from 'react';

interface Props {
  label: string;
  variant?:
    | 'primary'
    | 'secondary'
    | 'add'
    | 'collapse'
    | 'nav'
    | 'side-collapse';
  underline?: boolean;
  collapsed?: boolean;
  onToggleCollapse?(): void;
  onClick?(): void;
  tight?: boolean;
  linkTo?: string;
  disabled?: boolean;
  fontSize?: 'big' | 'medium' | 'small';
  children?: ReactNode;
  thin?: boolean;
  selected?: boolean;
  icon?: ReactNode;
}

export function Button({
  label,
  tight,
  onClick,
  collapsed,
  underline,
  disabled,
  linkTo,
  variant = 'primary',
  fontSize = 'big',
  onToggleCollapse,
  selected,
  children,
  thin,
  icon,
}: Props) {
  const isTertiary =
    variant === 'add' ||
    variant === 'collapse' ||
    variant === 'nav';

  const classes = classNames(styles.Button, {
    [styles.rotate]: collapsed,
    [styles.primary]: variant === 'primary',
    [styles.secondary]: variant === 'secondary',
    [styles.tertiary]: isTertiary,
    [styles.tight]: tight,
    [styles.disabled]: disabled,
    [styles.big]: fontSize === 'big',
    [styles.medium]: fontSize === 'medium',
    [styles.small]: fontSize === 'small',
    [styles.thin]: thin,
    [styles.selected]: selected,
  });

  const childClasses = classNames(styles.Child, {
    [styles.collapsed]: collapsed,
  });

  const childrendMarkup =
    children && collapsed ? (
      <div className={childClasses}>{children}</div>
    ) : null;

  const buttonMarkup = (
    <div>
      <button
        disabled={disabled}
        className={classes}
        onClick={onClick}
        onKeyPress={handleKeyPress}
      >
        {getIcon()}
        <Typography underline={underline}>
          {label}
        </Typography>
      </button>
      {childrendMarkup}
    </div>
  );

  return linkTo ? (
    <Link href={linkTo}>{buttonMarkup}</Link>
  ) : (
    buttonMarkup
  );

  function getIcon() {
    if (icon != null) {
      return icon;
    }

    switch (variant) {
      case 'add':
        return <AddButton />;
      case 'collapse':
        return <Chevron onClick={handleToggleCollapse} />;
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

  function handleToggleCollapse(e: any) {
    if (onToggleCollapse != null) {
      e.stopPropagation();
      onToggleCollapse();
    }
  }
}
