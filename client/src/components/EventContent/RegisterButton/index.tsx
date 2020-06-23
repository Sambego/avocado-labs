import React, { useState, useEffect } from 'react'
import Button from '../Button'
import { useAuth0 } from '@auth0/auth0-react'
import {
  addAttendee,
  checkAttendee,
  getWebinarDetails,
} from '../../../services/Webinar'

import { RegisteredInstructions } from './styled'

export type RegisterButtonType = {
  text: string
  link: string
  zoomId: number
}

const RegisterButton = ({ text, link, zoomId }: RegisterButtonType) => {
  const { isAuthenticated, user, getToken } = useAuth0()
  const [isRegistered, setIsRegistered] = useState(false)
  const [zoomDetails, setZoomDetails] = useState({})
  const handleAddAttendee = async () => {
    await addAttendee(user, zoomId, await getToken())
    setIsRegistered(true)
  }

  const checkIfRegistered = async (user) => {
    if (user) {
      const token = await getToken()
      const response = await checkAttendee(user.email, zoomId, token)
      setIsRegistered(response.isRegistered)

      if (response && response.isRegistered) {
        const webinarDetails = await getWebinarDetails(zoomId, token)
        setZoomDetails(webinarDetails)
      }
    }
  }

  useEffect(() => {
    if (user && zoomId) {
      checkIfRegistered(user)
    }
  }, [user])

  if (isAuthenticated && zoomId) {
    if (isRegistered) {
      return (
        <RegisteredInstructions>
          You have already registered for this event
          {zoomDetails.join_url && (
            <>
              ,{' '}
              <a href={zoomDetails.join_url}>
                click here to join the event when it starts
              </a>
            </>
          )}
          .
        </RegisteredInstructions>
      )
    }

    return <Button text={text} onClick={handleAddAttendee} />
  }

  return <Button text={text} link={link} />
}

export default RegisterButton
