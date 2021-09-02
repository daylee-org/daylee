import { Dispatch, SetStateAction } from 'react';
import styles from './Input.module.scss';

interface Props {
  label: string;
  value?: string;
  secure?: boolean;
  placeholder?: string;
  onChange?: Dispatch<SetStateAction<string>>;
}

export function Input({
  label,
  value,
  secure,
  onChange,
  placeholder,
}: Props) {
  const type = secure ? 'password' : 'text';

  return (
    <p className={styles.Input}>
      <input
        required
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(event) => onChange?.(event.target.value)}
      />
      <label>{label}</label>
    </p>
  );
}
