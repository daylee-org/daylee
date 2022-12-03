import { Stack, Typography } from 'components';

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
        <Stack width="25%">ok</Stack>
        <Stack width="75%">
          <Stack
            width="100%"
            spread
            background="dangerTextColor"
          >
            {orderedWeekdays.map((weekDay) => (
              <Typography key={weekDay}>
                {weekDay}
              </Typography>
            ))}
          </Stack>
        </Stack>
      </Stack>
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
