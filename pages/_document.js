import Document, { Html, Head, Main, NextScript } from "next/document";



class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    const meta = {
      title: "tiff's blog",
      description: "my very opinionated thoughts on software development",
      image:
        "https://res.cloudinary.com/twhiteblog/image/upload/v1674171752/factoryofsadness_photorealistic_cat_in_space_suit_c2ad6c5b-49b4-4e59-9eff-27931a300a37_eflxnp.png",
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
