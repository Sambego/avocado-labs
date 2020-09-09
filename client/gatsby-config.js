require('dotenv').config()

module.exports = {
    siteMetadata: {
        title: `Avocado Labs`,
        siteUrl: `https://avocadolabs.dev`,
        description: `Avocado Labs is a way to keep people connected online and have access to quality talks.`,
        ogImage: `https://cdn.auth0.com/website/avocado-labs/twitter-card.png`,
        twitterCreator: '@Avocado_Labs',
        twitterSite: '@Avocado_Labs',
    },
    plugins: [
        'gatsby-transformer-remark',
        'gatsby-transformer-sharp',
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sharp',
        'gatsby-plugin-sitemap',
        'gatsby-plugin-next-seo',
        'gatsby-plugin-client-side-redirect',
        {
            resolve: `gatsby-source-youtube`,
            options: {
                playlistId: process.env.GATSBY_YOUTUBE_PLAYLIST_ID,
                apiKey: process.env.GATSBY_YOUTUBE_API_KEY,
                maxVideos: 50, // Defaults to 50
            },
        },
        {
            resolve: 'gatsby-source-contentful',
            options: {
                spaceId: process.env.GATSBY_CONTENTFUL_SPACE,
                accessToken: process.env.GATSBY_CONTENFUL_DELIVERY_ACCESS_TOKEN,
                forceFullSync: true,
            },
        },
        {
            resolve: 'gatsby-plugin-react-svg',
        },
        {
            resolve: `gatsby-plugin-styled-components`,
        },
        {
            resolve: 'gatsby-plugin-google-tagmanager',
            options: {
                id: process.env.GATSBY_GTM_ID,
            },
        },
    ],
}