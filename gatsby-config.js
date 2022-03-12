const config = require("./src/data/config");
require("dotenv").config({
	path: `.env`,
});
module.exports = {
  siteMetadata: {
      title: `new`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-styled-components", "gatsby-plugin-image", "gatsby-plugin-react-helmet", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      name: config.defaultTitle,
      short_name: "starter",
      start_url: "/",
      background_color: config.backgroundColor,
      theme_color: config.themeColor,
      display: "minimal-ui",
      icon: "./static/favicon/favicon-512.png",
    }
  }]
};