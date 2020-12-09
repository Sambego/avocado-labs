const Promise = require('bluebird')
const path = require('path')
const fs = require('fs')

exports.createPages = async({ graphql, actions }) => {
    const { createPage, createRedirect } = actions
    const toSnakeCase = (string) =>
        string.replace(/\s-\s/g, '-').replace(/\s/g, '-').toLowerCase()
    const generateRecordingSlug = (title) =>
        encodeURIComponent(toSnakeCase(title))

    const createEventPages = (events) => {
        const eventPage = path.resolve('./src/templates/event.tsx')

        events.forEach((event) => {
            console.log('---- Creating event page:', `/events/${event.node.slug}/`)
            createPage({
                path: `/events/${event.node.slug}/`,
                component: eventPage,
                context: {
                    slug: event.node.slug,
                },
            })
        })
    }

    const createVideoPages = (videos) => {
        const videoPage = path.resolve('./src/templates/recording.tsx')

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

            // Create  redirects for old slugs using the ID to the slugs using the title
            createRedirect({
                fromPath: `/recordings/${video.node.id}/`,
                toPath: `/recordings/${generateRecordingSlug(video.node.title)}/`,
                isPermanent: true,
            })
        })
    }

    const { data, errors } = await graphql(`
    {
      allEventsJson {
        edges {
          node {
            slug
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
  `)

    if (errors) {
        console.error(errors)
    }

    // Create all event pages
    createEventPages(data.allEventsJson.edges)

    // Create all video pages
    createVideoPages(data.allYoutubeVideo.edges)
}