import { useState, useEffect } from 'react';
import { Stack, Typography } from 'components';

export function Timer() {
  const [time, setTime] = useState<number>(25);
  const [countdown, setCountdown] =
    useState<boolean>(false);

  useEffect(() => {
    countdown &&
      time > 0 &&
      setTimeout(() => setTime(time - 1), 1000);
  }, [countdown, time]);

  return (
    <Stack vertical center background="gradient">
      <Typography type="header1">{time}</Typography>
      <button onClick={startCountdown}>start/pause</button>
    </Stack>
  );

  function startCountdown() {
    setCountdown(!countdown);
    setTime(time - 1);
  }
}
