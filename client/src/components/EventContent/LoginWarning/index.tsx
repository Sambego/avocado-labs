import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { LoginWarningStyled } from './styled'

const LoginWarning = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0()

  if (isAuthenticated) {
    return null
  }

  return (
    <LoginWarningStyled>
      This link will take you to a Zoom registration form. If you do not wish to
      fill in this form for each Avocado Labs event,{' '}
      <a onClick={() => loginWithRedirect()}>take 2 minutes to register</a> and
      we'll take care about this in the future.
    </LoginWarningStyled>
  )
}

export default LoginWarning
