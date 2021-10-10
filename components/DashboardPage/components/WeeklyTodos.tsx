import {
  Separator,
  Stack,
  Typography,
  Todo,
} from 'components';

export function WeeklyTodos() {
  return (
    <Stack
      width="20rem"
      height="100%"
      noRadius
      id="todos"
      vertical
      spacing="normal"
    >
      <Separator
        thin
        color="secondaryTextColor"
        label="Week 1"
      />
      <Typography type="header5">Monday</Typography>
      <Todo />
      <Typography type="header5">Tuesday</Typography>
      <Typography type="header5">Wednesday</Typography>
      <Typography type="header5">Friday</Typography>
      <Separator
        thin
        color="secondaryTextColor"
        label="Week 2"
      />
      <Typography>Monday</Typography>
    </Stack>
  );
}
