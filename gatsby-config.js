const config = require("./src/data/config");
require("dotenv").config({
	path: `.env`,
});
module.exports = {
  pathPrefix: '/portfolio',
  siteMetadata: {
      title: `Hardik Naik`,
    siteUrl: `https://mehardiknaik.github.io`
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
  },
  {
    resolve: "gatsby-source-graphql",
    options: {
      typeName: "GitHub",
      fieldName: "github",
      url: "https://api.github.com/graphql",
      headers: {
        Authorization: `bearer ${process.env.PORTFOLIO_GITHUB_TOKEN}`,
      },
      fetchOptions: {},
    },
  },]
};