import Head from 'next/head';
import { Typography, Button } from 'components';
import { useSignupMutation } from 'types/withhooks';
import { useTheme } from 'providers/ThemeProvider';

export function Landing() {
  const { toggleLightMode } = useTheme();
  const [signupMutation, { loading }] = useSignupMutation();

  return (
    <div>
      <Head>
        <title>Daylee</title>
        <meta name="description" content="Daylee web app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Typography element="h2">
        This will be the landing page at some point
      </Typography>
      <Button variant="secondary" onClick={toggleLightMode}>
        Toggle Light Mode
      </Button>
      <Button variant="primary" onClick={toggleLightMode}>
        Toggle Light Mode
      </Button>
    </div>
  );

  async function handleSignupMutation() {
    const { data } = await signupMutation({
      variables: {
        args: {
          email: 'email',
          password: 'password',
          username: 'username',
        },
      },
    });
  }
}
