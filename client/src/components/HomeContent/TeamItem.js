import React from 'react'
import PropTypes from 'prop-types'
import { Team } from './styled'
import IconTw from '../EventContent/EventSpeakers/social-icon-tw.svg'

const TeamItem = ({ name, picture, twitter }) => (
  <Team>
    <figure>
      <img src={picture} alt={name} />
    </figure>
    <figcaption>
      <h2> {name} </h2>
      <ul>
        {twitter && (
          <li>
            <a href={twitter} target="_blank" rel="noopener noreferrer">
              <IconTw />
            </a>
          </li>
        )}
      </ul>
    </figcaption>
  </Team>
)

TeamItem.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  twitter: PropTypes.string,
}

TeamItem.defaultProps = {
  twitter: '',
}

export default TeamItem
