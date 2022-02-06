import { Stack, Typography } from 'components';

export function PomodoroBoard({ round }: any) {
  return (
    <Stack
      background="mainBackgroundColor"
      width="100%"
      center
    >
      <Typography type="mediumText">
        round: {round}
      </Typography>
    </Stack>
  );
}
