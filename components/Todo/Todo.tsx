import { Typography } from '../Typography/Typography';
import styles from './Todo.module.scss';

interface Props {
  label: string;
}

export function Todo({ label }: Props) {
  return (
    <label className={styles.Todo}>
      <input type="checkbox" className={styles.Checkbox} />
      <Typography type="bigText">{label}</Typography>
    </label>
  );
}
