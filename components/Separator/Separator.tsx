import { ThemeColors } from 'providers';
import { Typography } from '..';
import styles from './Separator.module.scss';
import { getSize, SpacingType } from 'utils';

interface Props {
  label?: string;
  color?: ThemeColors;
  padding?: SpacingType;
}

export function Separator({
  label,
  padding,
  color = 'separatorBackgroundColor',
}: Props) {
  const labelMarkup = label ? (
    <Typography className={styles.Label}>
      {label}
    </Typography>
  ) : null;

  const paddingValue = getSize(padding);

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
      className={styles.Separator}
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
