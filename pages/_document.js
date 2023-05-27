import Document, { Html, Head, Main, NextScript } from "next/document";



class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    const meta = {
      title: "Next.js Blog Starter Kit",
      description: "Clone and deploy your own Next.js portfolio in minutes.",
      image:
        "https://assets.vercel.com/image/upload/q_auto/front/vercel/dps.png",
    };

    return (
      <Html lang='en'>
        <Head>
          <meta name='robots' content='follow, index' />
          <meta name='description' content={meta.description} />
          <meta property='og:site_name' content={meta.title} />
          <meta property='og:description' content={meta.description} />
          <meta property='og:title' content={meta.title} />
          <meta property='og:image' content={meta.image} />
          <meta name='twitter:card' content='summary_large_image' />
          <meta name='twitter:site' content='@yourname' />
          <meta name='twitter:title' content={meta.title} />
          <meta name='twitter:description' content={meta.description} />
          <meta name='twitter:image' content={meta.image} />
          <link
            rel='stylesheet'
            href='https://unpkg.com/littlefoot/dist/littlefoot.css'
          />
          <script
            src='https://unpkg.com/littlefoot/dist/littlefoot.js'
            type='application/javascript'
          ></script>
          <script>littlefoot.littlefoot()</script>
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
