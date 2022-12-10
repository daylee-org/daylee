import { Stack, Typography } from 'components';

const weekDays = [
  'Sun',
  'Mon',
  'Tue',
  'Wed',
  'Thu',
  'Fri',
  'Sat',
];

export function Header() {
  let orderedWeekdays: string[] = [];
  setOrderedWeekDays();

  const weekDaysMarkup = orderedWeekdays.map((weekDay) => (
    <Typography type="bigText" key={weekDay}>
      {weekDay}
    </Typography>
  ));

  return (
    <Stack>
      <Stack width="25%"></Stack>
      <Stack width="75%">
        <Stack width="100%" spreadEvenly>
          {weekDaysMarkup}
        </Stack>
      </Stack>
    </Stack>
  );

  function setOrderedWeekDays() {
    const weekdayNumber = new Date().getDay();
    let currentWeekDayNumber = weekdayNumber;

    for (let i = 0; i < weekDays.length; i++) {
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
