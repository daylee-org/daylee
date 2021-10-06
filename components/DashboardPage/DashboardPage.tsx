import { ReactNode, useState } from 'react';
import { MONTHS_MAP } from 'utils';
import {
  Button,
  Logo,
  Separator,
  Stack,
  TabInfo,
  Typography,
} from '..';
import { useRouting } from 'hooks';
import { User } from './Icons/User';
import { Setting } from './Icons/Setting';

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
            variant="nav"
            onSelect={handleSelect}
            icon={<User />}
          />
          <Button
            thin
            label="Setting"
            variant="nav"
            icon={<Setting />}
          />
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
  const {
    set,
    get: { month },
  } = useRouting();

  console.log(month);

  return (
    <NavItem label={String(year)}>
      {MONTHS_MAP.map(({ month, number }) => (
        <NavItem key={`${year}-${month}`} label={month}>
          <Button
            onClick={handleWeekSelect(number, 1)}
            thin
            variant="nav"
            label="Week 1"
          />
          <Button
            onClick={handleWeekSelect(number, 2)}
            thin
            variant="nav"
            label="Week 2"
          />
          <Button
            onClick={handleWeekSelect(number, 3)}
            thin
            variant="nav"
            label="Week 3"
          />
          <Button
            onClick={handleWeekSelect(number, 4)}
            thin
            variant="nav"
            label="Week 4"
          />
        </NavItem>
      ))}
    </NavItem>
  );

  function handleWeekSelect(month: number, week: number) {
    return function () {
      set({ month, year, week });
    };
  }
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
