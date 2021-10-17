import {
  Separator,
  Stack,
  Typography,
  Todo,
  Button,
  MessageBox,
} from 'components';
import { useState, useEffect } from 'react';
import { useRoutingState } from 'hooks';

const days = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Friday',
  'Saturday',
  'Sunday',
];

export function WeeklyTodos() {
  const {
    get: { week, month, year },
    set,
  } = useRoutingState();

  return (
    <Stack
      width="23rem"
      height="100%"
      noRadius
      id="todos"
      vertical
      scroll
      spacing="normal"
      py="10px"
    >
      <Stack vertical spacing="20px">
        <Separator
          thin
          color="secondaryTextColor"
          label={`Week ${week}`}
        />
        {days.map((day) => (
          <DailyTodo day={day} key={day} />
        ))}
      </Stack>
    </Stack>
  );
}

interface DailyTodosProps {
  day: string;
}

function DailyTodo({ day }: DailyTodosProps) {
  const [todos, setTodos] = useState([]);

  return (
    <Stack vertical spacing="tight" key={day}>
      <Typography type="header5">{day}</Typography>
      <Stack vertical>
        <Todo handleAddTodo={handleAddTodo} />
        {todos.map(() => (
          <Todo handleAddTodo={handleAddTodo} />
        ))}
        <Button
          variant="add"
          fontSize="medium"
          label="New"
          onClick={handleAddTodo}
        />
        <Separator
          thin
          color="disabledTextColor"
          padding="loose"
        />
      </Stack>
      <DailyMessage />
    </Stack>
  );

  function handleAddTodo(todo) {
    setTodos([...todos, todo]);
  }
}

function DailyMessage() {
  const [displayMessage, setDisplayMessage] =
    useState(false);
  console.log(displayMessage);

  return displayMessage ? (
    <MessageBox placeholder="I am grateful for..." />
  ) : (
    <Button
      variant="add"
      fontSize="medium"
      label="Add something you are grateful for"
      onClick={() => setDisplayMessage(true)}
    />
  );
}
