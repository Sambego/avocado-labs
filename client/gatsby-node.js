const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions

    return new Promise((resolve, reject) => {
        const eventPage = path.resolve('./src/templates/event.tsx')
        const videoPage = path.resolve('./src/templates/recording.tsx')
        resolve(
            graphql(`
        {
          allContentfulLandingPageEvent(filter: { node_locale: { eq: "en" } }) {
            edges {
              node {
                contentfulid
              }
            }
          }
          allYoutubeVideo {
            edges {
              node {
                id
              }
            }
          }
        }
      `).then(({ data, errors }) => {
                if (errors) {
                    console.log(errors)
                    reject(errors)
                }

                // Create all event pages
                const events = data.allContentfulLandingPageEvent.edges
                events.forEach((event) => {
                    console.log(
                        '---- Creating event page:',
                        `/events/${event.node.contentfulid}/`
                    )
                    createPage({
                        path: `/events/${event.node.contentfulid}/`,
                        component: eventPage,
                        context: {
                            slug: event.node.contentfulid,
                        },
                    })
                })

                // Create all video pages
                const videos = data.allYoutubeVideo.edges
                videos.forEach((video) => {
                    console.log(
                        '---- Creating recording page:',
                        `/recordings/${video.node.id}/`
                    )
                    createPage({
                        path: `/recordings/${video.node.id}/`,
                        component: videoPage,
                        context: {
                            slug: video.node.id,
                        },
                    })
                })
            })
        )
    })
}