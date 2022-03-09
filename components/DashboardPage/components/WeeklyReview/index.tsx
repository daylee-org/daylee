import { useState } from 'react';
import { MessageBox, Stack } from 'components';

export function WeeklyReview() {
  return (
    <Stack vertical width="100%" height="100%">
      <MessageBox placeholder="This week has been..." />
    </Stack>
  );
}
