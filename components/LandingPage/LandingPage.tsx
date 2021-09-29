import {
  Typography,
  Button,
  Input,
  Logo,
  Stack,
  TabInfo,
  ThemeToggle,
  Loader,
} from 'components';
import {
  useSigninLazyQuery,
  useUserAccountQuery,
} from 'types/withhooks';
import styles from './LandingPage.module.scss';
import Image from 'next/image';
import calendar from './Images/calendar.png';
import plant from './Images/plant.png';
import pomodoro from './Images/pomodoro.png';
import postit from './Images/postit.png';
import todo from './Images/todo.png';
import tracker from './Images/tracker.png';
import { useState } from 'react';

export function LandingPage() {
  const { data, refetch } = useUserAccountQuery({
    fetchPolicy: 'network-only',
  });
  const [signin, { loading }] = useSigninLazyQuery({
    nextFetchPolicy: 'network-only',
    onCompleted(data) {
      console.log(data);
      setTimeout(() => {
        refetch();
      }, 2000);
    },
    onError(error) {
      console.log(error);
    },
  });

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const headerMarkup = (
    <Stack id="header" spread>
      <Logo />
      <Stack spacing="loose" center id="main-actions">
        <Typography type="header4">Our features</Typography>
        <Typography type="header4">Contact</Typography>
        <Button label="Use as guest" variant="primary" />
      </Stack>
    </Stack>
  );

  const mainTitlesMarkup = (
    <Stack
      vertical
      width="38rem"
      spacing="45px"
      id="mainTitles"
    >
      <Stack vertical width="30rem" id="bigTitle">
        <Typography wrap type="header1">
          A productivity app & digital journal
        </Typography>
      </Stack>
      <Typography wrap type="bigCaption">
        Making life easier by organizing your thoughts,
        schedule and life. Balance your work, projects,
        social life and personal growth.
      </Typography>
      <Button label="Use as guest" tight />
    </Stack>
  );

  const authBox = (
    <Stack
      shadow
      px="normal"
      background="separatorBackgroundColor"
      width="20rem"
      vertical
      id="inputs"
      spacing="normal"
    >
      <Input
        value={email}
        onChange={setEmail}
        placeholder="you@email.com"
        label="Email"
      />
      <Input
        value={password}
        onChange={setPassword}
        placeholder="abcd1234!"
        label="Password"
      />
      <Button
        onClick={handleSigninMutation}
        label="Log in"
        disabled={loading}
      />
      <Button label="Sign up" variant="secondary" />
      <Button label="Use as a guest" variant="collapse" />
      <div />
    </Stack>
  );

  const bodyMarkup = (
    <Stack id="body" center spread>
      {mainTitlesMarkup}
      {authBox}
    </Stack>
  );

  const gridMarkup = (
    <Stack
      center
      vertical
      spacing="extra-loose"
      id="features"
    >
      <Stack
        center
        vertical
        spacing="normal"
        id="middleMessage"
      >
        <Typography type="header2">
          Built to empower everyone
        </Typography>
        <Typography type="mediumCaption">
          Living more intentionally with Daylee’s
          self-actualizing features
        </Typography>
      </Stack>
      <div className={styles.Grid}>
        <GridItem
          image={tracker}
          title="Habit Tracker"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod adipiscing elit, sed do eiusmod"
        />
        <GridItem
          image={todo}
          title="To-Do List"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod adipiscing elit, sed do eiusmod"
        />
        <GridItem
          image={pomodoro}
          title="Pomodoro Clock"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod adipiscing elit, sed do eiusmod"
        />
        <GridItem
          image={calendar}
          title="Custom Calendar"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod adipiscing elit, sed do eiusmod"
        />
        <GridItem
          image={plant}
          title="Gratitude Practice"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod adipiscing elit, sed do eiusmod"
        />
        <GridItem
          image={postit}
          title="Post-It Board"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod adipiscing elit, sed do eiusmod"
        />
      </div>
    </Stack>
  );

  const footerMarkup = (
    <Stack center vertical spread id="footer">
      <Stack
        center
        vertical
        spacing="normal"
        id="bottomMessage"
      >
        <Typography type="header2">
          Help us grow with you
        </Typography>
        <Typography center wrap type="mediumCaption">
          Growth and self-actualization is at the center of
          what we do. Help us by sending your feedback,
          experience, bugs, extra features you would like to
          see, etc.
        </Typography>
        <Stack spacing="tight" id="note-msg">
          <Typography danger center wrap bold>
            Note:
          </Typography>{' '}
          <Typography danger center wrap>
            if you choose to stay anonymous insert
            ‘Anonymous’ your name instead of using a fake
            name
          </Typography>
        </Stack>
      </Stack>
      <Stack
        width="70vw"
        vertical
        spacing="normal"
        id="footer-left"
      >
        <Typography>You have...</Typography>
        <Stack
          px="loose"
          id="footer-messages"
          vertical
          spacing="normal"
        >
          <Typography thin>
            Feedback/comments for us?
          </Typography>
          <Typography thin>
            Features you would like to see on Daylee?
          </Typography>
          <Typography thin>
            Experienced issues or bugs?
          </Typography>
        </Stack>
        <Typography>Let us know!</Typography>
      </Stack>
      <Stack
        spacing="tight"
        width="30vw"
        vertical
        id="footer-right"
      >
        <Input placeholder="John Doe" label="Your name" />
        <Input
          placeholder="you@email.com"
          label="Your email"
        />
        <Input
          placeholder="Hi, Daylee team..."
          label="Your message"
        />
        <Button label="Send" variant="collapse" />
      </Stack>
    </Stack>
  );

  return (
    <Stack id="wrapper" vertical center>
      {loading && <Loader />}
      <TabInfo />
      {/* <ThemeToggle /> */}
      <Stack
        vertical
        width="65rem"
        id="page"
        py="normal"
        spacing="200px"
      >
        <TabInfo />
        {/* <ThemeToggle /> */}
        {headerMarkup}
        {bodyMarkup}
        {gridMarkup}
        {footerMarkup}
      </Stack>
    </Stack>
  );

  function handleSigninMutation() {
    signin({
      variables: {
        args: {
          email: email,
          password: password,
        },
      },
    });
  }
}

interface GridItemProps {
  title: string;
  description: string;
  image: StaticImageData;
}

function GridItem({
  title,
  description,
  image,
}: GridItemProps) {
  return (
    <div className={styles.GridItem}>
      <Image src={image} alt="Picture of the author" />
      <Stack
        center
        vertical
        py="normal"
        spacing="20px"
        width="280px"
        id="feature-text"
      >
        <Typography type="header4">{title}</Typography>
        <Typography center wrap type="bigText">
          {description}
        </Typography>
      </Stack>
    </div>
  );
}
