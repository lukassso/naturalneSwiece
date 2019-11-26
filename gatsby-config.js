module.exports = {
  siteMetadata: {
    title: `Natural Lukas`,
    description: `Website for my sister in law`,
    author: `@lukassso`,
  },
  plugins: [
    
   
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images/`,
      },
    },
  
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
