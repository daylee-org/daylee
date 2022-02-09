import { Stack, Typography } from 'components';
import { Pomodoro } from './Pomodoro/Pomodoro';
import styles from './WidgetsArea.module.scss';

export function WidgetsArea() {
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
        />
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
          <Pomodoro />
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
        />
        <GridItem
          height="300px"
          title="Week Review"
          id="review"
        />
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
        spacing="normal"
      >
        <Typography type="header5">{title}</Typography>
        {children}
      </Stack>
    </div>
  );
}
