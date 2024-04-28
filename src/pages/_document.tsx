// pages/_document.js

import NextDocument, { Html, Main, NextScript, DocumentContext, Head } from 'next/document';

class Document extends NextDocument {
  static async getInitialProps(ctx: DocumentContext) {
    return NextDocument.getInitialProps(ctx);
  }

  render() {
    const { locale } = this.props.__NEXT_DATA__;
    const dir = locale === 'fa' ? 'rtl' : 'ltr';
    return (
      <Html dir={dir} lang={locale}>
        <Head>
          <meta
            name="google-site-verification"
            content="HA633kX6AdOBTTLP2zddEr9ewWO02ns-CQtcDbkkO8c"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
