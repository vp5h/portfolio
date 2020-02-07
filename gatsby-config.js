require(`dotenv`).config({
  path: `.env`,
})

module.exports = ({ basePath = `/`, mdx = true }) => ({
  siteMetadata: {
    siteTitle: `Pravesh Vyas`,
    siteTitleAlt: `Paradigm shift in Web Experinces `,
    siteHeadline: `Web DEv`,
    siteUrl: `https://www.praveshvyas.ml`,
    siteDescription: `Paradigm shift in Web Experinces`,
    siteLanguage: `en`,
    siteImage: `/cropped-YBM-v5-small.png`,
    author: `Pravesh Vyas`,
    basePath,
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
        short_name: `PRV`,
        description: `Shifting Paradigms in web Experiences`,
        start_url: `/`,
        background_color: `#141821`,
        theme_color: `#f6ad55`,
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
