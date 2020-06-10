import styled from 'styled-components'
import { media } from '../../../utilities/style-utils-new'

export default styled.section `
  overflow: hidden;
  position: relative;
  padding: 9rem 0;
  background-color: ${({ bgColor }) => bgColor};
  ${({ bgImage }) => (bgImage ? `
background - image: url($ { bgImage });
` : '')};

  ${media.md`
    padding: 15rem 0;
  `}
`