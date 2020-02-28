const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-blog-template-js": hot(preferDefault(require("C:\\repo\\resume\\cryptic-spire-11879\\src\\templates\\blogTemplate.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("C:\\repo\\resume\\cryptic-spire-11879\\src\\pages\\404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("C:\\repo\\resume\\cryptic-spire-11879\\src\\pages\\index.js")))
}

