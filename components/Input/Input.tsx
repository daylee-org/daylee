import classNames from 'classnames';
import { Dispatch, SetStateAction } from 'react';
import styles from './Input.module.scss';

interface Props {
  label: string;
  value?: string;
  secure?: boolean;
  placeholder?: string;
  fill?: boolean;
  noAutocomplete?: boolean;
  onChange?: Dispatch<SetStateAction<string>>;
}

export function Input({
  label,
  value,
  fill,
  secure,
  onChange,
  placeholder,
  noAutocomplete,
}: Props) {
  const type = secure ? 'password' : 'text';

  const classes = classNames(styles.Input, {
    [styles.fill]: fill,
  });

  return (
    <p className={classes}>
      <input
        autoComplete={noAutocomplete ? 'off' : undefined}
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
