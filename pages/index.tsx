import {
  LandingPage,
  DashboardPage,
  Loader,
} from 'components';
import moment from 'moment';
import { useEffect } from 'react';
import { useUserAccountQuery } from 'types/withhooks';
import { useRoutingState } from 'hooks';

export default function Home() {
  const { data, loading } = useUserAccountQuery({
    fetchPolicy: 'network-only',
  });

  const { set } = useRoutingState();

  useEffect(() => {
    function setInitialNavState() {
      set({
        week:
          moment().weeks() -
          moment().startOf('month').weeks() +
          1,
        month: moment().month(),
        year: moment().year(),
      });
    }

    setInitialNavState();
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (data?.userAccount != null) {
    return <DashboardPage />;
  }

  return <LandingPage />;
}
