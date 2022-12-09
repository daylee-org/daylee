import { useState } from 'react';
import styles from './Checkbox.module.scss';

export function Checkbox() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <input
      className={styles.Checkbox}
      type="checkbox"
      checked={isChecked}
      onChange={handleChange}
    />
  );

  function handleChange() {
    setIsChecked((prevState) => !prevState);
  }
}
