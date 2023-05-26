export default {
  footer: <p>© tiff 2015 - {new Date().getFullYear()}</p>,
  head: ({ title, meta }) => (
    <>
      {meta.description && (
        <meta name='description' content={meta.description} />
      )}
      {meta.tag && <meta name='keywords' content={meta.tag} />}
      {meta.author && <meta name='author' content={meta.author} />}
    </>
  ),
  readMore: "Read More →",
  postFooter: null,
  darkMode: false,
  navs: [
    // {
    //   url: "/projects",
    //   name: "Projects",
    // },
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
