import { Stack, Typography } from '..';
import styles from './MessageBox.module.scss';

interface MessageBoxProps {
  title?: string;
  placeholder: string;
}

export function MessageBox({
  title,
  placeholder,
}: MessageBoxProps) {
  return (
    <Stack
      vertical
      px="tight"
      // py="tight"
      spacing="tight"
      background="widgetBackgroundColor"
    >
      <Typography type="header5">{title}</Typography>
      <textarea
        placeholder={placeholder}
        className={styles.MessageBox}
      />
    </Stack>
  );
}
