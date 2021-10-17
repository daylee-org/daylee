import {
  Separator,
  Stack,
  Typography,
  Todo,
  Button,
} from 'components';
import { useState, useEffect } from 'react';
import { useRoutingState } from 'hooks';

export function WeeklyTodos() {
  const {
    get: { week, month, year },
    set,
  } = useRoutingState();

  const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  const TodoMarkup = <Todo label="New Todo" />;

  return (
    <Stack
      width="20rem"
      height="100%"
      noRadius
      id="todos"
      vertical
      scroll
      spacing="normal"
      px="5px"
    >
      <div></div>
      <Stack vertical spacing="20px">
        <Separator
          thin
          color="secondaryTextColor"
          label={`Week ${week}`}
        />
        {days.map((day) => (
          <DayTodo day={day} key={day} />
        ))}
      </Stack>
    </Stack>
  );

  interface DayTodosProps {
    day: string;
  }

  function DayTodo({ day }: DayTodosProps) {
    const [todos, setTodos] = useState([]);

    return (
      <Stack vertical spacing="tight" key={day}>
        <Typography type="header5">{day}</Typography>
        <Stack vertical>
          <Todo handleAddTodo={handleAddTodo} />
          {todos.map(() => TodoMarkup)}
          <Button
            variant="add"
            label="New"
            onClick={handleAddTodo}
          />
        </Stack>
      </Stack>
    );

    function handleAddTodo(todo) {
      setTodos([...todos, todo]);
    }
  }
}
