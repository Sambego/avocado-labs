import styled from 'styled-components'
import { media } from '../../../utilities/style-utils-new'

export const EventTitle = styled.h2 ``

export const Time = styled.span `
  ${({ selected }) =>
    selected &&
    `
font - weight: bold;
color: #eb5424;
`}
  font-size: 18px;
  cursor: pointer;
  margin-right: 15px;
`

export const Details = styled.div `
  padding: 4rem 2.4rem;

  ${media.md`
    grid-column: 1/2;
    padding: ${({ past }) => (past ? '5rem' : '8rem')};
    display: flex;
    flex-direction: column;

    > a {
      margin-top: auto;
    }
  `}

  > p {
    margin-bottom: 30px;
    font-size: 20px;
    line-height: 32px;
    letter-spacing: 0.2px;
    text-align: left;
    color: #606060;
    max-height: 96px;
    overflow-y: hidden;
  }
`

export const GridItem = styled.li`
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.05),
    0 1px 3px 0 rgba(0, 0, 0, 0.05);
  border-radius: 3px;

  time {
    font-size: 1.6rem;
    line-height: 26px;
    letter-spacing: 0;
    color: rgba(51, 51, 51, 0.7);
  }

  h3 {
    margin: 0 0 24px;
    font-size: 1.6rem;
    line-height: 26px;
    font-weight: 400;
    letter-spacing: 0;
    color: rgba(0, 0, 0, 0.86);

    ${media.md`
      font-size: 2.4rem;
      line-height: 1.6;
    `}
  }

  h2 {
    margin: 0 0 24px;
    font-size: 2rem;
    font-weight: 500;
    line-height: 1.5;
    letter-spacing: 0.15px;
    color: #333333;

    ${media.md`
      font-size: 3.2rem;
      line-height: 1.25;
    `}
  }
`

// Case studies landing grid
export const Grid = styled.ul`
  display: grid;
  grid-gap: 3rem;
  padding: 0;
  margin-bottom: 0;
  list-style: none;

  ${media.md`
    grid-template-columns: ${({ past }) => (past ? '1fr 1fr 1fr' : '1fr 1fr')};
  `}
`

export const Cover = styled.div`
  grid-column: 2/3;
  background-size: ${({ cover }) => (cover ? 'cover' : 'auto')};
  background-position: center center;
  background-repeat: no-repeat;
  background-image: url(${({ bgImage }) => bgImage || 'nada.png'});
`

export const GridFeatured = styled.ul`
  grid-gap: 3rem;
  padding: 0;
  margin-bottom: 0;
  list-style: none;

  ${GridItem} {
    ${media.md`
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-auto-flow: dense;
    `};
  }
`

export const GridRegular = styled.ul`
  display: grid;
  grid-gap: 3rem;
  padding: 0;
  list-style: none;

  ${media.md`
    grid-template-columns: 1fr 1fr;
    font-size: 3.2rem;
    line-height: 1.25;
  `}
`

export const ImageWrapper = styled.div`
  ${media.md`
    grid-column: 2/3;
  `}

  > img {
    max-width: 100%;
  }
`

export const DateFilter = styled.div``

export const Subheader = styled.div`
  align-items: center;
  padding: 4rem 0 3.2rem;
  display: flex;
  justify-content: space-between;

  > h3 {
    margin: 0;
    font-size: 1.6rem;
    line-height: 28px;
    letter-spacing: 0.1px;
    text-align: left;
    color: #232424;
    font-weight: 400;

    ${media.md`
      font-size: 24px;
      line-height: 32px;
      letter-spacing: 0.2px;
    `}
  }
`

export const Filter = styled.div`
  display: flex;

  span,
  select {
    margin: 0;
    border: 0;
    font-weight: 500;
    font-size: 13px;
    line-height: 28px;
    color: #0d96c6;
    -webkit-letter-spacing: 1.35px;
    -moz-letter-spacing: 1.35px;
    -ms-letter-spacing: 1.35px;
    letter-spacing: 1.35px;
    text-transform: uppercase;
    background: transparent;
    display: block;
    height: 26px;
  }
`

export const IndexContainer = styled.div`
  position: relative;
  max-width: 100%;
  padding: 0 1.6rem;
  margin: 0 auto;
  z-index: 500;

  ${media.md`
    padding: 0 2rem;
  `}

  ${media.lg`
    max-width: 120rem;
  `};
`