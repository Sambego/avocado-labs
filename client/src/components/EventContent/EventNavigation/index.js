import React from 'react'
import PropTypes from 'prop-types'
import { formatDate } from '../../../modules/date'
import Button from '../Button'

import {
  NavContainer,
  Nav,
  NavInner,
  NavList,
  NavListItem,
  ButtonWrapper,
} from './styled'

import IconResources from './icon-resources.svg'
import IconSecurity from './icon-security.svg'
import IconToken from './icon-token.svg'

const EventNavigation = ({
  navIsFixed,
  navIsFullyVisible,
  navigationTime,
  navigationLocation,
  navButtonLink,
  eventDate,
  eventTheme,
}) => (
  <NavContainer navIsFixed={navIsFixed}>
    <Nav navIsFullyVisible={navIsFullyVisible}>
      <NavInner>
        <NavList>
          <NavListItem>
            <figure>
              <IconResources />
            </figure>
            <figcaption>
              <span> Start date </span> <h2> {formatDate(eventDate)} </h2>
            </figcaption>
          </NavListItem>
          <NavListItem>
            <figure>
              <IconToken />
            </figure>
            <figcaption>
              <span> Time </span> <h2> {navigationTime} </h2>
            </figcaption>
          </NavListItem>
          <NavListItem>
            <figure>
              <IconSecurity />
            </figure>
            <figcaption>
              <span> Location </span> <h2> {navigationLocation} </h2>
            </figcaption>
          </NavListItem>
        </NavList>
        <ButtonWrapper>
          <Button
            color={eventTheme.isDefault ? eventTheme.highlightColor : ''}
            text="Join Event Now!"
            link={navButtonLink}
          />
        </ButtonWrapper>
      </NavInner>
    </Nav>
  </NavContainer>
)

EventNavigation.propTypes = {
  navIsFixed: PropTypes.bool.isRequired,
  navIsFullyVisible: PropTypes.bool.isRequired,
  eventDate: PropTypes.string.isRequired,
  navigationTime: PropTypes.string.isRequired,
  navigationLocation: PropTypes.string.isRequired,
  navButtonLink: PropTypes.string.isRequired,
  eventTheme: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
}

export default EventNavigation
