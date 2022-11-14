// eslint-disable mex-len
import Document, { Head, Html, Main, NextScript } from 'next/document';
import Script from 'next/script'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="shortcut icon" href="/favicon.svg" />
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true' />
          <link href='https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;0,1000;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900;1,1000&display=swap' rel='stylesheet' />

          {/* Global site tag (gtag.js) - Google Analytics */}
          <Script async src="https://www.googletagmanager.com/gtag/js?id=G-21V0TCK3VD"></Script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-21V0TCK3VD', { page_path: window.location.pathname });
              `,
            }}
          />
        </Head>
        <body className='
          bg-background-light
          text-color-dark
          dark:bg-background-dark
          dark:text-color-light
        '>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
