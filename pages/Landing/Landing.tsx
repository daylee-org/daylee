import {
  Typography,
  Button,
  Input,
  Logo,
  Stack,
  TabInfo,
  ThemeToggle,
} from 'components';
import { useSignupMutation } from 'types/withhooks';

export function Landing() {
  const [signupMutation, { loading }] = useSignupMutation();

  const headerMarkup = (
    <Stack id="header" spread>
      <Logo />
      <Stack spacing="loose" center id="main-actions">
        <Typography>Our features</Typography>
        <Typography>Contact</Typography>
        <Button label="Use as guest" variant="primary" />
      </Stack>
    </Stack>
  );

  const mainTitles = (
    <Stack
      vertical
      width="25rem"
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
      <Button label="Use as guest" tight />
    </Stack>
  );

  const authBox = (
    <Stack
      px="normal"
      background="separatorBackgroundColor"
      width="20rem"
      vertical
      id="inputs"
      spacing="normal"
    >
      <Input placeholder="you@email.com" label="Email" />
      <Input placeholder="abcd1234!" label="Password" />
      <Button label="Log in" />
      <Button label="Sign up" variant="secondary" />
      <Button
        label="Use as a guest"
        variant="collapse"
        underline
      />
      <div />
    </Stack>
  );

  const bodyMarkup = (
    <Stack id="body" center spread>
      {mainTitles}
      {authBox}
    </Stack>
  );

  return (
    <Stack
      vertical
      id="page"
      py="normal"
      px="20vw"
      spacing="loose"
    >
      <TabInfo />
      <ThemeToggle />
      {headerMarkup}
      {bodyMarkup}
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
