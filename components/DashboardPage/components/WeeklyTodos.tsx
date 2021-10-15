import {
  Separator,
  Stack,
  Typography,
  Todo,
  Button,
} from 'components';
import { useState } from 'react';
import { useRoutingState } from 'hooks';

export function WeeklyTodos() {
  const {
    get: { week, month, year },
    set,
  } = useRoutingState();

  const [todos, setTodos] = useState([]);
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
        <Stack vertical spacing="tight">
          <Typography type="header5">Monday</Typography>
          <Stack vertical>
            <Todo label="This is a Todo" />
            <Todo label="Thing done" />
            {todos.map((todo) => todo)}
            <Button
              variant="add"
              label="New"
              onClick={handleAddTodo}
            />
          </Stack>
        </Stack>
        <Stack vertical spacing="tight">
          <Typography type="header5">Tuesday</Typography>
          <Stack vertical>
            {todos.map((todo) => todo)}
            <Button
              variant="add"
              label="New"
              onClick={handleAddTodo}
            />
          </Stack>
        </Stack>
        <Stack vertical spacing="tight">
          <Typography type="header5">Wednesday</Typography>
          <Stack vertical>
            {todos.map((todo) => todo)}
            <Button
              variant="add"
              label="New"
              onClick={handleAddTodo}
            />
          </Stack>
        </Stack>
        <Stack vertical spacing="tight">
          <Typography type="header5">Thursday</Typography>
          <Stack vertical>
            {todos.map((todo) => todo)}
            <Button
              variant="add"
              label="New"
              onClick={handleAddTodo}
            />
          </Stack>
        </Stack>
        <Stack vertical spacing="tight">
          <Typography type="header5">Friday</Typography>
          <Stack vertical>
            {todos.map((todo) => todo)}
            <Button
              variant="add"
              label="New"
              onClick={handleAddTodo}
            />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );

  function handleAddTodo() {
    setTodos([...todos, TodoMarkup]);
  }
}
