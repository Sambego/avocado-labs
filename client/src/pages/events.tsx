import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import { GatsbySeo } from 'gatsby-plugin-next-seo'
import Layout from '../components/layout'
import {
  HeroStyled,
  Container,
  InnerContent,
  TextContent,
  MediaContent,
  Title,
  Subtitle,
} from '../components/styled.js'
import EventGrid from '../components/EventContent/EventsGrid'
import theme from '../../data/theme.json'
type EventsPage = {
  data: any
  location: string
}

const heroBackground =
  'https://cdn.auth0.com/blog/avocado-labs/avocado-background-home.jpg'
const heroImage = 'https://cdn.auth0.com/blog/avocado-labs/avocado-hello.png'
const wordMark =
  'https://cdn.auth0.com/blog/avocado-labs/Al-wordmark-contra.png'

const EventsPage = ({ data, location }: EventsPage) => {
  const siteMetadata = data.site.siteMetadata
  const events = data.allEventsJson.edges
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const upcoming = events.filter(
    (event) => new Date(event.node.eventDate) >= today
  )
  const past = events.filter((event) => new Date(event.node.eventDate) < today)
  return (
    <Layout location={location}>
      <Helmet title={siteMetadata.title} />
      <GatsbySeo
        title={siteMetadata.title}
        description={siteMetadata.siteDescription}
        canonical={siteMetadata.siteUrl}
        openGraph={{
          url: siteMetadata.siteUrl,
          title: siteMetadata.title,
          description: siteMetadata.description,
          images: [
            {
              url: siteMetadata.ogImage,
              alt: siteMetadata.title,
            },
          ],
          site_name: siteMetadata.title,
        }}
        twitter={{
          handle: siteMetadata.twitterCreator,
          site: siteMetadata.twitterSite,
          cardType: 'summary_large_image',
        }}
      />
      <HeroStyled bgImage={heroBackground}>
        <Container>
          <InnerContent>
            <TextContent>
              <img src={wordMark} alt="Avocado Labs - Online Talks" />
              <Subtitle>Take a look at are past and upcoming events!</Subtitle>
            </TextContent>
            <MediaContent>
              <img src={heroImage} alt="Avocado Labs - Online Talks" />
            </MediaContent>
          </InnerContent>
        </Container>
      </HeroStyled>

      <Container>
        {upcoming.length > 0 && (
          <>
            <h2>Upcoming</h2>
            <EventGrid events={upcoming} theme={theme} />
          </>
        )}
        <h2>Past</h2>
        <EventGrid events={past} past theme={theme} />
      </Container>
    </Layout>
  )
}

export default EventsPage

export const pageQuery = graphql`
  query EventsQuery {
    site {
      siteMetadata {
        title
        siteUrl
        description
        ogImage
        twitterCreator
        twitterSite
      }
    }
    allEventsJson(sort: { order: ASC, fields: eventDate }) {
      edges {
        node {
          id
          contentfulid
          slug
          eventDate
          title
        }
      }
    }
  }
`
