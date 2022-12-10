import { Stack, Typography } from 'components';
import {
  ChangeEvent,
  ChangeEventHandler,
  useState,
} from 'react';
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
  return (
    <Stack>
      <Stack width="25%">
        <input
          type="text"
          placeholder="Add a habit"
          className={styles.Text}
          onChange={onChange}
          value={label}
        />
      </Stack>
      <Stack width="75%">
        <Stack width="100%" spreadEvenly>
          {days.map(
            (isChecked: boolean, dayIndex: number) => (
              <Checkbox
                key={dayIndex}
                isChecked={isChecked}
                onChecked={() => onChecked(dayIndex)}
              />
            ),
          )}
        </Stack>
      </Stack>
    </Stack>
  );
}
