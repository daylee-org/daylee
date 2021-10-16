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

  // const [day, setDay] = useState('');

  // days.map((day) => (
  //   const [todos{day}, setTodos{day}] = useState([]);
  // )

  const [todos0, setTodos0] = useState([]);
  const [todos1, setTodos1] = useState([]);
  const [todos2, setTodos2] = useState([]);
  const [todos3, setTodos3] = useState([]);
  const [todos4, setTodos4] = useState([]);
  const [todos5, setTodos5] = useState([]);
  const [todos6, setTodos6] = useState([]);

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
          <Todo label="This is a Todo" />
          <Todo label="Thing done" />
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
