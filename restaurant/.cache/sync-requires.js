const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/emmanuellaaninye/restaurant-themes-gatsby/restaurant/.cache/dev-404-page.js"))),
  "component---gatsby-theme-restaurant-workspaces-src-pages-landing-page-js": hot(preferDefault(require("/Users/emmanuellaaninye/restaurant-themes-gatsby/gatsby-theme-restaurant-workspaces/src/pages/landing-page.js"))),
  "component---gatsby-theme-restaurant-workspaces-src-pages-theme-page-js": hot(preferDefault(require("/Users/emmanuellaaninye/restaurant-themes-gatsby/gatsby-theme-restaurant-workspaces/src/pages/theme-page.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/emmanuellaaninye/restaurant-themes-gatsby/restaurant/src/pages/index.js")))
}

