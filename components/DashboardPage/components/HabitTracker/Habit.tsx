import { Stack, Typography } from 'components';
import { Checkbox } from './Checkbox';
import styles from './Habit.module.scss';

interface HabitProps {
  label: string;
}

export function Habit({ label }: HabitProps) {
  return (
    <Stack>
      <Stack width="25%">
        <input
          type="text"
          placeholder="Add a habit"
          className={styles.Text}
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
