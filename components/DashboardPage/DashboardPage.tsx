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
  const [selected, setSelected] = useState(false);

  return (
    <Stack width="100%" id="dashboard">
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
        id="side-menu"
      >
        <Logo />
        <Separator />
        <Stack spacing="tight" vertical>
          <Button
            thin
            label="Profile"
            variant="side-collapse"
            onSelect={handleSelect}
          />
          <Button thin label="Setting" variant="nav" />
        </Stack>
        <Separator />
        <Stack spacing="tight" vertical>
          <YearItem year={2020} />
          <YearItem year={2021} />
          <YearItem year={2022} />
          <YearItem year={2023} />
          <YearItem year={2024} />
        </Stack>
      </Stack>
      <Stack vertical width="100%" id="dashboard-content">
        <Stack
          noRadius
          spread
          py="normal"
          px="normal"
          id="top-menu"
        >
          <Typography wrap type="header3">
            Good morning, whOre
          </Typography>
          <Typography wrap type="header3">
            2 October 2021
          </Typography>
        </Stack>
        <Separator />
        <Stack width="100%" id="features">
          <Stack width="100%" id="widgets"></Stack>
          <Stack
            width="25rem"
            height="100vh"
            id="todos"
            background="widgetBackgroundColor"
          ></Stack>
        </Stack>
      </Stack>
    </Stack>
  );

  function handleSelect() {
    setSelected(!selected);
  }
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
