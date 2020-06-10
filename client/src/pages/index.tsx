import React, { useEffect, useState } from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import { useAuth0 } from '@auth0/auth0-react'
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
  Modal,
  ModalBackground,
  ModalTitle,
  Form,
  Label,
  Input,
  InputCheck,
  Button,
} from '../components/styled.js'
import EventGrid from '../components/EventContent/EventsGrid'
import { addMetaDataToUser } from '../services/User'

type EventsPage = {
  data: any
  location: string
}

const heroBackground =
  '//images.ctfassets.net/kbkgmx9upatd/EdgWFyaNxF6DdOu12Ti36/da9f0e1b0c50b90cacdccd43d091da47/Background.png'
const heroImage =
  '//images.ctfassets.net/kbkgmx9upatd/4kBiKcxdsFx43DYA6hOPXy/be322ed50aa235e7b80236992393b1a6/Logo_Black-Sticker_Vertical2.png'

const EventsPage = ({ data, location }: EventsPage) => {
  const siteMetadata = data.site.siteMetadata
  const events = data.allContentfulLandingPageEvent.edges
  const now = new Date()
  const upcoming = events.filter(
    (event) => new Date(event.node.eventDate) > now
  )
  const past = events.filter((event) => new Date(event.node.eventDate) < now)
  const { isAuthenticated, user, getToken, getIdTokenClaims } = useAuth0()
  const hasGivenConsent =
    !!user?.hasOwnProperty('https://avocado-labs.com/meta') &&
    Object.keys(user['https://avocado-labs.com/meta']).length > 0
  const [showModal, setShowModal] = useState(false)
  const [form, setForm] = useState({
    org: '',
    job_title: '',
    consent: false,
  })

  useEffect(() => {
    setShowModal(isAuthenticated && !hasGivenConsent)
  }, [isAuthenticated, hasGivenConsent])

  const updateFormField = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const updateCheckbox = (e) => {
    setForm({ ...form, [e.target.name]: e.target.checked })
  }

  const handleModal = async (e) => {
    e.preventDefault()
    try {
      await addMetaDataToUser(user.sub, form, await getToken())
      await getToken({ ignoreCache: true })
    } catch (error) {}
    setShowModal(false)
  }

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
            <EventGrid events={upcoming} />
          </>
        )}
        <h2>Past</h2>
        <EventGrid events={past} past />
      </Container>
      {showModal && (
        <>
          <Modal>
            <ModalTitle>
              Please provide us with the following details:
            </ModalTitle>
            <Form onSubmit={handleModal}>
              <Label>
                Company Name
                <Input
                  type="text"
                  value={form.org}
                  placeholder="Company Name"
                  name="org"
                  onChange={updateFormField}
                />
              </Label>
              <Label>
                Job Title
                <Input
                  type="text"
                  value={form.job_title}
                  placeholder="Job Title"
                  name="job_title"
                  onChange={updateFormField}
                />
              </Label>
              <Label>
                <InputCheck
                  type="checkbox"
                  checked={form.consent}
                  name="consent"
                  onChange={updateCheckbox}
                />
                Never miss a thing! Check this box to receive relevant content
                and upcoming episodes.
              </Label>
              <Button>Finish registration</Button>
            </Form>
          </Modal>
          <ModalBackground />
        </>
      )}
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
    allContentfulLandingPageEvent(
      filter: {
        eventTheme: { name: { eq: "Avocado Labs" } }
        node_locale: { eq: "en" }
      }
      sort: { order: DESC, fields: eventDate }
    ) {
      edges {
        node {
          id
          contentfulid
          eventDate
          shortTitle
          eventTheme {
            indexCard {
              file {
                url
              }
            }
          }
        }
      }
    }
  }
`
