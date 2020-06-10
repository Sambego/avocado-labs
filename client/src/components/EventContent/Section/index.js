import React from 'react'
import PropTypes from 'prop-types'
import SectionStyled from './styled'

const Section = ({ children, bgColor, bgImage }) => (
  <SectionStyled bgColor={bgColor} bgImage={bgImage}>
    {children}
  </SectionStyled>
)

Section.propTypes = {
  children: PropTypes.node.isRequired,
  bgColor: PropTypes.string,
  bgImage: PropTypes.string,
}

export default Section
