import { useState } from 'react';
import { Button, Stack } from 'components';
import { Habit } from './Habit';

interface Habit {
  label: string;
}

export function HabitsList() {
  const [habitsList, setHabitsList] = useState<Habit[]>([
    {
      label: 'Habit 1',
    },
  ]);

  return (
    <Stack vertical>
      <Stack vertical spacing="tight">
        {habitsList.map((habit) => (
          <Habit key={habit.label} label={habit.label} />
        ))}
      </Stack>
      <Button
        fontSize="medium"
        label="New"
        variant="add"
        onClick={handleAddHabit}
      ></Button>
    </Stack>
  );

  function handleAddHabit() {
    setHabitsList([
      ...habitsList,
      {
        label: 'New Habit',
      },
    ]);
  }
}
