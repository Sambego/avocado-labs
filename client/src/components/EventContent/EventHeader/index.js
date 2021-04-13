import React from 'react'
import PropTypes from 'prop-types'
import WhiteLogo from './whiteLogo.svg'
import {
  LogoLink,
  PoweredBy,
  Container,
  Header,
  InnerHeader,
  HeaderNav,
} from './styled'

const EventHeader = () => {
  return (
    <Header>
      <Container>
        <InnerHeader>
          <HeaderNav>
            <ul>
              <li>
                <a href="/"> Home </a>
              </li>
              <li>
                <a href="/events"> Events </a>
              </li>
              <li>
                <a href="/recordings"> Recordings </a>
              </li>
              <li>
                <a href="/code-of-conduct"> Code of Conduct </a>
              </li>
            </ul>
          </HeaderNav>
          <LogoLink href="https://auth0.com/developers/">
            <PoweredBy> Powered by </PoweredBy> <WhiteLogo />
          </LogoLink>
        </InnerHeader>
      </Container>
    </Header>
  )
}

EventHeader.propTypes = {
  dark: PropTypes.bool,
}

EventHeader.defaultProps = {
  dark: false,
}

export default EventHeader
