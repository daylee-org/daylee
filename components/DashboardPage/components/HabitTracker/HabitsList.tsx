import { useState } from 'react';
import { Button, Stack } from 'components';
import { Habit } from './Habit';

interface Habit {
  id: number;
  label: string;
}

export function HabitsList() {
  const [habitsList, setHabitsList] = useState<Habit[]>([
    {
      id: 1,
      label: 'Habit 1',
    },
  ]);

  return (
    <Stack vertical>
      <Stack>
        {habitsList.map((habit) => (
          <Habit key={habit.id} label={habit.label} />
        ))}
      </Stack>
      <Button
        fontSize="medium"
        label="New"
        variant="add"
      ></Button>
    </Stack>
  );
}
