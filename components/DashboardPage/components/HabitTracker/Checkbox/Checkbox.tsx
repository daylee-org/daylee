import { ChangeEventHandler, useState } from 'react';
import styles from './Checkbox.module.scss';

interface CheckboxProps {
  isChecked: boolean;
  onChecked: ChangeEventHandler<HTMLInputElement>;
}

export function Checkbox({
  isChecked,
  onChecked,
}: CheckboxProps) {
  return (
    <input
      className={styles.Checkbox}
      type="checkbox"
      checked={isChecked}
      onChange={onChecked}
    />
  );
}
