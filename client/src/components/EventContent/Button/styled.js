import styled from 'styled-components'
import { media } from '../../../utilities/style-utils-new'

export default styled.a `
  display: block;
  padding: 16px 20px;
  
  border: 1px solid transparent;
  border-radius: 4px;
  font-size: 1.3rem;
  font-weight: 600;
  line-height: 1.4;
  letter-spacing: 1.1px;
  text-align: center;
  text-transform: uppercase;
  color: #FFFFFF;
  transition: all .25s ease-in;
  &:hover,
  &:focus,
  &:active {
    border-color: #000000;
    background-color: #FFFFFF;
    color: #000000;
    transition: all .25s ease-out;
  }
  ${media.md`
    display: initial;
  `}

  background-color: ${({ color }) => color || '#000000'};
`