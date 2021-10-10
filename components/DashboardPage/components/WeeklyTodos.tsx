import { Separator, Stack, Typography } from 'components';

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
        color="secondaryTextColor"
        label="Week 1"
      />
      <Typography>Monday</Typography>
      <Typography>Tuesday</Typography>
      <Typography>Wednesday</Typography>
      <Typography>Friday</Typography>
      <Separator
        color="secondaryTextColor"
        label="Week 2"
      />
      <Typography>Monday</Typography>
    </Stack>
  );
}
