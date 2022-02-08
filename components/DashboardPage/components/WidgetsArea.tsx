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
        <Pomodoro />
      </div>
    </Stack>
  );
}

interface GridItemProps {
  title: string;
  height: string;
  id: string;
}

function GridItem({ title, height, id }: GridItemProps) {
  return (
    <div className={styles.GridItem} id={styles[id]}>
      <Stack
        height={height}
        background="widgetBackgroundColor"
        py="normal"
        px="tight"
      >
        <Typography type="header5">{title}</Typography>
      </Stack>
    </div>
  );
}
