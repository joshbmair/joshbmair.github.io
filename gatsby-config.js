/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Josh Birlingmair`,
    siteUrl: `https://joshbmair.github.io`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/jb-icon.png",
      },
    },
    "gatsby-plugin-sass",
  ],
};
