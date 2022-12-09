import { Stack, Typography } from 'components';
import { useEffect } from 'react';

export function Header() {
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
    <Stack>
      <Stack width="25%"></Stack>
      <Stack width="75%">
        <Stack width="100%" spreadEvenly>
          {orderedWeekdays.map((weekDay) => (
            <Typography type="bigText" key={weekDay}>
              {weekDay}
            </Typography>
          ))}
        </Stack>
      </Stack>
    </Stack>
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
