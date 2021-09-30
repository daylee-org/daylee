import {
  Button,
  Logo,
  Stack,
  TabInfo,
  ThemeToggle,
  Typography,
} from '..';

export function DashboardPage() {
  return (
    <Stack height="100vh" spread id="dashboard">
      <TabInfo title="Daylee | Dashboard" />
      <ThemeToggle />

      <Stack
        spacing="loose"
        py="normal"
        px="normal"
        noRadius
        width="12vw"
        vertical
        background="secondaryBackgroundColor"
      >
        <Logo />
        <Stack spacing="normal" vertical>
          <Typography>Profile</Typography>
          <Typography>Settings</Typography>
        </Stack>
        <Stack spacing="normal" vertical>
          <Button variant="collapse" label="2021">
            <Button
              variant="collapse"
              label="2021"
            ></Button>
          </Button>
        </Stack>
      </Stack>

      <div />
    </Stack>
  );
}
