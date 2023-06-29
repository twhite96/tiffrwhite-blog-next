const YEAR = new Date().getFullYear();

export default {
  footer: (
    <small style={{ display: 'block', marginTop: '8rem' }}>
      <time>2015 - {YEAR}</time> © tiff.
      <a href="/atom">RSS</a>
      <style jsx>{`
        a {
          float: right;
        }
        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }
      `}</style>
    </small>
  ),

  head: ({ title, meta }) => (
    <>
      <meta name='robots' content='follow, index' />
      <meta name='description' content={meta.description} />
      <meta property='og:site_name' content={meta.title} />
      <meta property='og:description' content={meta.description} />
      <meta property='og:title' content={meta.title} />
      <meta property='og:image' content={meta.image} />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={meta.title} />
      <meta name='twitter:description' content={meta.description} />
      <meta name='twitter:image' content={meta.image} />
      <link rel='favicon' href='/favicon.svg' />
    </>
  ),
  readMore: "Read More →",
  darkMode: true,
  // editText: "Edit this page on GitHub",
  navs: [
    {
      url: "/",
      name: "the archives",
    },
  ],
};
