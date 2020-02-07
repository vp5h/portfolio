require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
     
     siteTitle: `Pravesh Vyas`,
    
    siteHeadline: `Shifting Paradigms in web Experiences`,
    siteUrl: `https://www.praveshvyas.ml`,
    siteDescription: `Shifting Paradigms in web Experiences`,
    siteLanguage: `en`,
    siteImage: `/cropped-YBM-v5-small.png`,
    author: `Pravesh Vyas`,
    siteTitleAlt: `Pravesh Vyas`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-cara`,
      // See the theme's README for all available options
      options: {},
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Pravesh Vyas, Really?`,
        short_name: `Cara`,
        description: `Shifting Paradigms in web Experiences`,
        start_url: `/`,
        background_color: `#141821`,
        theme_color: `#000000`,
        display: `standalone`,
        icons: [
          {
            src: `/cropped-YBM-v5-small lgo.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/cropped-YBM-v5-small.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
  ],
}
