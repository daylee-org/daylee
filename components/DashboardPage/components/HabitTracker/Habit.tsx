import { Stack, Typography } from 'components';
import { Checkbox } from './Checkbox';
import styles from './Habit.module.scss';

interface HabitProps {
  label: string;
}

export function Habit({ label }: HabitProps) {
  return (
    <Stack width="100%" spacing="tight">
      <Stack width="30%">
        <input
          type="text"
          placeholder="Add a habit"
          className={styles.Text}
        />
      </Stack>
      <Stack width="70%">
        <Stack width="100%" spread>
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
