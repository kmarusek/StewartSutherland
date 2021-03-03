const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: `Stewart Sutherland`,
    description: `Stewart Sutherland`,
    author: `@AboveMediaTeam`,
  },
  plugins: [
    'gatsby-plugin-tailwindcss',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Stewart Sutherland',
        short_name: 'starter',
        start_url: '/',
        display: 'minimal-ui',
        // This path is relative to the root of the site. 
        background_color: `#E61D30`,
        theme_color: `#E61D30`,
        icon: 'src/assets/images/SSLogo.png', 
      },
    },
    'gatsby-plugin-offline',
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, 'assets', `images`),
      },
    },
    { 
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true, // Print removed selectors and processed file names
        // develop: true, // Enable while using `gatsby develop`
        tailwind: true, // Enable tailwindcss support
        // whitelist: ['whitelist'], // Don't remove this selector
        // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
        ignore: [
          '/node_modules/react-multi-carousel/lib/styles.css',
          '/node_modules/rc-table/assets/index.css',
        ],
        // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/, 
        },
      },
    },
    'gatsby-plugin-use-query-params',
    'gatsby-plugin-remove-trailing-slashes',
  ],
}
