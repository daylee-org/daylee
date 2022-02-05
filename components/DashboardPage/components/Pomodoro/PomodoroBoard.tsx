import { Stack, Typography } from 'components';

export function PomodoroBoard({ round }: any) {
  return (
    <Stack background="mainBackgroundColor">
      <Typography type="header5">Pomodoro Board</Typography>
      <p>round: {round}</p>
    </Stack>
  );
}
