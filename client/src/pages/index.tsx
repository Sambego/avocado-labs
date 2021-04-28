import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import { GatsbySeo } from 'gatsby-plugin-next-seo'
import Layout from '../components/layout'
import {
  HeroStyled,
  Container,
  InnerContent,
  InnerContentRow,
  TextContent,
  MediaContent,
  Title,
  Subtitle,
  ModalTitle,
} from '../components/styled.js'
import EventGrid from '../components/EventContent/EventsGrid'
import theme from '../../data/theme.json'
import TeamItem from '../components/HomeContent/TeamItem'

type EventsPage = {
  data: any
  location: string
}

const heroBackground =
  '//images.ctfassets.net/kbkgmx9upatd/EdgWFyaNxF6DdOu12Ti36/da9f0e1b0c50b90cacdccd43d091da47/Background.png'
const heroImage =
  '//images.ctfassets.net/kbkgmx9upatd/4kBiKcxdsFx43DYA6hOPXy/be322ed50aa235e7b80236992393b1a6/Logo_Black-Sticker_Vertical2.png'

const HomePage = ({ data, location }: EventsPage) => {
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
              <Title>Avocado Labs - Online Talks</Title>
              <Subtitle>
                Avocado Labs is a way to keep people connected online and have
                access to quality talks. There will be live talks, which will
                then be uploaded, where expert speakers can share their
                knowledge. After each talk there will be a 5min Q&A where our
                speakers will be able to answer any related questions you may
                have. These episodes will be hosted and moderated by our Auth0
                developer advocates to ensure a safe and friendly environment.
              </Subtitle>
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
      </Container>
      <HeroStyled bgImage={heroBackground}>
        <Container>
          <Title>Meet the Auth0 Developer Relations Team</Title>
          <InnerContentRow>
            <TeamItem
              name="Ana Cidre"
              picture="https://pbs.twimg.com/profile_images/1236034260177481728/dqFx0Nty_400x400.jpg"
              twitter="https://twitter.com/AnaCidre_"
            />
            <TeamItem
              name="Sam Bellen"
              picture="https://pbs.twimg.com/profile_images/999601981009248256/rwyZINc0_400x400.jpg"
              twitter="https://twitter.com/sambego"
            />
            <TeamItem
              name="James Quick"
              picture="https://pbs.twimg.com/profile_images/1228449356426219521/jIN5Ci7H_400x400.jpg"
              twitter="https://twitter.com/jamesqquick"
            />
            <TeamItem
              name="Jessica Temporal"
              picture="https://cdn.auth0.com/blog/avocado-labs/jessica-temporal.jpg"
              twitter="https://twitter.com/jesstemporal"
            />
            <TeamItem
              name="Ben Dechrai"
              picture="https://pbs.twimg.com/profile_images/1362954102049705986/70eo71xe_400x400.jpg"
              twitter="https://twitter.com/bendechrai"
            />
            <TeamItem
              name="Tyler Clark"
              picture="https://pbs.twimg.com/profile_images/1034092696711847938/AMsDvqAy_400x400.jpg"
              twitter="https://twitter.com/iamtylerwclark"
            />
            <TeamItem
              name="Sam Julien"
              picture="https://pbs.twimg.com/profile_images/1340055522377003008/PhDtP3YS_400x400.jpg"
              twitter="https://twitter.com/samjulien"
            />
          </InnerContentRow>
        </Container>
      </HeroStyled>
    </Layout>
  )
}

export default HomePage

export const pageQuery = graphql`
  query HomeQuery {
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
