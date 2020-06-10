import styled from 'styled-components'
import { media } from '../../../utilities/style-utils-new'

export const SpeakersStyled = styled.section ``

export const Container = styled.div `
  max-width: 100%;
  padding: 0 2rem;
  margin: 0 auto;

  ${media.lg`
    max-width: 98rem;
  `};
`

export const Speaker = styled.article`
  display: grid;

  ${media.md`
    max-width: 100%;
    grid-template-columns: 300px auto;
    grid-column-gap: 60px;
  `}

  &:not(:last-child) {
    margin-bottom: 8rem;
  }

  figcaption {
    max-width: 56rem;
  }

  img {
    max-width: 100%;
    border-radius: 1rem;
  }

  h2 {
    margin: 0 0 1rem;
    font-size: 3.2rem;
    font-weight: 400;
    letter-spacing: 0.15px;
    line-height: 1.25;
    color: rgba(0, 0, 0, 0.86);
  }

  h3 {
    margin: 0 0 3rem;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.54);
    font-size: 1.6rem;
    line-height: 1.5;
    letter-spacing: 0.35px;
    text-align: left;
  }

  p {
    margin: 0 0 3rem;
    font-size: 2rem;
    font-weight: 400;
    line-height: 1.6;
    letter-spacing: 0.2px;
    text-align: left;
    color: rgba(0, 0, 0, 0.86);
  }

  ul {
    padding: 0;
    margin: 0;
    display: flex;
    list-style: none;
    align-items: center;
  }

  ul li {
    display: flex;
  }

  ul li:not(:last-child) {
    margin-right: 2rem;
  }

  svg path:first-child {
    fill: ${({ fillColor }) => fillColor};
  }
`