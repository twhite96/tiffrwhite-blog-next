const withNextra = require('nextra')({
  theme: 'nextra-theme-blog',
  themeConfig: './theme.config.jsx'
})
 

const { littlefoot } = require("littlefoot");

module.exports = littlefoot({
  littlefoot: littlefoot(),
});
module.exports = withNextra()
 
// If you have other Next.js configurations, you can pass them as the parameter:
// module.exports = withNextra({ /* other next.js config */ })
