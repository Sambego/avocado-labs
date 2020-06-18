import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import { GatsbySeo } from 'gatsby-plugin-next-seo'
import Layout from '../components/layout'
import {
  Container,
  BorderedContainer,
  VideoContainer,
  VideoFrame,
  VideoDescription,
} from '../components/styled'

type RecordingPage = {
  data: any
  location: string
}

const RecordingPage = ({ data, location }: RecordingPage) => {
  const siteMetadata = data.site.siteMetadata
  const video = data.allYoutubeVideo.edges[0].node
  const meta = video.metaTags
  return (
    <Layout location={location}>
      <Helmet title={siteMetadata.title} />
      <GatsbySeo
        title={video.title}
        description={video.description}
        canonical={`${siteMetadata.siteUrl}/recordings/${video.id}`}
        openGraph={{
          url: `${siteMetadata.siteUrl}/recordings/${video.id}`,
          title: video.title,
          description: video.description,
          images: [
            {
              url: siteMetadata.ogImage,
              alt: siteMetadata.title,
            },
          ],
          videos: [
            {
              url: `https://www.youtube.com/embed/${video.videoId}`,
              alt: siteMetadata.title,
            },
          ],
          site_name: siteMetadata.title,
        }}
        twitter={{
          handle: siteMetadata.twitterCreator,
          site: siteMetadata.twitterSite,
          cardType: 'player',
        }}
        metaTags={[
          {
            name: 'twitter:player',
            content: `https://www.youtube.com/embed/${video.videoId}`,
          },
          {
            name: 'twitter:player:width',
            content: '435',
          },
          {
            name: 'twitter:player:height',
            content: `251`,
          },
        ]}
      />
      <BorderedContainer>
        <Container>
          <h1>{video.title}</h1>
          <VideoContainer>
            <VideoFrame
              src={`https://www.youtube.com/embed/${video.videoId}`}
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen={true}
            ></VideoFrame>
          </VideoContainer>
          <VideoDescription>{video.description}</VideoDescription>
        </Container>
      </BorderedContainer>
    </Layout>
  )
}

export default RecordingPage

export const pageQuery = graphql`
  query VideoById($slug: String!) {
    site {
      siteMetadata {
        title
        ogImage
        twitterSite
        twitterCreator
      }
    }
    allYoutubeVideo(filter: { id: { eq: $slug } }) {
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
        }
      }
    }
  }
`
