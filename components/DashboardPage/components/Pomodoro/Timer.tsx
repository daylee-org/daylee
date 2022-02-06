import moment from 'moment';
import { useState, useEffect } from 'react';
import { Stack, Typography } from 'components';

interface TimerProps {
  round: number;
  setRound: any;
}

export function Timer({ round, setRound }: TimerProps) {
  let workTime = 25;
  let breakTime = 5;
  const [time, setTime] = useState<number>(workTime);
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
        setTime(breakTime);
        setRound((round: number) => round + 1);
      }
      if (workState === true) setTime(workTime);
    }

    if (countdown && time > 0) {
      setTimeout(() => {
        setClock((clock) => !clock);
      }, 1000);
      setTime(time - 1);
    }
  }, [countdown, clock, workState]);

  return (
    <Stack
      center
      round
      background="gradient"
      width="250px"
      height="250px"
    >
      <Stack
        vertical
        center
        round
        background="widgetBackgroundColor"
        width="230px"
        height="230px"
        spread
        py="normal"
      >
        {workState ? (
          <Stack
            background="mainBackgroundColor"
            py="tight"
            px="tight"
            opacity="0.7"
          >
            <Typography type="smallText" uppercase bold>
              Break
            </Typography>
          </Stack>
        ) : (
          <Stack
            background="mainBackgroundColor"
            py="tight"
            px="tight"
            opacity="0.7"
          >
            <Typography type="smallText" uppercase bold>
              Work
            </Typography>
          </Stack>
        )}
        <Typography type="header1">{time}</Typography>
        <button onClick={startCountdown}>
          start/pause
        </button>
      </Stack>
    </Stack>
  );

  function startCountdown() {
    if (time > 0) {
      setCountdown(!countdown);
    }
  }
}
