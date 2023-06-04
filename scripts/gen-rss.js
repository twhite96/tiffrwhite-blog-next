const Feed = require("feed").Feed;

const feed = new Feed({
  title: "tiff's blog",
  description: "my very opinionated thoughts on software development",
  id: "https://tiffanywhite.dev/",
  link: "https://tiffanywhite.dev/",
  language: "en", // optional, used only in RSS 2.0, possible values: http://www.w3.org/TR/REC-html40/struct/dirlang.html#langcodes
  image: "http://example.com/image.png",
  favicon: "http://example.com/favicon.ico",
  copyright: "All rights reserved 2013, John Doe",
  updated: new Date(2013, 6, 14), // optional, default = today
  generator: "awesome", // optional, default = 'Feed for Node.js'
  feedLinks: {
    json: "https://tiffanywhite.dev/json",
    rss2: "https://tiffanywhite.dev/atom",
  },
  author: {
    name: "tiff",
    email: "tiffany@tiffanywhite.dev",
    link: "https://hachyderm.io/@tiff",
  },
});

const posts = [];

posts.forEach((post) => {
  feed.addItem({
    title: post.title,
    id: post.url,
    link: post.url,
    description: post.description,
    content: post.content,
    author: "tiff",
    date: post.date,
    image: post.image,
  });
});

feed.rss2();
feed.json1();
console.log(feed.rss2());
// Output: RSS 2.0

console.log(feed.atom1());
// Output: Atom 1.0

console.log(feed.json1());
// Output: JSON Feed 1.0
