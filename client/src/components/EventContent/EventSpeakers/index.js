import React from 'react'
import PropTypes from 'prop-types'
import Section from '../Section'
import SectionTitle from '../SectionTitle'
import Container from '../Container'
import SpeakerItem from './SpeakerItem'

const EventSpeakers = ({ eventTheme, speakers, title }) => (
  <Section>
    <Container>
      <SectionTitle txtColor={eventTheme.highlightColor} allWhite={false}>
        {title}
      </SectionTitle>
      <div>
        {speakers &&
          speakers.map((item, index) => (
            <SpeakerItem
              color={eventTheme.highlightColor}
              name={item.name}
              title={item.title}
              company={item.company}
              intro={item.intro}
              picture={item.picture.file.url}
              twitter={item.twitterAccount}
              facebook={item.facebookAccount}
              linkedin={item.linkedInAccount}
              github={item.githubAccount}
              key={index}
            />
          ))}
      </div>
    </Container>
  </Section>
)

EventSpeakers.propTypes = {
  eventTheme: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  speakers: PropTypes.arrayOf(
    PropTypes.shape({
      fields: PropTypes.shape({
        name: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        company: PropTypes.string.isRequired,
        intro: PropTypes.string.isRequired,
        picture: PropTypes.string.isRequired,
        twitterAccount: PropTypes.string,
        facebookAccount: PropTypes.string,
        linkedInAccount: PropTypes.string,
        githubAccount: PropTypes.string,
      }),
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
}

export default EventSpeakers
