import styled from 'styled-components'
import { media } from '../../../utilities/style-utils-new'

export default styled.h1 `
  margin: 4rem 0 7.8rem;
  font-size: 24px;
  line-height: 1.3;
  letter-spacing: 0.2px;
  color: #242424;

  ${media.md`
    margin: 10.6rem 0 8rem;
    font-size: 4.8rem;
    line-height: 1.16;
    letter-spacing: -0.5px;
  `}
`