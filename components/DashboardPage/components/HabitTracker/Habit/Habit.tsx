import { Stack, Typography } from 'components';
import { Checkbox } from '../Checkbox';
import styles from './Habit.module.scss';

interface HabitProps {
  label: string;
  handleChange: any;
}

export function Habit({ label, handleChange }: HabitProps) {
  return (
    <Stack>
      <Stack width="25%">
        <input
          type="text"
          placeholder="Add a habit"
          className={styles.Text}
          onChange={handleChange}
          value={label}
        />
      </Stack>
      <Stack width="75%">
        <Stack width="100%" spreadEvenly>
          <Checkbox />
          <Checkbox />
          <Checkbox />
          <Checkbox />
          <Checkbox />
          <Checkbox />
          <Checkbox />
        </Stack>
      </Stack>
    </Stack>
  );
}
