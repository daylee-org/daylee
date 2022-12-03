import {
  LandingPage,
  DashboardPage,
  Loader,
} from 'components';
import { useState } from 'react';
import { useUserAccountQuery } from 'types/withhooks';

export default function Home() {
  const [isGuest, setIsGuest] = useState(false);
  const { data, loading } = useUserAccountQuery({
    fetchPolicy: 'network-only',
  });

  const isSignedIn = data?.userAccount != null;

  if (loading) {
    return <Loader />;
  }

  if (isSignedIn || isGuest) {
    return <DashboardPage />;
  }

  return (
    <LandingPage
      isGuest={isGuest}
      setIsGuest={setIsGuest}
    />
  );
}
