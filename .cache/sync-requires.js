const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("C:\\dev\\repo\\Resume-Website\\classic_journey_resume\\src\\pages\\404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("C:\\dev\\repo\\Resume-Website\\classic_journey_resume\\src\\pages\\about.js"))),
  "component---src-pages-footer-js": hot(preferDefault(require("C:\\dev\\repo\\Resume-Website\\classic_journey_resume\\src\\pages\\footer.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("C:\\dev\\repo\\Resume-Website\\classic_journey_resume\\src\\pages\\index.js"))),
  "component---src-pages-page-2-js": hot(preferDefault(require("C:\\dev\\repo\\Resume-Website\\classic_journey_resume\\src\\pages\\page-2.js")))
}

