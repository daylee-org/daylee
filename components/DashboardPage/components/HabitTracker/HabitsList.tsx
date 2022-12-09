import { useState } from 'react';
import { Button, Stack } from 'components';
import { Habit } from './Habit';

interface Habit {
  label: string;
}

export function HabitsList() {
  const [habitsList, setHabitsList] = useState<any>([
    {
      label: 'Habit 1',
    },
  ]);

  function handleChange(e: any) {
    console.log(e.target.value);
    // setHabitsList({ label: e.target.value });
  }

  return (
    <Stack vertical>
      <Stack vertical spacing="tight">
        {habitsList.map((habit: any) => (
          <Habit
            key={habit.label}
            label={habit.label}
            handleChange={handleChange}
          />
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
