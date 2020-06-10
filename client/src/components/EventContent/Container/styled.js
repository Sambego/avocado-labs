import styled from 'styled-components'
import { media } from '../../../utilities/style-utils-new'

export default styled.div `
  position: relative;
  max-width: 100%;
  padding: 0 1.6rem;
  margin: 0 auto;
  z-index: 500;

  ${media.md`
    padding: 0 2rem;
  `}

  ${media.lg`
    max-width: 102rem;
  `};
`