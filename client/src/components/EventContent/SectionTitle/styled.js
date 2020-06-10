import styled from 'styled-components'
import { media } from '../../../utilities/style-utils-new'

export const SectionTitleStyled = styled.header `
  display: inline-flex;
  align-items: center;
  margin: 0 0 5rem;

  ${media.md`
    margin: 0 0 10rem;
  `}
`

export const Counter = styled.span`
  position: relative;
  margin-right: 2rem;
  font-size: 2.5rem;
  font-weight: 300;
  letter-spacing: 0.6px;
  line-height: 1;
  color: ${({ txtColor, allWhite }) => (allWhite ? '#FFFFFF' : txtColor)};

  &:before {
    counter-increment: section;
    content: '0' counter(section);
  }

  ${media.md`
    font-size: 6rem;
  `}
`

export const Title = styled.h1`
  margin: 0;
  font-size: 2.5rem;
  font-weight: 400;
  line-height: 1.05;
  letter-spacing: 0.3px;
  color: ${({ allWhite }) => (allWhite ? '#FFFFFF' : '#000000')};

  ${media.md`
    font-size: 3rem;
  `}
`