import Head from 'next/head';

interface Props {
  title?: string;
  description?: string;
  iconPath?: string;
}

export function TabInfo({
  title = 'Daylee',
  description = 'Daylee web app',
  iconPath = '/favicon.ico',
}: Props) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href={iconPath} />
      <meta property="og:image" content={iconPath} />
    </Head>
  );
}
