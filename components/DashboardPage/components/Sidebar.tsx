import { Stack, Logo, Separator, Button } from 'components';
import { ReactNode, useState } from 'react';
import { MONTHS_MAP } from 'utils';
import { Setting } from '../Icons/Setting';
import { User } from '../Icons/User';
import { useRouting } from 'hooks';

export function Sidebar() {
  const [selected, setSelected] = useState(false);

  return (
    <Stack
      noRadius
      background="secondaryBackgroundColor"
      vertical
    >
      <Stack center noRadius px="normal" height="7vh">
        <Logo size="small" />
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
  } = useRouting();

  const isYearSelected = year === Number(yearFromUrl);

  return (
    <NavItem selected={isYearSelected} label={String(year)}>
      {MONTHS_MAP.map(({ month, number }) => {
        const isMonthSelected =
          isYearSelected && number === Number(monthFromUrl);

        return (
          <NavItem
            selected={isMonthSelected}
            key={`${year}-${month}`}
            label={month}
          >
            {[1, 2, 3, 4].map((num) => (
              <Button
                selected={
                  isMonthSelected &&
                  num === Number(weekFromUrl)
                }
                onClick={handleWeekSelect(number, num)}
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
}
function NavItem({
  label,
  selected,
  children,
}: NavItemProps) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Button
      collapsed={collapsed}
      onToggleCollapse={handleToggleCollapse}
      thin
      selected={selected}
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
