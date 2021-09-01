import Head from 'next/head';
import {
  Typography,
  Button,
  Input,
  Logo,
  Stack,
} from 'components';
import { useSignupMutation } from 'types/withhooks';
import { useTheme } from 'providers/ThemeProvider';
import { useState } from 'react';

export function Landing() {
  const { toggleLightMode } = useTheme();
  const [collapsed, collapsedSet] = useState(false);
  const [signupMutation, { loading }] = useSignupMutation();

  const mainTitles = (
    <Stack
      vertical
      breadth="500px"
      spacing="normal"
      id="main-titles"
    >
      <Typography wrap element="h1">
        A productivity app & digital journal
      </Typography>
      <Typography wrap element="p">
        Making life easier by organizing your thoughts,
        schedule and life. Balance your work, projects,
        social life and personal growth.
      </Typography>
      <Button tight>Use as guest</Button>
    </Stack>
  );

  const authBox = (
    <Stack
      background="separatorBackgroundColor"
      breadth="20rem"
      paddingY="20px"
      vertical
      id="inputs"
      spacing="normal"
    >
      <Input label="Email" />
      <Input label="Password" />
      <Button>Log in</Button>
      <Button variant="secondary">Sign up</Button>
      <Button variant="collapse" underline>
        Use as a guest
      </Button>
      <div />
    </Stack>
  );
  return (
    <Stack vertical breadth="100%" id="main">
      <Head>
        <title>Daylee</title>
        <meta name="description" content="Daylee web app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Stack
        id="header"
        spread
        paddingY="tight"
        paddingX="loose"
      >
        <Logo />
        <Stack spacing="loose" center id="main-actions">
          <Typography>Our features</Typography>
          <Typography>Contact</Typography>
          <Button variant="primary">Use as guest</Button>
        </Stack>
      </Stack>
      <Stack
        id="main-area"
        center
        spread
        paddingY="tight"
        paddingX="loose"
      >
        {mainTitles}
        {authBox}
      </Stack>
    </Stack>
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
