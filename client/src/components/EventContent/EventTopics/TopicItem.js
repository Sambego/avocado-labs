import React from 'react'
import PropTypes from 'prop-types'
import { Topic, SpeakerDetail } from './styled'

const TopicItem = ({ title, description, speaker }) => (
  <Topic>
    <h2>{title}</h2>
    <p>{description.description}</p>
    <SpeakerDetail>
      {speaker &&
        speaker.map((item, key) => (
          <span key={key}>
            By <strong> {item.name}</strong> - {item.company}
          </span>
        ))}
    </SpeakerDetail>
  </Topic>
)

TopicItem.propTypes = {
  speaker: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      company: PropTypes.string.isRequired,
    }).isRequired
  ),
  title: PropTypes.string.isRequired,
  description: PropTypes.shape({ description: PropTypes.string.isRequired }),
}

export default TopicItem
