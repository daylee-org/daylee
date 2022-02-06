import { useState } from 'react';
import { Stack, Typography } from 'components';
import { Timer } from './Timer';
import { PomodoroBoard } from './PomodoroBoard';

export function Pomodoro() {
  const [round, setRound] = useState<number>(0);
  console.log(round);

  return (
    <Stack
      width="250px"
      height="420px"
      py="normal"
      px="tight"
      vertical
      spacing="normal"
      background="widgetBackgroundColor"
    >
      <Typography type="header5">Pomodoro</Typography>
      <Stack center vertical spacing="normal">
        <Timer round={round} setRound={setRound} />
        <PomodoroBoard round={round} />
      </Stack>
    </Stack>
  );
}
