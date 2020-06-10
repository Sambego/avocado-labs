import React from 'react'
import ReactMarkdown from 'react-markdown'
import PropTypes from 'prop-types'
import { Article, Content, Media } from './styled'

const OverviewItem = ({ title, description, image }) => (
  <Article>
    <Media>
      <img src={image} alt={title} />
    </Media>
    <Content>
      <h2>{title}</h2>
      <div>
        <ReactMarkdown
          source={description.childMarkdownRemark.rawMarkdownBody}
        />
      </div>
    </Content>
  </Article>
)

OverviewItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.shape({
    childMarkdownRemark: PropTypes.shape({
      rawMarkdownBody: PropTypes.string.isRequired,
    }),
  }),
  image: PropTypes.string.isRequired,
}

export default OverviewItem
