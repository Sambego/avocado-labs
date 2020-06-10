import React from 'react'
import PropTypes from 'prop-types'

import ButtonStyled from './styled'

const Button = ({ text, link, color, onClick = () => true }) => {
  if (link) {
    return (
      <ButtonStyled color={color} href={link}>
        {text}
      </ButtonStyled>
    )
  }

  return (
    <ButtonStyled color={color} onClick={onClick}>
      {text}
    </ButtonStyled>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string,
  onClick: PropTypes.any,
  color: PropTypes.string,
}

Button.defaultProps = {
  color: '',
}

export default Button
