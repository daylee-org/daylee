import { Stack } from 'components';
import { ChangeEvent } from 'react';
import { Checkbox } from '../Checkbox';
import styles from './Habit.module.scss';

interface HabitProps {
  label: string;
  days: boolean[];
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onChecked: (dayIndex: number) => void;
}

export function Habit({
  label,
  days,
  onChange,
  onChecked,
}: HabitProps) {
  const habitInputMarkup = (
    <input
      type="text"
      placeholder="Add a habit"
      className={styles.Text}
      onChange={onChange}
      value={label}
    />
  );

  const habitCheckboxesMarkup = days.map(
    (isChecked: boolean, dayIndex: number) => (
      <Checkbox
        key={dayIndex}
        isChecked={isChecked}
        onChecked={() => onChecked(dayIndex)}
      />
    ),
  );
  return (
    <Stack>
      <Stack width="25%">{habitInputMarkup}</Stack>
      <Stack width="75%">
        <Stack width="100%" spreadEvenly>
          {habitCheckboxesMarkup}
        </Stack>
      </Stack>
    </Stack>
  );
}
