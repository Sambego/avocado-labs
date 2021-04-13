import styled from 'styled-components'
import { media } from '../../utilities/style-utils-new'

export const TeamsStyled = styled.section``

export const Team = styled.article`
  display: flex;
  flex: 1;
  flex-direction: column;

  figure {
    display: flex;
  }

  img {
    max-width: 90%;
    margin: auto;
    border-radius: 1rem;
  }

  h2 {
    margin: 1rem 0;
    font-size: 1.8rem;
    font-weight: 400;
    letter-spacing: 0.15px;
    line-height: 1.25;
    color: rgba(255, 255, 255, 1);
    text-align: center;
  }

  ul {
    padding: 0;
    margin: 0;
    display: flex;
    list-style: none;
  }

  ul li {
    display: flex;
    margin: 0 auto;
  }

  svg path:first-child {
    fill: none;
  }
  svg path:hover {
    fill: black;
  }
`
