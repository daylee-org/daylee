import { ReactNode, useState } from 'react';
import { monthFromMonthNumber, MONTHS } from 'utils';
import {
  Button,
  Logo,
  Separator,
  Stack,
  TabInfo,
  Typography,
} from '..';
import { useRouting } from 'hooks';

export function DashboardPage() {
  return (
    <Stack spread id="dashboard">
      <TabInfo title="Daylee | Dashboard" />
      <Stack
        spacing="normal"
        py="normal"
        px="normal"
        noRadius
        width="12rem"
        vertical
        background="secondaryBackgroundColor"
        height="100vh"
        scroll
      >
        <Logo />
        <Separator />
        <Stack spacing="tight" vertical>
          <Typography>Profile</Typography>
          <Typography>Settings</Typography>
        </Stack>
        <Separator />
        <Stack spacing="tight" vertical>
          <YearItem year={2021} />
          <YearItem year={2022} />
          <YearItem year={2023} />
          <YearItem year={2024} />
        </Stack>
      </Stack>
    </Stack>
  );
}

interface YearItemProps {
  year: number;
}
function YearItem({ year }: YearItemProps) {
  const { set } = useRouting();

  return (
    <NavItem label={String(year)}>
      {MONTHS.map((month) => (
        <NavItem key={`${year}-${month}`} label={month}>
          <Button thin variant="nav" label="Week 1" />
          <Button thin variant="nav" label="Week 2" />
          <Button thin variant="nav" label="Week 3" />
          <Button thin variant="nav" label="Week 4" />
        </NavItem>
      ))}
    </NavItem>
  );
}

interface NavItemProps {
  label: string;
  children: ReactNode;
}
function NavItem({ label, children }: NavItemProps) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Button
      collapsed={collapsed}
      onToggleCollapse={handleToggleCollapse}
      thin
      variant="collapse"
      label={label}
    >
      {children}
    </Button>
  );

  function handleToggleCollapse() {
    setCollapsed((col) => !col);
  }
}
