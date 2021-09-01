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
import { useTheme } from 'providers/ThemeProvider';

export function Landing() {
  const { toggleLightMode } = useTheme();
  const [signupMutation, { loading }] = useSignupMutation();

  const headerMarkup = (
    <Stack id="header" spread>
      <Logo />
      <Stack spacing="loose" center id="main-actions">
        <Typography>Our features</Typography>
        <Typography>Contact</Typography>
        <Button variant="primary">Use as guest</Button>
        <ThemeToggle />
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
      <Button tight>Use as guest</Button>
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
      px="15vw"
      spacing="loose"
    >
      <TabInfo />
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
