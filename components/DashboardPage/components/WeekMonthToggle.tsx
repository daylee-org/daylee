import { Stack, Button } from 'components';
import { useRouting } from 'hooks';

export function WeekMonthToggle() {
  const {
    get: { week: weekFromUrl },
  } = useRouting();

  const isWeekSelected = weekFromUrl !== undefined;

  return (
    <Stack spread center width="80%" px="18rem" py="tight">
      <Button
        selected={isWeekSelected}
        label="Week"
        variant="nav"
      />
      <Button
        selected={!isWeekSelected}
        label="Month"
        variant="nav"
      />
    </Stack>
  );
}
