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

  if (loading) {
    return <Loader />;
  }

  if (data?.userAccount != null) {
    return <DashboardPage />;
  }

  return <LandingPage />;
}
