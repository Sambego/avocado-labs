import React from 'react'
import PropTypes from 'prop-types'
import { SectionTitleStyled, Counter, Title } from './styled'

const SectionTitle = ({ children, txtColor, allWhite }) => (
  <SectionTitleStyled>
    <Counter txtColor={txtColor} allWhite={allWhite} />
    <Title txtColor={txtColor} allWhite={allWhite}>
      {children}
    </Title>
  </SectionTitleStyled>
)

SectionTitle.propTypes = {
  children: PropTypes.node.isRequired,
  txtColor: PropTypes.string.isRequired,
  allWhite: PropTypes.bool,
}

export default SectionTitle
