import { Button, Stack, Typography } from '..';
import classnames from 'classnames';
import styles from './MessageBox.module.scss';
interface MessageBoxProps {
  title?: string;
  closeOption?: boolean;
  placeholder: string;
  smallBox?: boolean;
  displayMessage?: boolean;
  setDisplayMessage?: any;
}

export function MessageBox({
  title,
  closeOption,
  placeholder,
  smallBox,
  setDisplayMessage,
}: MessageBoxProps) {
  const classes = classnames(styles.MessageBox, {
    [styles.smallBox]: smallBox,
  });

  return (
    <Stack
      vertical
      px={smallBox ? 'tight' : ''}
      spacing="5px"
      background="widgetBackgroundColor"
      height={smallBox ? '100px' : '90%'}
      py="tight"
    >
      {closeOption ? (
        <Stack spread center height="10px">
          <Typography type="header5">{title}</Typography>
          <Button
            variant="nav"
            label="X"
            fontSize="small"
            onClick={() => setDisplayMessage(false)}
          />
        </Stack>
      ) : null}
      <textarea
        placeholder={placeholder}
        className={classes}
      />
    </Stack>
  );
}
