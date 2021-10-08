import { useUserAccountQuery } from 'types/withhooks';
import { Separator, Stack, TabInfo, Typography } from '..';
import { Sidebar } from './components';

export function DashboardPage() {
  const { data } = useUserAccountQuery();

  const topBarMarkup = (
    <Stack
      noRadius
      center
      spread
      px="loose"
      height="4rem"
      id="top-menu"
    >
      <Typography wrap type="header4">
        Good morning,{' '}
        <Typography thin capitalize>
          {data?.userAccount.username}
        </Typography>
      </Typography>
      <Typography wrap type="header4">
        2 October 2021
      </Typography>
    </Stack>
  );

  return (
    <Stack height="100vh" width="100vw" id="dashboard">
      <TabInfo title="Daylee | Dashboard" />
      <Sidebar />
      <Stack vertical width="100%" id="dashboard-content">
        {topBarMarkup}
        <Separator padding="extra-loose" />
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
