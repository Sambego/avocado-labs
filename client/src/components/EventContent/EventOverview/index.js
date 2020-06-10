import React from 'react'
import PropTypes from 'prop-types'
import Section from '../Section'
import SectionTitle from '../SectionTitle'
import Container from '../Container'
import OverviewItem from './OverviewItem'
import { Articles } from './styled'

const EventOverview = ({ eventTheme, title, overviewSubsections }) => (
  <Section>
    <Container>
      <SectionTitle txtColor={eventTheme.highlightColor}>{title}</SectionTitle>
      <Articles>
        {overviewSubsections &&
          overviewSubsections.map((item, index) => (
            <OverviewItem
              key={index}
              title={item.title}
              description={item.description}
              image={item.image.file.url}
            />
          ))}
      </Articles>
    </Container>
  </Section>
)

EventOverview.propTypes = {
  eventTheme: PropTypes.shape({
    name: PropTypes.string.isRequired,
    highlightColor: PropTypes.string.isRequired,
  }).isRequired,
  title: PropTypes.string.isRequired,
  overviewSubsections: PropTypes.arrayOf(
    PropTypes.shape({
      fields: PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.shape({
          description: PropTypes.string.isRequired,
        }),
        image: PropTypes.string.isRequired,
      }),
    })
  ).isRequired,
}

export default EventOverview
