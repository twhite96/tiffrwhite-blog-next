const YEAR = new Date().getFullYear();

export default {
  footer: (
    <small style={{ display: 'block', marginTop: '8rem' }}>
      <time>2015 - {YEAR}</time> © tiff.
      <a href="https://tiffanywhite.dev/feed.xml">RSS</a>
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
  search: true,
  primaryHue: 197,
  // editText: "Edit this page on GitHub",
  navs: [
    {
      url: "https://github.com/twhite96",
      name: "GitHub",
    },
    {
      url: "https://notes.tiffanywhite.dev",
      name: "Notes",
    },
    {
      url: "https://links.tiffanywhite.dev",
      name: "My stuff",
    },
  ],
};
