module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "A Gatsby Site by Robert Radley",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
    "gatsby-plugin-mdx",
  ],
};
