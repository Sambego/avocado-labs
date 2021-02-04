const Promise = require('bluebird')
const path = require('path')
const fs = require('fs')
const slugify = (string) => {
    // Replace all special characters
    var map = {
        '-': /(\/|\\|\||\!|\?|\.|\,|\<|\>|\:|\_|\'|\")/,
        'a': 'á|à|ã|â|À|Á|Ã|Â',
        'e': 'é|è|ê|É|È|Ê',
        'i': 'í|ì|î|Í|Ì|Î',
        'o': 'ó|ò|ô|õ|Ó|Ò|Ô|Õ',
        'u': 'ú|ù|û|ü|Ú|Ù|Û|Ü',
        'c': 'ç|Ç',
        'n': 'ñ|Ñ',
        'ss': 'ß',
        // Emoji
        '': '(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe23\u20d0-\u20f0]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe23\u20d0-\u20f0]|\ud83c[\udffb-\udfff])?)*'
    };

    for (var pattern in map) {
        string = string.replace(new RegExp(map[pattern], 'g'), pattern);
    };

    // snake-case
    // Replace all spaces, consecutive dashes, and convert all uppercase to lowercase
    return encodeURIComponent(string.replace(/(\s-\s)/g, '-').replace(/\s/g, '-').replace(/-{2,}/g).toLowerCase())
};

exports.createPages = async({ graphql, actions }) => {
    const { createPage, createRedirect } = actions
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
                `/recordings/${slugify(video.node.title)}/`
            )
            createPage({
                path: `/recordings/${slugify(video.node.title)}/`,
                component: videoPage,
                context: {
                    id: video.node.id,
                    slug: slugify(video.node.title),
                },
            })

            // Create  redirects for old slugs using the ID to the slugs using the title
            createRedirect({
                fromPath: `/recordings/${video.node.id}/`,
                toPath: `/recordings/${slugify(video.node.title)}/`,
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