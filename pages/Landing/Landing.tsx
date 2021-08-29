import Head from 'next/head';
import { Typography, Button, Input } from 'components';
import { useSignupMutation } from 'types/withhooks';
import { useTheme } from 'providers/ThemeProvider';
import { useState } from 'react';

export function Landing() {
  const { toggleLightMode } = useTheme();
  const [collapsed, collapsedSet] = useState(false);
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
        Toggle mode
      </Button>
      <Button variant="primary">Click me</Button>
      <Button variant="add">Add</Button>
      <Button
        onClick={() => collapsedSet(!collapsed)}
        selected={collapsed}
        variant="collapse"
        underline
      >
        Collapse
      </Button>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: 400,
          padding: 10,
        }}
      >
        <Input label="Name" />
        <Input label="Username" />
      </div>
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
