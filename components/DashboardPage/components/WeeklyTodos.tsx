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
      scroll
      spacing="normal"
    >
      <div></div>
      <Stack vertical spacing="20px">
        <Separator
          thin
          color="secondaryTextColor"
          label="Week 1"
        />
        <Stack vertical spacing="tight">
          <Typography type="header5">Monday</Typography>
          <Stack vertical>
            <Todo label="This is a Todo" />
            <Todo label="Thing done" />
          </Stack>
        </Stack>
        <Typography type="header5">Tuesday</Typography>
        <Typography type="header5">Wednesday</Typography>
        <Typography type="header5">Friday</Typography>
      </Stack>
      <Stack vertical spacing="20px">
        <Separator
          thin
          color="secondaryTextColor"
          label="Week 2"
        />
        <Typography type="header5">Monday</Typography>
        <Stack vertical>
          <Todo label="This is a Todo" />
          <Todo label="Thing done" />
        </Stack>
      </Stack>
      <Stack vertical spacing="20px">
        <Separator
          thin
          color="secondaryTextColor"
          label="Week 2"
        />
        <Typography type="header5">Monday</Typography>
        <Stack vertical>
          <Todo label="This is a Todo" />
          <Todo label="Thing done" />
        </Stack>
      </Stack>
      <Stack vertical spacing="20px">
        <Separator
          thin
          color="secondaryTextColor"
          label="Week 2"
        />
        <Typography type="header5">Monday</Typography>
        <Stack vertical>
          <Todo label="This is a Todo" />
          <Todo label="Thing done" />
        </Stack>
      </Stack>
      <Stack vertical spacing="20px">
        <Separator
          thin
          color="secondaryTextColor"
          label="Week 2"
        />
        <Typography type="header5">Monday</Typography>
        <Stack vertical>
          <Todo label="This is a Todo" />
          <Todo label="Thing done" />
        </Stack>
      </Stack>
      <Stack vertical spacing="20px">
        <Separator
          thin
          color="secondaryTextColor"
          label="Week 2"
        />
        <Typography type="header5">Monday</Typography>
        <Stack vertical>
          <Todo label="This is a Todo" />
          <Todo label="Thing done" />
        </Stack>
      </Stack>
    </Stack>
  );
}
