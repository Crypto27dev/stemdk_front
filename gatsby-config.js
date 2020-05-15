module.exports = {
  siteMetadata: {
    title: `Dakahlia STEM School`,
    description: `Official website for Dakahlia STEM School based in Dakahlia Governate, Egypt.`,
    author: `@ahmedhossam01`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data/`,
      },
    },
  ],
}
