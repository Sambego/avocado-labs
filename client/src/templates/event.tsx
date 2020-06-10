import React from 'react'
import { Link, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import { GatsbySeo } from 'gatsby-plugin-next-seo'
import Layout from '../components/layout'
import EventContent from '../components/EventContent/index.js'

type EventPage = {
  data: any
  location: string
}

const EventPage = ({ data, location }: EventPage) => {
  const siteMetadata = data.site.siteMetadata
  const event = data.allContentfulLandingPageEvent.edges[0].node
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
    eventTheme,
    eventDate,
    navigationTime,
    navigationLocation,
    heroTitle,
    heroDescription,
    heroButtonText,
    heroButtonLink,
    subModules,
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
        eventTheme={eventTheme}
        navigationDate={navigationDate}
        navigationTime={navigationTime}
        navigationLocation={navigationLocation}
        heroTitle={heroTitle}
        heroDescription={heroDescription.childMarkdownRemark.rawMarkdownBody}
        heroSideImage={heroSideImage}
        heroButtonText={heroButtonText}
        heroButtonLink={heroButtonLink}
        heroBackgroundImage={heroBackgroundImage}
        subModules={subModules}
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
    allContentfulLandingPageEvent(
      filter: { contentfulid: { eq: $slug }, node_locale: { eq: "en" } }
    ) {
      edges {
        node {
          id
          contentfulid
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
          eventTheme {
            highlightColor
            name
            backgroundImage {
              description
              file {
                url
                fileName
              }
              title
            }
            badgeImage {
              description
              title
              file {
                url
                fileName
              }
            }
            buildingImage {
              description
              title
              file {
                url
              }
            }
            indexCard {
              description
            }
          }
          navigationTime
          navigationLocation
          heroTitle
          heroButtonText
          heroButtonLink
          heroDescription {
            heroDescription
            childMarkdownRemark {
              rawMarkdownBody
            }
          }
          zoomId
          subModules {
            ... on ContentfulEventPageMapSection {
              id
              venueName
              sys {
                contentType {
                  sys {
                    id
                    type
                    linkType
                    contentful_id
                  }
                }
              }
            }
            ... on ContentfulEventPageOverviewSection {
              id
              title
              overviewSubsections {
                title
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
              }
              sys {
                contentType {
                  sys {
                    id
                    type
                    linkType
                    contentful_id
                  }
                }
              }
            }
            ... on ContentfulEventPageScheduleSection {
              id
              title
              schedule {
                hour
                description {
                  description
                }
              }
              sys {
                contentType {
                  sys {
                    id
                    type
                    linkType
                    contentful_id
                  }
                }
              }
            }
            ... on ContentfulEventPageSpeakersSection {
              id
              title
              speakers {
                name
                linkedInAccount
                intro {
                  intro
                }
                githubAccount
                company
                title
                twitterAccount
                picture {
                  file {
                    url
                  }
                }
              }
              sys {
                contentType {
                  sys {
                    id
                    type
                    linkType
                    contentful_id
                  }
                }
              }
            }
            ... on ContentfulEventPageTopicsSection {
              id
              title
              description {
                childMarkdownRemark {
                  rawMarkdownBody
                }
              }
              sys {
                contentType {
                  sys {
                    id
                    type
                    linkType
                    contentful_id
                  }
                }
              }
              topicsSubsections {
                title
                speaker {
                  name
                  company
                }
                description {
                  description
                }
              }
            }
          }
        }
      }
    }
  }
`
