import createEmotionServer from '@emotion/server/create-instance';
import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';

import createEmotionCache from 'lib/emotion';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const cache = createEmotionCache();
    const { extractCriticalToChunks } = createEmotionServer(cache);

    const originalRenderPage = ctx.renderPage;
    ctx.renderPage = () => originalRenderPage({
      // @ts-expect-error we know App takes in emotionCache
      enhanceApp: (App) => (props) => <App emotionCache={cache} {...props} />, // eslint-disable-line react/display-name
    });
    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          {extractCriticalToChunks(initialProps.html).styles.map((style) => (
            // eslint-disable-next-line react/no-danger
            <style key={style.key} data-emotion={`${style.key} ${style.ids.join(' ')}`.trim()} dangerouslySetInnerHTML={{ __html: style.css }} />
          ))}
        </>
      ),
    };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://hooli-drive.sfo2.digitaloceanspaces.com" />
          <link rel="preload" as="style" href="https://hooli-drive.sfo2.digitaloceanspaces.com/website/public/fonts/Industry/Industry.css" />
          <link rel="stylesheet" href="https://hooli-drive.sfo2.digitaloceanspaces.com/website/public/fonts/Industry/Industry.css" />
          <link rel="preload" as="style" href="https://hooli-drive.sfo2.digitaloceanspaces.com/website/public/fonts/ProximaNova/ProximaNova.css" />
          <link rel="stylesheet" href="https://hooli-drive.sfo2.digitaloceanspaces.com/website/public/fonts/ProximaNova/ProximaNova.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
