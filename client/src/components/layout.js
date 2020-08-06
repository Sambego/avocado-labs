import React from 'react'
import { Helmet } from 'react-helmet'
import EventHeader from './EventContent/EventHeader'
import BlackLogo from './EventContent/EventHeader/allBlackLogo.svg'
import './layout.css'

class Template extends React.Component {
  render() {
    const { children } = this.props

    return (
      <>
        <Helmet>
          <link
            rel="stylesheet"
            href="https://cdn.auth0.com/styleguide/core/3.0.0/core.min.css"
          />
        </Helmet>
        <EventHeader />
        {children}
        <footer>
          &copy; {new Date().getFullYear()} Avocado Labs
          &nbsp;&nbsp;|&nbsp;&nbsp; Powered by
          <a href="https://auth0.com/developers/">
            <BlackLogo />
          </a>
        </footer>
      </>
    )
  }
}

export default Template
