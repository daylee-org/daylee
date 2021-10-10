import { Separator, Stack, TabInfo } from '..';

import {
  Sidebar,
  TopBar,
  WeeklyTodos,
  WeekMonthToggle,
  WidgetsArea,
} from './components';

export function DashboardPage() {
  return (
    <Stack height="100vh" width="100vw" id="dashboard">
      <TabInfo title="Daylee | Dashboard" />
      <Sidebar />
      <Stack vertical width="100%" id="dashboard-content">
        <TopBar />
        <Separator padding="extra-loose" />
        <Stack vertical spacing="normal" width="100%">
          <WeekMonthToggle />
          <Stack spacing="normal" px="loose" id="features">
            <WidgetsArea />
            <Separator vertical />
            <WeeklyTodos />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
