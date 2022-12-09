import { useState } from 'react';
import styles from './Checkbox.module.scss';

interface CheckboxProps {
  isChecked: boolean;
  onChecked: any;
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
