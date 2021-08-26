import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { GraphqlProvider, ThemeProvider } from 'providers';

export default function App({
  Component,
  pageProps,
}: AppProps) {
  return (
    <ThemeProvider>
      <GraphqlProvider>
        <Component {...pageProps} />
      </GraphqlProvider>
    </ThemeProvider>
  );
}
