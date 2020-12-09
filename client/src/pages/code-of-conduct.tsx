import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import { GatsbySeo } from 'gatsby-plugin-next-seo'
import Layout from '../components/layout'
import { BorderedContainer, Container } from '../components/styled.js'
import ReactMarkdown from 'react-markdown'
import coc from '../../data/coc.json'

type EventsPage = {
  data: any
  location: string
}

const EventsPage = ({ data, location }: EventsPage) => {
  const siteMetadata = data.site.siteMetadata
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
      <BorderedContainer>
        <Container>
          <h1>{coc.title}</h1>
          <ReactMarkdown>{coc.coc}</ReactMarkdown>
        </Container>
      </BorderedContainer>
      >
    </Layout>
  )
}

export default EventsPage

export const pageQuery = graphql`
  query CocQuery {
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
  }
`
