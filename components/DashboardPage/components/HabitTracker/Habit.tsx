import { Stack, Typography } from 'components';

interface HabitProps {
  label: string;
}

export function Habit({ label }: HabitProps) {
  return (
    <Stack width="100%" spacing="tight">
      <Stack width="30%">
        <Typography type="mediumText">{label}</Typography>
      </Stack>
      <Stack width="70%">ok</Stack>
    </Stack>
  );
}
