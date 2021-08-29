import {
  useState,
  createContext,
  useContext,
  useCallback,
} from 'react';
import { noop } from 'utils/noop';

interface Theme {
  mainBackgroundColor: string;
  menuBackgroundColor: string;
  separatorBackgroundColor: string;
  widgetBackgroundColor: string;
  gradient: string;

  mainTextColor: string;
  secondaryTextColor: string;
  disabledTextColor: string;

  borderRadius: string;
}

const FONT = {
  URL: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap',
  NAME: 'Montserrat',
};

const DARK_THEME: Theme = {
  mainBackgroundColor: '#212124',
  menuBackgroundColor: '#18181A',
  separatorBackgroundColor: '#2F2F2F',
  widgetBackgroundColor: '#2C2C30',
  gradient:
    'linear-gradient(242.9deg, #8E80F9 15.28%, #BE7BF6 116.16%)',

  mainTextColor: '#FFFFFF',
  secondaryTextColor: '#EBEBEB',
  disabledTextColor: '#888888',

  borderRadius: '15px',
};

const LIGHT_THEME: Theme = {
  mainBackgroundColor: '#FFFFFF',
  menuBackgroundColor: '#F5F5F5',
  separatorBackgroundColor: '#EBEBEB',
  widgetBackgroundColor: '#F1F1F3',
  gradient:
    'linear-gradient(242.9deg, #8E80F9 15.28%, #BE7BF6 116.16%)',

  mainTextColor: '#18181A',
  secondaryTextColor: '#2F2F2F',
  disabledTextColor: '#888888',

  borderRadius: '15px',
};

const ThemeContext = createContext<{
  toggleLightMode(): void;
  isLightMode: boolean;
}>({
  toggleLightMode: noop,
  isLightMode: false,
});

interface Props {
  children: React.ReactChild;
}

export function ThemeProvider({ children }: Props) {
  const [isLightMode, isLightModeSet] = useState(false);

  const variables = Object.entries(
    isLightMode ? LIGHT_THEME : DARK_THEME,
  )
    .map(([key, value]) => `--${key}: ${value};`)
    .join('\n');

  const toggleLightMode = useCallback(
    function () {
      isLightModeSet((prev) => !prev);
    },
    [isLightModeSet],
  );

  return (
    <ThemeContext.Provider
      value={{ toggleLightMode, isLightMode }}
    >
      {children}
      <style suppressHydrationWarning scoped>{`
        @import url('${FONT.URL}');
        
        :root {
          ${variables}
        }

        body {
          font-family: '${FONT.NAME}', sans-serif;
          background-color: var(--mainBackgroundColor);
        }
      `}</style>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const themeContext = useContext(ThemeContext);
  return themeContext;
}
