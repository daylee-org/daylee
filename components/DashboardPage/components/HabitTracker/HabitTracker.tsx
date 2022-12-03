import { Stack, Typography } from 'components';
import { HabitsList } from './HabitsList';

export function HabitTracker() {
  let orderedWeekdays: string[] = [];

  const weekDays = [
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat',
  ];

  setOrderedWeekDays();

  return (
    <>
      <Stack spacing="tight">
        <Stack width="30%"></Stack>
        <Stack width="70%">
          <Stack width="100%" spread>
            {orderedWeekdays.map((weekDay) => (
              <Typography type="bigText" key={weekDay}>
                {weekDay}
              </Typography>
            ))}
          </Stack>
        </Stack>
      </Stack>
      <HabitsList />
    </>
  );

  function setOrderedWeekDays() {
    const weekdayNumber = new Date().getDay();
    let currentWeekDayNumber = weekdayNumber;

    for (let i = 0; i < weekDays.length; i++) {
      console.log(orderedWeekdays);
      let currentweekDay = weekDays[currentWeekDayNumber];

      orderedWeekdays = [
        ...orderedWeekdays,
        currentweekDay,
      ];

      currentWeekDayNumber < 6
        ? currentWeekDayNumber++
        : (currentWeekDayNumber = 0);
    }
  }
}
