import React from 'react'
import PropTypes from 'prop-types'
import Map from './styled'

const EventMap = ({ id }) => (
  <Map
    title="Map"
    src={`https://www.google.com/maps/embed/v1/place?key=${process.env.GATSBY_MAPS_API_KEY}&q=place_id:${id}`}
    width="360"
    height="270"
    frameBorder="0"
    style={{ border: 0 }}
  />
)

EventMap.propTypes = {
  id: PropTypes.string.isRequired,
}

export default EventMap
