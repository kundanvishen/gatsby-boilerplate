module.exports = {
  siteMetadata: {
    title: `Hoomans blog`,
    siteUrl: `https://www.hoomans.tech`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/hoomans_logo.png',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `blog`,
        path: `${__dirname}/blog`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-mdx`,
    // {
    //   resolve: `gatsby-plugin-mdx`,
    //   options: {
    //     gatsbyRemarkPlugins: [
    //       {
    //         resolve: `gatsby-remark-images`,
    //         options: {
    //           maxWidth: 590,
    //         },
    //       },
    //     ],
    //   },
    // },
  ],
}
