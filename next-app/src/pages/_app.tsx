import { ApolloProvider } from '@apollo/client';
import { CacheProvider, EmotionCache } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { NextComponentType } from 'next';
import /* App, */ { AppContext, AppInitialProps, AppProps } from 'next/app';
import Head from 'next/head';

import Footer from 'components/Footer';
import Header from 'components/Header';
import { useClient } from 'lib/apollo';
import createEmotionCache from 'lib/emotion';
import theme from 'lib/theme';
import { UserProvider } from 'lib/user';

const clientSideEmotionCache = createEmotionCache();

export type MyAppProps = AppProps & {
  emotionCache?: EmotionCache;
};
const MyApp: NextComponentType<AppContext, AppInitialProps, MyAppProps> = ({ Component, emotionCache = clientSideEmotionCache, pageProps }) => (
  <CacheProvider value={emotionCache}>
    <Head>
      <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />

      <title>RIT Esports</title>
      <meta name="description" content="An RIT Student Club Run Like a Professional Team" />

      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/logo32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/logo16.png" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="manifest" href="/site.webmanifest" />
    </Head>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ApolloProvider client={useClient(pageProps.incomingCache)}>
        <UserProvider>
          <Header />
          <main>
            <Component {...pageProps} />
          </main>
          <Footer />
        </UserProvider>
      </ApolloProvider>
    </ThemeProvider>
  </CacheProvider>
);

// MyApp.getInitialProps = async (ctx) => {
//   const initialProps = await App.getInitialProps(ctx);
//   return { ...initialProps };
// };

export default MyApp;
