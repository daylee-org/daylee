import { Stack } from 'components';
import { Pomodoro } from './Pomodoro/Pomodoro';

export function WidgetsArea() {
  return (
    <Stack
      height="100%"
      width="100%"
      scroll
      // spacing="normal"
      vertical
      py="10px"
      id="widgets"
    >
      <Stack height="100%" width="100%">
        <Pomodoro />
      </Stack>
    </Stack>
  );
}
