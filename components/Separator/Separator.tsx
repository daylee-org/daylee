import { ThemeColors } from 'providers';
import { Typography } from '..';
import styles from './Separator.module.scss';

interface Props {
  label?: string;
  color?: ThemeColors;
}

export function Separator({
  label,
  color = 'separatorBackgroundColor',
}: Props) {
  const labelMarkup = label ? (
    <Typography className={styles.Label}>
      {label}
    </Typography>
  ) : null;

  const lineMarkup = (
    <div
      className={styles.Line}
      style={{ background: `var(--${color})` }}
    />
  );

  return (
    <div className={styles.Separator}>
      {lineMarkup}
      {labelMarkup}
      {lineMarkup}
    </div>
  );
}
