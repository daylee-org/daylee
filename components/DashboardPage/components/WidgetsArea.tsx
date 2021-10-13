import { Stack } from 'components';

export function WidgetsArea() {
  return (
    <Stack
      height="100%"
      width="100%"
      scroll
      spacing="normal"
      vertical
      id="widgets"
    >
      <div></div>
      <Stack
        height="100%"
        width="100%"
        background="widgetBackgroundColor"
      >
        Widgets
      </Stack>
    </Stack>
  );
}
