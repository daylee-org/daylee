import { ThemeColors } from 'providers';
import { Typography } from '..';
import styles from './Separator.module.scss';
import { getSize, SpacingType } from 'utils';
import classnames from 'classnames';

interface Props {
  label?: string;
  color?: ThemeColors;
  padding?: SpacingType;
  vertical?: boolean;
}

export function Separator({
  label,
  padding,
  color = 'separatorBackgroundColor',
  vertical,
}: Props) {
  const labelMarkup = label ? (
    <Typography className={styles.Label}>
      {label}
    </Typography>
  ) : null;

  const paddingValue = getSize(padding);

  const classes = classnames(styles.Separator, {
    [styles.vertical]: vertical,
  });

  const lineMarkup = (
    <div
      className={styles.Line}
      style={{
        background: `var(--${color})`,
      }}
    />
  );

  return (
    <div
      className={classes}
      style={{
        paddingLeft: paddingValue,
        paddingRight: paddingValue,
      }}
    >
      {lineMarkup}
      {labelMarkup}
      {lineMarkup}
    </div>
  );
}
