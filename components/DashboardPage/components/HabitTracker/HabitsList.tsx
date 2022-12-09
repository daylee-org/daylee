import { useState } from 'react';
import { Button, Stack } from 'components';
import { Habit } from './Habit';

interface Habit {
  label: string;
  days: boolean[];
}

export function HabitsList() {
  const [habitsList, setHabitsList] = useState<Habit[]>([
    {
      label: '',
      days: [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ],
    },
  ]);

  return (
    <Stack vertical>
      <Stack vertical spacing="tight">
        {habitsList.map((habit: Habit, index: number) => (
          <Habit
            key={index}
            label={habit.label}
            days={habit.days}
            onChange={(e: Event) => handleChange(e, index)}
            onChecked={(dayIndex: number) =>
              handleChecked(dayIndex, index)
            }
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
        label: '',
        days: [
          false,
          false,
          false,
          false,
          false,
          false,
          false,
        ],
      },
    ]);
  }

  function handleChange(e: Event, index: number) {
    const target = e.target as HTMLTextAreaElement;
    const newHabitsList = [...habitsList];

    newHabitsList[index].label = target.value;
    setHabitsList(newHabitsList);
  }

  function handleChecked(dayIndex: number, index: number) {
    const newHabitsList = [...habitsList];
    newHabitsList[index].days[dayIndex] =
      !newHabitsList[index].days[dayIndex];

    setHabitsList(newHabitsList);
  }
}
