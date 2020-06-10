import React from 'react'
import PropTypes from 'prop-types'
import { Speaker } from './styled'
import IconFb from './social-icon-fb.svg'
import IconTw from './social-icon-tw.svg'
import IconIn from './social-icon-in.svg'
import IconGit from './social-icon-git.svg'

const SpeakerItem = ({
  color,
  name,
  title,
  company,
  intro,
  picture,
  twitter,
  linkedin,
  github,
  facebook,
}) => (
  <Speaker fillColor={color}>
    <figure>
      <img src={picture} alt={name} />
    </figure>
    <figcaption>
      <h2> {name} </h2>
      <h3>
        {title} - {company}
      </h3>
      <p> {intro.intro} </p>
      <ul>
        {facebook && (
          <li>
            <a href={facebook} target="_blank" rel="noopener noreferrer">
              <IconFb />
            </a>
          </li>
        )}
        {twitter && (
          <li>
            <a href={twitter} target="_blank" rel="noopener noreferrer">
              <IconTw />
            </a>
          </li>
        )}
        {linkedin && (
          <li>
            <a href={linkedin} target="_blank" rel="noopener noreferrer">
              <IconIn />
            </a>
          </li>
        )}
        {github && (
          <li>
            <a href={github} target="_blank" rel="noopener noreferrer">
              <IconGit />
            </a>
          </li>
        )}
      </ul>
    </figcaption>
  </Speaker>
)

SpeakerItem.propTypes = {
  color: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  intro: PropTypes.shape({ intro: PropTypes.string.isRequired }),
  picture: PropTypes.string.isRequired,
  facebook: PropTypes.string,
  twitter: PropTypes.string,
  linkedin: PropTypes.string,
  github: PropTypes.string,
}

SpeakerItem.defaultProps = {
  facebook: '',
  twitter: '',
  linkedin: '',
  github: '',
}

export default SpeakerItem
