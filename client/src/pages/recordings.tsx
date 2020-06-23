import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import { GatsbySeo } from 'gatsby-plugin-next-seo'
import Layout from '../components/layout'
import { BorderedContainer, Container } from '../components/styled.js'
import ReadMoreLink from '../components/EventContent/ReadMoreLink'
import { formatDate } from '../modules/date'

import {
  Grid,
  GridItem,
  Details,
  ImageWrapper,
} from '../components/EventContent/EventsGrid/styled'

type RecordingsPage = {
  data: any
  location: string
}

const RecordingsPage = ({ data, location }: RecordingsPage) => {
  const siteMetadata = data.site.siteMetadata
  const videos = data.allYoutubeVideo.edges

  return (
    <Layout location={location}>
      <Helmet title={siteMetadata.siteTitle} />
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
          <h1>Previous recordings</h1>
          <Grid>
            {videos.map((video, index) => (
              <GridItem key={index}>
                <ImageWrapper>
                  <img
                    src={video.node.thumbnail.url}
                    alt={`${video.node.title}`}
                  />
                </ImageWrapper>
                <Details>
                  <time>
                    {formatDate(`${new Date(video.node.publishedAt)}`)}{' '}
                  </time>
                  <h3> {video.node.title} </h3>
                  <ReadMoreLink Href={`/recordings/${video.node.id}`} center>
                    Read More
                  </ReadMoreLink>
                </Details>
              </GridItem>
            ))}
          </Grid>
        </Container>
      </BorderedContainer>
      >
    </Layout>
  )
}

export default RecordingsPage

export const pageQuery = graphql`
  query VideosQuery {
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
    allYoutubeVideo(filter: { privacyStatus: { ne: "private" } }) {
      edges {
        node {
          title
          publishedAt
          id
          description
          thumbnail {
            url
          }
          videoId
          privacyStatus
        }
      }
    }
  }
`
