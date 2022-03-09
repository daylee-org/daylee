import {
  Stack,
  Logo,
  Separator,
  Button,
  Loader,
  ThemeToggle,
  Typography,
} from 'components';
import { ReactNode, useEffect, useState } from 'react';
import { MONTHS_MAP } from 'utils';
import { Setting } from '../Icons/Setting';
import { User } from '../Icons/User';
import { Logout } from '../Icons/Logout';

import { useRoutingState } from 'hooks';
import { useUserSignOutMutation } from 'types/withhooks';
import { useRouter } from 'next/router';
import { useTheme } from 'providers/ThemeProvider';

export function Sidebar() {
  const router = useRouter();
  const { isLightMode } = useTheme();
  const { setThisWeek, set } = useRoutingState();
  useEffect(() => {
    setThisWeek();

    return () => {
      set({});
    };
  });

  const [signout, { loading: signingOut }] =
    useUserSignOutMutation({
      onCompleted(data) {
        if (data.userSignout) {
          router.reload();
        }
      },
    });

  return (
    <Stack
      noRadius
      background="secondaryBackgroundColor"
      vertical
    >
      {signingOut && <Loader />}
      <Stack center noRadius px="normal" height="5rem">
        <Logo size="small" />
      </Stack>
      <Stack noRadius vertical spacing="normal" px="normal">
        <Separator />
        <Stack spacing="tight" vertical>
          <Button
            thin
            label="Profile"
            variant="nav"
            icon={<User />}
          />
          <Button
            thin
            label="Setting"
            variant="nav"
            icon={<Setting />}
          />
          <Button
            thin
            label="Logout"
            variant="nav"
            onClick={signout}
            icon={<Logout />}
          />
          <Stack py="5px" center spacing="tight">
            <ThemeToggle />
            <Typography type="mediumCaption" disabled thin>
              {`${isLightMode ? 'Light' : 'Dark'}`}
            </Typography>
          </Stack>
        </Stack>
        <Separator />
      </Stack>
      <Stack
        spacing="normal"
        px="normal"
        noRadius
        width="12rem"
        vertical
        scroll
        id="side-menu"
      >
        <div />
        <Stack spacing="tight" vertical>
          <YearItem year={2020} />
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
  const {
    set,
    get: {
      month: monthFromUrl,
      year: yearFromUrl,
      week: weekFromUrl,
    },
  } = useRoutingState();

  const isYearSelected = year === Number(yearFromUrl);

  return (
    <NavItem
      onClick={handleYearSelect}
      selected={isYearSelected}
      label={String(year)}
    >
      {MONTHS_MAP.map(({ month, number: monthNumber }) => {
        const isMonthSelected =
          isYearSelected &&
          monthNumber === Number(monthFromUrl);

        return (
          <NavItem
            onClick={handleMonthSelect(monthNumber)}
            selected={isMonthSelected}
            key={`${year}-${month}`}
            label={month}
          >
            {[1, 2, 3, 4].map((num) => (
              <Button
                key={`week-${month}-${year}-${num}`}
                selected={
                  isMonthSelected &&
                  num === Number(weekFromUrl)
                }
                onClick={handleWeekSelect(monthNumber, num)}
                thin
                variant="nav"
                label={`Week ${num}`}
              />
            ))}
          </NavItem>
        );
      })}
    </NavItem>
  );

  function handleYearSelect() {
    set({ year });
  }

  function handleMonthSelect(month: number) {
    return function () {
      set({ year, month });
    };
  }

  function handleWeekSelect(month: number, week: number) {
    return function () {
      set({ month, year, week });
    };
  }
}

interface NavItemProps {
  label: string;
  selected?: boolean;
  children: ReactNode;
  onClick?(): void;
}
function NavItem({
  label,
  selected,
  children,
  onClick,
}: NavItemProps) {
  const [collapsed, setCollapsed] = useState(selected);

  useEffect(() => {
    setCollapsed(selected);
  }, [selected]);

  return (
    <Button
      collapsed={collapsed}
      onToggleCollapse={handleToggleCollapse}
      onClick={handleOnclick}
      thin
      selected={selected}
      variant="collapse"
      label={label}
    >
      {children}
    </Button>
  );

  function handleOnclick() {
    onClick?.();
    if (!collapsed) {
      setCollapsed(true);
    }
  }

  function handleToggleCollapse() {
    setCollapsed((col) => !col);
  }
}
