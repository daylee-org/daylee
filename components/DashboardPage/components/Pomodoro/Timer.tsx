import moment from 'moment';
import { useState, useEffect } from 'react';
import { Stack, Typography } from 'components';

interface TimerProps {
  round: number;
  setRound: any;
}

export function Timer({ round, setRound }: TimerProps) {
  const [time, setTime] = useState<number>(7);
  const [clock, setClock] = useState<boolean>(true);
  const [countdown, setCountdown] =
    useState<boolean>(false);
  const [workState, setWorkState] =
    useState<boolean>(false);

  // const timez = moment.duration(25, 'seconds');
  // console.log(timez);

  useEffect(() => {
    if (time === 0) {
      setWorkState((workState) => !workState);
      if (workState === false) {
        setTime(4);
        setRound((round) => round + 1);
      }
      if (workState === true) setTime(7);
    }

    if (countdown && time > 0) {
      setTimeout(() => {
        setClock((clock) => !clock);
      }, 1000);
      setTime(time - 1);
    }
    // setTimeout(() => {
    //   setClock((clock) => !clock);
    //   if (workState === false) setTime(4);
    //   if (workState === true) setTime(7);
    // }, 1000);
  }, [countdown, clock, workState]);
  // console.log(workState);

  return (
    <Stack vertical center background="gradient">
      <Typography type="header1">{time}</Typography>
      <button onClick={startCountdown}>start/pause</button>
      <p>{workState ? 'Break' : 'Work'}</p>
    </Stack>
  );

  function startCountdown() {
    if (time > 0) {
      setCountdown(!countdown);
    }
  }
}
