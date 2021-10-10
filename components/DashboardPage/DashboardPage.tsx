import { useUserAccountQuery } from 'types/withhooks';
import {
  Separator,
  Stack,
  TabInfo,
  Typography,
  Button,
} from '..';
import { Sidebar, WeekMonthToggle } from './components';
import moment from 'moment';

export function DashboardPage() {
  const { data } = useUserAccountQuery();

  const topBarMarkup = (
    <Stack
      noRadius
      center
      spread
      px="loose"
      height="5rem"
      id="top-menu"
    >
      <Typography wrap type="header4">
        Good morning,{' '}
        <Typography capitalize>
          {data?.userAccount.username}
        </Typography>
      </Typography>
      <Typography wrap type="header4">
        {moment().format('LL')}
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
        <Stack vertical width="100%">
          <WeekMonthToggle />
          <Stack spacing="normal" py="normal" id="features">
            <div></div>
            <Stack
              height="100%"
              width="100%"
              background="widgetBackgroundColor"
              id="widgets"
            ></Stack>
            <Separator vertical />
            <Stack
              width="35rem"
              height="50vh"
              noRadius
              background="widgetBackgroundColor"
              id="todos"
            ></Stack>
            <div></div>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
