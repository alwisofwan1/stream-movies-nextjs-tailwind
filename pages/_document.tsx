/* eslint-disable react/react-in-jsx-scope */
import Document, { Html, Head, Main, NextScript } from 'next/document'
// import { BASE_TITLE } from 'constants/globalVariable';

// import { GA_TRACKING_ID } from 'lib/gtag';
export default class CustomDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="UTF-8" />
          <meta name={`Stream Movie `} content={`Stream movie for  Apps`} />
          <meta
            name="description"
            content={`My stream video using next js, tailwindcss and typescript.`}
          />
          <meta
            property="og:title"
            content={`My stream video using next js, tailwindcss and typescript`}
            key="ogtitle"
          />
          {/* <meta
            property="og:image"
            content="/assets/images/banner-desktop.jpg"
            key="ogimage"
          /> */}
          {/* <meta
            property="image"
            content="/assets/images/math/banner-desktop.jpg"
          /> */}
          <meta
            property="og:site_name"
            content={`Stream Video`}
            key="ogsitename"
          />
          <link rel="icon" href="/favicon.png" />

          {/* <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          /> */}
          {/* <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `
            }}
          /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
