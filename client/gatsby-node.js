const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
    const { createPage, createRedirect } = actions
    const toSnakeCase = (string) =>
        string.replace(/\s-\s/g, '-').replace(/\s/g, '-').toLowerCase()
    const generateRecordingSlug = (title) =>
        encodeURIComponent(toSnakeCase(title))

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
                title
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
                        `/recordings/${generateRecordingSlug(video.node.title)}/`
                    )
                    createPage({
                        path: `/recordings/${generateRecordingSlug(video.node.title)}/`,
                        component: videoPage,
                        context: {
                            id: video.node.id,
                            slug: generateRecordingSlug(video.node.title),
                        },
                    })
                    console.log(createRedirect)
                    createRedirect({
                        fromPath: `/recordings/${video.node.id}/`,
                        toPath: `/recordings/${generateRecordingSlug(video.node.title)}/`,
                        isPermanent: true,
                    })
                })
            })
        )
    })
}