import { HabitTracker } from './HabitTracker';
import { Pomodoro } from './Pomodoro';
import { Stack, Typography } from 'components';
import { useMonthQuery } from 'types/withhooks';
import { useRoutingState } from 'hooks';
import { WeeklyGoals } from './WeeklyGoals';
import { WeeklyReview } from './WeeklyReview';
import styles from './WidgetsArea.module.scss';

export function WidgetsArea() {
  const {
    get: { month, year },
  } = useRoutingState();

  const { data } = useMonthQuery({
    variables: { month: month ?? 0, year: year ?? 0 },
    fetchPolicy: 'no-cache',
  });

  const round = data?.month?.pomodoroWidget?.round || 1;

  return (
    <Stack
      height="100%"
      width="100%"
      scroll
      vertical
      center
      py="10px"
      id="widgets"
    >
      <div className={styles.Grid}>
        <GridItem
          height="300px"
          title="Habit Tracker"
          id="habit-tracker"
        >
          <HabitTracker />
        </GridItem>
        <GridItem
          height="300px"
          title="Weather App"
          id="weather"
        />
        <GridItem
          height="420px"
          title="Pomodoro"
          id="pomodoro"
        >
          <Pomodoro round={round} />
        </GridItem>
        <GridItem
          height="420px"
          title="Post-it Board"
          id="post-it"
        />
        <GridItem
          height="300px"
          title="This Week’s Goals"
          id="goals"
        >
          <WeeklyGoals />
        </GridItem>
        <GridItem
          height="300px"
          title="Week Review"
          id="review"
        >
          <WeeklyReview />
        </GridItem>
      </div>
    </Stack>
  );
}

interface GridItemProps {
  title?: string;
  height: string;
  children?: React.ReactNode;
  id: string;
}

function GridItem({
  children,
  title,
  height,
  id,
}: GridItemProps) {
  return (
    <div className={styles.GridItem} id={styles[id]}>
      <Stack
        height={height}
        background="widgetBackgroundColor"
        py="normal"
        px="tight"
        vertical
        spacing="25px"
      >
        <Typography type="header5">{title}</Typography>
        {children}
      </Stack>
    </div>
  );
}
