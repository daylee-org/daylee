import { Dispatch, SetStateAction } from 'react';
import styles from './Input.module.scss';

interface Props {
  label: string;
  value?: string;
  onChange?: Dispatch<SetStateAction<string>>;
}

export function Input({ label, onChange, value }: Props) {
  return (
    <p className={styles.Input}>
      <input
        required
        type="text"
        value={value}
        onChange={(event) => onChange?.(event.target.value)}
      />
      <label>{label}</label>
    </p>
  );
}
