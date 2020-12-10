import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Hero from './Hero'
import renderEventPageModule from '../../modules/eventPageModules'

const EventContent = ({
  eventTheme,
  heroTitle,
  heroDescription,
  heroSideImage,
  heroBackgroundImage,
  heroButtonText,
  heroButtonLink,
  navigationTime,
  navigationLocation,
  subModules,
  eventDate,
  zoomId,
}) => (
  <Fragment>
    <Hero
      heroTitle={heroTitle}
      heroDescription={heroDescription}
      heroSideImage={heroSideImage}
      heroBackgroundImage={heroBackgroundImage}
      heroButtonText={heroButtonText}
      heroButtonLink={heroButtonLink}
      theme={eventTheme}
      eventDate={eventDate}
      navigationTime={navigationTime}
      navigationLocation={navigationLocation}
      zoomId={zoomId}
    />
    {subModules &&
      subModules.map((item, index) =>
        renderEventPageModule(item, eventTheme, index)
      )}
  </Fragment>
)

EventContent.propTypes = {
  eventTheme: PropTypes.shape({
    fields: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  }).isRequired,
  heroTitle: PropTypes.string.isRequired,
  heroDescription: PropTypes.string.isRequired,
  heroSideImage: PropTypes.string.isRequired,
  heroBackgroundImage: PropTypes.string.isRequired,
  heroButtonText: PropTypes.string,
  heroButtonLink: PropTypes.string.isRequired,
  eventDate: PropTypes.string.isRequired,
  navigationTime: PropTypes.string.isRequired,
  navigationLocation: PropTypes.string.isRequired,
  subModules: PropTypes.arrayOf(
    PropTypes.shape({
      fields: PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
      }),
    })
  ).isRequired,
  zoomId: PropTypes.number,
}

EventContent.defaultProps = {
  heroButtonText: 'Join Us Now!',
}

export default EventContent
