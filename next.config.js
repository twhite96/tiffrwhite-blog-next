import littlefoot from "littlefoot";
import "littlefoot/dist/littlefoot.css";

const withNextra = require("nextra")({
  theme: "nextra-theme-blog",
  themeConfig: "./theme.config.jsx",
});

module.exports = withNextra({
  littlefoot: littlefoot
});

// If you have other Next.js configurations, you can pass them as the parameter:
// module.exports = withNextra({ /* other next.js config */ })
