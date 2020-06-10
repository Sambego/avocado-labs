import styled from 'styled-components'
import { media } from '../../../utilities/style-utils-new'

export default styled.section `
  position: relative;
  padding-top: 7rem;

  ${media.md`
    padding-top: 0;
  `}
`