export default {
  footer: <p>© tiff 2015 - {new Date().getFullYear()}</p>,
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
    </>
  ),
  readMore: "Read More →",
  postFooter: null,
  darkMode: true,
  search: true,
  primaryHue: 197,
  navs: [
    {
      url: "/index",
      name: "Me",
    },
    {
      url: "/projects",
      name: "Projects",
    },
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
  logo: "https://res.cloudinary.com/twhiteblog/image/upload/v1685138249/favicon_zvkwc8.svg",
};
