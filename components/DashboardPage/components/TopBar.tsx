import moment from 'moment';

import { Stack, Typography } from 'components';
import { useUserAccountQuery } from 'types/withhooks';

const CURRENT_DATE = moment().format('LL');

export function TopBar() {
  const { data } = useUserAccountQuery();

  return (
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
        {CURRENT_DATE}
      </Typography>
    </Stack>
  );
}
