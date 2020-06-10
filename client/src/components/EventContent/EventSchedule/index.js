import React from 'react'
import PropTypes from 'prop-types'
import Section from '../Section'
import SectionTitle from '../SectionTitle'
import Container from '../Container'
import ScheduleItem from './ScheduleItem'

import { Timeline, Layer1, Layer2 } from './styled'

const EventSchedule = ({ eventTheme, schedule, title }) => (
  <Section>
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
      <Timeline>
        {schedule &&
          schedule.map((item, index) => (
            <ScheduleItem
              key={index}
              hour={item.hour}
              description={item.description.description}
            />
          ))}
      </Timeline>
    </Container>
  </Section>
)

EventSchedule.propTypes = {
  eventTheme: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  schedule: PropTypes.arrayOf(
    PropTypes.shape({
      hour: PropTypes.string.isRequired,
      description: PropTypes.shape({
        description: PropTypes.string.isRequired,
      }),
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
}

export default EventSchedule
