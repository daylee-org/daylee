import { Stack, Typography, Separator } from 'components';

export function PomodoroBoard({ round }: any) {
  return (
    <Stack width="100%" center spread px="normal">
      <Stack vertical center spacing="tight">
        <Typography type="bigText" disabled uppercase bold>
          Round
        </Typography>
        <div style={{ alignItems: 'end' }}>
          <Typography type="header3">{round}</Typography>
          <Typography type="bigText">/4</Typography>
        </div>
      </Stack>
      <Separator color="secondaryTextColor" vertical thin />
      <Stack vertical center spacing="tight">
        <Typography type="bigText" disabled uppercase bold>
          Goal
        </Typography>
        <div style={{ alignItems: 'end' }}>
          <Typography type="header3">{round}</Typography>
          <Typography type="bigText">/12</Typography>
        </div>
      </Stack>
    </Stack>
  );
}
