import { useState } from 'react';

export function HabitTracker() {
  let orderedWeekdays: string[] = [];

  const weekDays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const weekdayNumber = new Date().getDay();
  console.log(weekdayNumber);
  let currentWeekDayNumber = weekdayNumber;

  for (let i = 0; i < weekDays.length; i++) {
    let currentweekDay = weekDays[currentWeekDayNumber];

    orderedWeekdays = [...orderedWeekdays, currentweekDay];

    currentWeekDayNumber < 6
      ? currentWeekDayNumber++
      : (currentWeekDayNumber = 0);
  }

  return (
    <div>
      {orderedWeekdays.map((weekDay) => (
        <div key={weekDay}>{weekDay}</div>
      ))}
    </div>
  );
}
