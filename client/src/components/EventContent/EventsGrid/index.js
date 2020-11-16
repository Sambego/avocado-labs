import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { formatDate } from '../../../modules/date'
import ReadMoreLink from '../ReadMoreLink'
import { Grid, GridItem, Details, ImageWrapper } from './styled'

const EventsGrid = ({ events, theme, past }) => {
  console.log('----1-1-1-', events)
  return (<Grid past={past}>
    {events.map((event, index) => (
      <GridItem key={index}>
        <ImageWrapper>
          <img
            src={
              theme &&
              theme.indexCard &&
              theme.indexCard.file.url
            }
            alt={`${event.node.title}`}
          />
        </ImageWrapper>
        <Details past={past}>
          <time> {formatDate(event.node.eventDate)} </time>
          <h3> {`${event.node.title}`} </h3> <h2> {event.node.heroTitle} </h2>
          <ReadMoreLink Href={`/events/${event.node.contentfulid}`} center>
            Read More
          </ReadMoreLink>
        </Details>
      </GridItem>
    ))}
  </Grid>)
}

EventsGrid.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
    })
  ).isRequired,
  past: PropTypes.bool,
}

EventsGrid.defaultProps = {
  events: [],
  past: false,
}

export default EventsGrid
