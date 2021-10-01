import classNames from 'classnames';
import { useTheme } from 'providers/ThemeProvider';

import styles from './ThemeToggle.module.scss';

// Credits to [Ryosuke](https://codepen.io/whoisryosuke/pen/gObPjWW)
export function ThemeToggle() {
  const { isLightMode, toggleLightMode } = useTheme();

  return (
    <div className={styles.Container}>
      <label
        className={styles.switch}
        htmlFor="checkbox"
        title="Change color scheme to dark mode"
      >
        <input
          onChange={toggleLightMode}
          type="checkbox"
          id="checkbox"
          checked={isLightMode}
        />
        <div
          className={classNames(
            styles.slider,
            styles.round,
          )}
        ></div>
        <div className={styles.toggleMoon}></div>
        <div className={styles.toggleSun}></div>
      </label>
    </div>
  );
}
