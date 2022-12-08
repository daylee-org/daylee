import { Stack } from 'components';
import { HabitsList } from './HabitsList';
import { Header } from './Header';

export function HabitTracker() {
  return (
    <Stack vertical scroll>
      <Header />
      <HabitsList />
    </Stack>
  );
}
