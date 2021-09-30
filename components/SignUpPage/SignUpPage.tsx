import { useState } from 'react';
import { URLS } from 'utils';
import {
  Button,
  Input,
  Logo,
  Stack,
  TabInfo,
  Typography,
} from '..';

export function SignUpPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordAgain, setPasswordAgain] = useState('');

  return (
    <Stack py="13vh" vertical center id="signup-main">
      <TabInfo title="Daylee | Sign up" />
      <Stack
        shadow
        px="normal"
        py="normal"
        background="separatorBackgroundColor"
        width="30rem"
        vertical
        id="inputs"
        spacing="normal"
      >
        <Stack id="header" vertical center>
          <Typography type="mediumCaption" center>
            Sign up for
          </Typography>
          <Logo />
        </Stack>
        <Stack width="100%" spacing="tight" id="username">
          <Input
            fill
            label="First name"
            placeholder="John"
            onChange={setUsername}
            value={username}
          />
          <Input
            fill
            label="Last name"
            placeholder="Doe"
            onChange={setUsername}
            value={username}
          />
        </Stack>
        <Input
          label="Email"
          placeholder="you@email.com"
          onChange={setEmail}
          value={email}
        />
        <Input
          label="Password"
          placeholder="123ABC!"
          onChange={setPassword}
          value={password}
        />
        <Input
          label="Password (again)"
          placeholder="123ABC!"
          onChange={setPasswordAgain}
          value={passwordAgain}
        />
        <div />
        <Button label="Sign up" />
        <Button
          linkTo={URLS.Home}
          variant="secondary"
          label="Cancel"
        />
      </Stack>
    </Stack>
  );
}
