import { Button, Stack, Typography } from '..';
import styles from './MessageBox.module.scss';
interface MessageBoxProps {
  title?: string;
  placeholder: string;
  displayMessage?: boolean;
  setDisplayMessage?: any;
}

export function MessageBox({
  title,
  placeholder,
  setDisplayMessage,
}: MessageBoxProps) {
  return (
    <Stack
      vertical
      px="tight"
      spacing="-5px"
      background="widgetBackgroundColor"
    >
      <Stack spread center height="20px">
        <Typography type="header5">{title}</Typography>
        <Button
          variant="nav"
          label="close"
          fontSize="small"
          onClick={() => setDisplayMessage(false)}
        />
      </Stack>
      <textarea
        placeholder={placeholder}
        className={styles.MessageBox}
      />
    </Stack>
  );
}
