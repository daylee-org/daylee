import { useRouter } from 'next/router';
import { useState } from 'react';
import { useUserSignupMutation } from 'types/withhooks';
import { URLS } from 'utils';
import {
  Button,
  Input,
  Loader,
  Logo,
  Stack,
  TabInfo,
  Typography,
} from '..';

export function SignUpPage() {
  const router = useRouter();

  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordAgain, setPasswordAgain] = useState('');

  const [signup, { loading: signingUp }] =
    useUserSignupMutation({
      onCompleted(data) {
        if (data.userSignup?.email != null) {
          router.push(URLS.Home);
        }
      },
    });

  return (
    <Stack py="13vh" vertical center id="signup-main">
      {signingUp && <Loader />}
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
        <Stack width="100%" spacing="loose" id="username">
          <Input
            fill
            label="First name"
            placeholder="John"
            onChange={setFirstname}
            value={firstname}
          />
          <Input
            fill
            label="Last name"
            placeholder="Doe"
            onChange={setLastname}
            value={lastname}
          />
        </Stack>
        <Input
          label="Email"
          placeholder="your@email.com"
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
        <Button onClick={handleSignup} label="Sign up" />
        <Button
          linkTo={URLS.Home}
          variant="secondary"
          label="Cancel"
        />
      </Stack>
    </Stack>
  );

  function handleSignup() {
    signup({
      variables: {
        args: {
          email: email,
          password: password,
          username: `${firstname} ${lastname}`,
        },
      },
    });
  }
}
