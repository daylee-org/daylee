import { useState } from 'react';
import { Stack } from 'components';
import { Timer } from './Timer';
import { PomodoroBoard } from './PomodoroBoard';

export function Pomodoro() {
  const [round, setRound] = useState<number>(0);

  return (
    <Stack
      px="tight"
      vertical
      spacing="normal"
      background="widgetBackgroundColor"
    >
      <Stack center vertical spacing="normal">
        <Timer round={round} setRound={setRound} />
        <PomodoroBoard round={round} />
      </Stack>
    </Stack>
  );
}
