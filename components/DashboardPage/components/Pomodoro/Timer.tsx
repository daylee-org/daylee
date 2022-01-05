import { useState, useEffect } from 'react';
import { Stack, Typography } from 'components';

export function Timer() {
  const [time, setTime] = useState<number>(25);
  const [clock, setClock] = useState<boolean>(true);
  const [countdown, setCountdown] =
    useState<boolean>(false);

  useEffect(() => {
    if (countdown && time > 0) {
      setTimeout(() => {
        setClock(!clock);
      }, 1000);
      setTime(time - 1);
    }
  }, [countdown, clock, time]);

  return (
    <Stack vertical center background="gradient">
      <Typography type="header1">{time}</Typography>
      <button onClick={startCountdown}>start/pause</button>
    </Stack>
  );

  function startCountdown() {
    if (time > 0) {
      setCountdown(!countdown);
    }
  }
}
