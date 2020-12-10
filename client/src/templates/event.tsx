import React from 'react'
import { Link, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import { GatsbySeo } from 'gatsby-plugin-next-seo'
import Layout from '../components/layout'
import EventContent from '../components/EventContent/index.js'
import theme from '../../data/theme.json'

type EventPage = {
  data: any
  location: string
}

const EventPage = ({ data, location }: EventPage) => {
  const siteMetadata = data.site.siteMetadata
  const event = data.allEventsJson.edges[0].node
  const meta = {
    title: (event.metaTags && event.metaTags.title) || siteMetadata.title,
    description: {
      description:
        event.metaTags && event.metaTags.description
          ? event.metaTags.description.description
          : siteMetadata.description,
    },
    ogImage: (event.metaTags && event.metaTags.ogImage) || siteMetadata.ogImage,
    twitterCreator:
      (event.metaTags && event.metaTags.twitterCreator) ||
      siteMetadata.twitterCreator,
    twitterSite:
      (event.metaTags && event.metaTags.twitterSite) ||
      siteMetadata.twitterSite,
  }
  const {
    eventDate,
    navigationTime,
    navigationLocation,
    heroTitle,
    heroDescription,
    heroButtonText,
    heroButtonLink,
    parts,
    zoomId,
  } = event
  const navigationDate = event.eventDate
  const heroBackgroundImage = ''
  const heroSideImage = ''
  return (
    <Layout location={location}>
      <Helmet title={siteMetadata.title} />
      <GatsbySeo
        title={meta.title}
        description={meta.description.description}
        canonical={`${siteMetadata.siteUrl}/events/${event.contentfulid}`}
        openGraph={{
          url: `${siteMetadata.siteUrl}/events/${event.contentfulid}`,
          title: meta.title,
          description: meta.description.description,
          images: [
            {
              url: meta.ogImage,
              alt: meta.title,
            },
          ],
          site_name: siteMetadata.siteTitle,
        }}
        twitter={{
          handle: meta.twitterCreator,
          site: meta.twitterSite,
          cardType: 'summary_large_image',
        }}
      />
      <EventContent
        eventTheme={theme}
        navigationDate={navigationDate}
        navigationTime={navigationTime}
        navigationLocation={navigationLocation}
        heroTitle={heroTitle}
        heroDescription={heroDescription.heroDescription}
        heroSideImage={heroSideImage}
        heroButtonText={heroButtonText}
        heroButtonLink={heroButtonLink}
        heroBackgroundImage={heroBackgroundImage}
        subModules={parts}
        eventDate={eventDate}
        zoomId={zoomId}
      />
    </Layout>
  )
}

export default EventPage

export const pageQuery = graphql`
  query EventBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        description
        ogImage
        siteUrl
        ogImage
        twitterCreator
        twitterSite
      }
    }
    allEventsJson(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          id
          contentfulid
          slug
          metaTags {
            title
            description {
              description
            }
            ogImage
            twitterSite
            twitterCreator
          }
          eventDate
          navigationTime
          navigationLocation
          heroTitle
          heroButtonText
          heroButtonLink
          heroDescription {
            heroDescription
          }
          zoomId
          parts {
            title
            type
            speakers {
              company
              githubAccount
              linkedInAccount
              intro {
                intro
              }
              name
              picture {
                file {
                  url
                }
              }
              title
              twitterAccount
            }
            topicsSubsections {
              description {
                description
              }
              speaker {
                company
                name
              }
              title
            }
            overviewSubsections {
              description {
                childMarkdownRemark {
                  rawMarkdownBody
                }
              }
              image {
                file {
                  url
                }
              }
              title
            }
            schedule {
              hour
              description {
                description
              }
            }
          }
        }
      }
    }
  }
`
