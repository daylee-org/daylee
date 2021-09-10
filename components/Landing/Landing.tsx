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
import styles from './Landing.module.scss';
import Image from 'next/image';
import calendar from './Images/calendar.png';
import plant from './Images/plant.png';
import pomodoro from './Images/pomodoro.png';
import postit from './Images/postit.png';
import todo from './Images/todo.png';
import tracker from './Images/tracker.png';

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

  const mainTitlesMarkup = (
    <Stack
      vertical
      width="25rem"
      spacing="normal"
      id="mainTitles"
    >
      <Typography wrap element="h1">
        A productivity app & digital journal
      </Typography>
      <Typography thin wrap>
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
      {mainTitlesMarkup}
      {authBox}
    </Stack>
  );

  const middleMessageMarkup = (
    <Stack
      center
      vertical
      spacing="tight"
      id="middleMessage"
    >
      <Typography element="h2">
        Built to empower everyone
      </Typography>
      <Typography thin>
        Living more intentionally with Daylee’s
        self-actualizing features
      </Typography>
    </Stack>
  );

  const gridMarkup = (
    <div className={styles.Grid}>
      <GridItem
        image={tracker}
        title="Habit Tracker"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"
      />
      <GridItem
        image={todo}
        title="To-Do List"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"
      />
      <GridItem
        image={pomodoro}
        title="Pomodoro Clock"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"
      />
      <GridItem
        image={calendar}
        title="Custom Calendar"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"
      />
      <GridItem
        image={plant}
        title="Gratitude Practice"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"
      />
      <GridItem
        image={postit}
        title="Post-It Board"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"
      />
    </div>
  );

  const bottomMessageMarkup = (
    <Stack
      center
      vertical
      spacing="tight"
      id="middleMessage"
    >
      <Typography element="h2">
        Help us grow with you
      </Typography>
      <Typography center wrap thin>
        Growth and self-actualization is at the center of
        what we do. Help us by sending your feedback,
        experience, bugs, extra features you would like to
        see, etc.
      </Typography>
      <Typography danger center wrap thin>
        <Typography danger center wrap bold>
          Note:
        </Typography>{' '}
        if you choose to stay anonymous insert ‘Anonymous’
        your name instead of using a fake name
      </Typography>
    </Stack>
  );

  const footerMarkup = (
    <Stack spread id="footer">
      <Stack
        width="70vw"
        vertical
        spacing="normal"
        id="footer-left"
      >
        <Typography element="h1">You have...</Typography>
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
        <Typography element="h1">Let us know!</Typography>
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
      <Stack
        vertical
        width="60rem"
        id="page"
        py="normal"
        spacing="extra-loose"
      >
        <TabInfo />
        <ThemeToggle />
        {headerMarkup}
        {bodyMarkup}
        {middleMessageMarkup}
        {gridMarkup}
        {bottomMessageMarkup}
        {footerMarkup}
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
      <Typography element="h3">{title}</Typography>
      <Typography center wrap thin>
        {description}
      </Typography>
    </div>
  );
}
