import {
  LandingPage,
  DashboardPage,
  Loader,
} from 'components';
import { useUserAccountQuery } from 'types/withhooks';

export default function Home() {
  const { data, loading } = useUserAccountQuery({
    fetchPolicy: 'network-only',
  });

  const isSignedIn = data?.userAccount != null;

  if (loading) {
    return <Loader />;
  }

  if (isSignedIn) {
    return <DashboardPage />;
  }

  return <LandingPage />;
}
