import Document, { Html, Head, Main, NextScript } from "next/document";
import Link from "next/link";

class UngarDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  render() {
    return (
      <Html>
        <Head>
          <link rel="shortcut icon" href="/assets/Ungar_Website_Icon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default UngarDocument;
