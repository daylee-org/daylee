import { Separator, Stack, TabInfo, Typography } from '..';
import { Sidebar } from './components';

export function DashboardPage() {
  const topBarMarkup = (
    <Stack
      noRadius
      center
      px="normal"
      height="7vh"
      id="top-menu"
    >
      <Typography wrap type="header3">
        Good morning, whOre
      </Typography>
      <Typography wrap type="header3">
        2 October 2021
      </Typography>
    </Stack>
  );

  return (
    <Stack height="100vh" width="100%" id="dashboard">
      <TabInfo title="Daylee | Dashboard" />
      <Sidebar />
      <Stack vertical width="100%" id="dashboard-content">
        {topBarMarkup}
        <Separator padding="loose" />
        <Stack id="features">
          <Stack
            height="100%"
            width="100%"
            id="widgets"
          ></Stack>
          <Stack
            width="25rem"
            height="100%"
            noRadius
            background="widgetBackgroundColor"
            id="todos"
          ></Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
