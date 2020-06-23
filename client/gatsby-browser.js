// gatsby-browser.js
import React from 'react'
import { Auth0Provider } from '@auth0/auth0-react'

export const wrapRootElement = ({ element }) => {
  return (
    <Auth0Provider
      domain={process.env.GATSBY_AUTH0_DOMAIN}
      clientId={process.env.GATSBY_AUTH0_CLIENT_ID}
      audience={process.env.GATSBY_AUTH0_AUDIENCE}
      redirectUri={window.location.origin}
      scope="openid email profile offline"
      cacheLocation="localstorage"
      useRefreshTokens={true}
    >
      {element}
    </Auth0Provider>
  )
}
