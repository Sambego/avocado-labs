import React from 'react'
import PropTypes from 'prop-types'
import WhiteLogo from './whiteLogo.svg'
import { useAuth0 } from '@auth0/auth0-react'
import {
  LogoLink,
  PoweredBy,
  Container,
  Header,
  InnerHeader,
  HeaderNav,
  Button,
  AvatarContainer,
  Avatar,
} from './styled'

const EventHeader = () => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0()

  return (
    <Header>
      <Container>
        <InnerHeader>
          <LogoLink href="https://auth0.com/developers/">
            <PoweredBy> Powered by </PoweredBy> <WhiteLogo />
          </LogoLink>
          <HeaderNav>
            <ul>
              <li>
                <a href="/"> Events </a>
              </li>
              <li>
                <a href="/recordings"> Recordings </a>
              </li>
              <li>
                <a href="/code-of-conduct"> Code of Conduct </a>
              </li>
              <li className="login-item">
                {isAuthenticated && (
                  <AvatarContainer>
                    <Avatar src={user.picture} />
                    <Button
                      onClick={() =>
                        logout({
                          returnTo: window.location.origin,
                        })
                      }
                    >
                      Log out
                    </Button>
                  </AvatarContainer>
                )}
                {!isAuthenticated && (
                  <Button onClick={() => loginWithRedirect()}> Log in </Button>
                )}
              </li>
            </ul>
          </HeaderNav>
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
