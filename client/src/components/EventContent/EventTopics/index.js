import React from 'react'
import PropTypes from 'prop-types'
import Section from '../Section'
import SectionTitle from '../SectionTitle'
import Container from '../Container'
import TopicItem from './TopicItem'

import { Topics, Layer1, Layer2 } from './styled'

const EventTopics = ({ eventTheme, title, description, topicsSubsections }) => {
  return (
    <Section bgColor={eventTheme.highlightColor}>
      <Layer1
        bgImage={
          eventTheme.backgroundImage && eventTheme.backgroundImage.file.url
        }
      />
      <Layer2
        bgImage={eventTheme.buildingImage && eventTheme.buildingImage.file.url}
      />
      <Container>
        <SectionTitle txtColor={eventTheme.highlightColor} allWhite>
          {title}
        </SectionTitle>
        <Topics>
          {topicsSubsections &&
            topicsSubsections.map((item, index) => (
              <TopicItem
                title={item.title}
                description={item.description}
                speaker={item.speaker}
                key={index}
              />
            ))}
        </Topics>
      </Container>
    </Section>
  )
}

EventTopics.propTypes = {
  eventTheme: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  topicsSubsections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.shape({
        description: PropTypes.string.isRequired,
      }),
    })
  ),
}

export default EventTopics
