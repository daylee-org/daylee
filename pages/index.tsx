import {
  LandingPage,
  DashboardPage,
  Loader,
} from 'components';
import { useEffect } from 'react';
import { useUserAccountQuery } from 'types/withhooks';
import { useRoutingState } from 'hooks';

export default function Home() {
  const { data, loading } = useUserAccountQuery({
    fetchPolicy: 'network-only',
  });

  const isSignedIn = data?.userAccount != null;

  const { set, setToday } = useRoutingState();

  useEffect(() => {
    setToday();
  }, []);

  useEffect(() => {
    if (!loading && !isSignedIn) {
      set({});
    }
  }, [loading, isSignedIn]);

  if (loading) {
    return <Loader />;
  }

  if (isSignedIn) {
    return <DashboardPage />;
  }

  return <LandingPage />;
}
