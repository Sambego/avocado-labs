import styled from 'styled-components'
import { media } from '../../../utilities/style-utils-new'

export const Container = styled.div`
  max-width: 100%;
  padding: 0 2rem;
  margin: 0 auto;

  ${media.lg`
    max-width: 98rem;
  `};
`

export const Content = styled.div`
  h1 {
    margin: 0;
    font-size: 4rem;
    font-weight: 400;
    line-height: 48px;
    letter-spacing: 0;
    text-align: left;
    color: rgba(0, 0, 0, 0.9);
  }
`

export const Media = styled.figure`
  img {
    max-width: 100%;
    border-radius: 10px;
  }
`

export const Articles = styled.div``

export const Article = styled.article`
  display: grid;
  text-align: left;

  ${media.md`
    grid-template-columns: 380px auto;
    grid-column-gap: 100px;
    align-items: center;

    &:nth-child(even) {
      direction: rtl;
    }
  `}

  &:not(:last-child) {
    margin-bottom: 10rem;
  }

  h2 {
    margin: 3rem 0 3rem;
    font-size: 3rem;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 1.2;
    color: rgba(0, 0, 0, 0.9);

    ${media.md`
      margin: 0 0 3rem;
      font-size: 4rem;
    `}
  }

  p {
    margin: 0;
    font-size: 2rem;
    font-weight: 400;
    letter-spacing: 0.2px;
    text-align: left;
    line-height: 32px;
    color: rgba(0, 0, 0, 0.86);
  }
`
