import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'
import PropTypes from 'prop-types'
import { Waypoint } from 'react-waypoint'
import RegisterButton from '../RegisterButton'
import EventNavigation from '../EventNavigation'
import LoginWarning from '../LoginWarning'
import {
  HeroStyled,
  BottomWaypoint,
  Container,
  InnerContent,
  TextContent,
  MediaContent,
  Title,
  Subtitle,
} from './styled'

class Hero extends Component {
  state = {
    isMobile: false,
    navIsFixed: false,
    navIsFullyVisible: false,
  }

  componentDidMount() {
    this.setState({ isMobile: window.innerWidth < 480 })
    window.addEventListener('resize', this._handleWindowResize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this._handleWindowResize)
  }

  _handleWindowResize = () => {
    this.setState({ isMobile: window.innerWidth < 480 })
  }

  // _handleFullNav = ({ currentPosition, previousPosition }) => {
  //   const { isMobile } = this.state;
  //   if (!isMobile && currentPosition === 'above') {
  //     this.setState(({ navIsFullyVisible }) => ({
  //       navIsFullyVisible: !navIsFullyVisible,
  //     }));
  //   }
  //   if (previousPosition !== 'inside') {
  //     this.setState({ navIsFullyVisible: false });
  //   }
  // }

  _handleFixedNav = ({ currentPosition }) => {
    const { isMobile } = this.state
    if (!isMobile && currentPosition === 'above') {
      this.setState({ navIsFixed: true, navIsFullyVisible: true })
    }
  }

  _handleAbsoluteNav = () => {
    const { isMobile } = this.state
    if (!isMobile) {
      this.setState({ navIsFixed: false, navIsFullyVisible: false })
    }
  }

  render() {
    const { navIsFullyVisible, navIsFixed } = this.state

    const {
      eventTheme,
      heroTitle,
      heroDescription,
      heroButtonText,
      heroButtonLink,
      navigationTime,
      navigationLocation,
      eventDate,
      zoomId,
    } = this.props

    return (
      <HeroStyled
        bgColor={eventTheme.bgColor}
        bgImage={
          eventTheme.backgroundImage && eventTheme.backgroundImage.file.url
        }
      >
        <Container>
          <InnerContent>
            <TextContent>
              <Title>{heroTitle}</Title>
              <Subtitle>
                <ReactMarkdown source={heroDescription} />
              </Subtitle>
              <RegisterButton
                text={heroButtonText}
                link={heroButtonLink}
                zoomId={zoomId}
              />
              <LoginWarning />
            </TextContent>
            <MediaContent>
              <img
                src={eventTheme.badgeImage && eventTheme.badgeImage.file.url}
                alt={eventTheme.badgeImage && eventTheme.badgeImage.fileName}
              />
            </MediaContent>
          </InnerContent>
        </Container>
        <EventNavigation
          navIsFullyVisible={navIsFullyVisible}
          navIsFixed={navIsFixed}
          eventDate={eventDate}
          navigationTime={navigationTime}
          navigationLocation={navigationLocation}
          navButtonLink={heroButtonLink}
          eventTheme={eventTheme}
        />
        <BottomWaypoint>
          <Waypoint
            onEnter={this._handleAbsoluteNav}
            onLeave={this._handleFixedNav}
          />
        </BottomWaypoint>
      </HeroStyled>
    )
  }
}

Hero.propTypes = {
  eventTheme: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  heroTitle: PropTypes.string.isRequired,
  heroDescription: PropTypes.string.isRequired,
  heroButtonText: PropTypes.string.isRequired,
  heroButtonLink: PropTypes.string.isRequired,
  eventDate: PropTypes.string.isRequired,
  navigationTime: PropTypes.string.isRequired,
  navigationLocation: PropTypes.string.isRequired,
  zoomId: PropTypes.number,
}

export default Hero
