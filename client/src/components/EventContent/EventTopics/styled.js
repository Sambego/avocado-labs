import styled from 'styled-components'
import { media } from '../../../utilities/style-utils-new'

export const StickyIllustration = styled.div `
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${({ bgImage }) => bgImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom right;
  background-attachment: fixed;
  z-index: 100;
`

export const Topics = styled.div ``

export const Topic = styled.article `
  max-width: 62rem;

  &:not(:last-child) {
    margin-bottom: 8rem;
  }

  h2 {
    margin: 0 0 3rem;
    font-size: 3rem;
    font-weight: 400;
    line-height: 1.4;
    letter-spacing: 0;
    text-align: left;
    color: rgba(255, 255, 255, 0.9);

    ${media.md`
      font-size: 4rem;
      line-height: 1.6;
    `}
  }

  p {
    margin: 0 0 3rem;
    font-size: 2rem;
    font-weight: 400;
    line-height: 32px;
    letter-spacing: 0.2px;
    text-align: left;
    color: #ffffff;
  }
`

export const Layer1 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  background-image: url(${({ bgImage }) => bgImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
`

export const Layer2 = styled.div`
  display: none;

  ${media.md`
    display: block;
    position: absolute;
    bottom: 0;
    right: 0;
    left: initial;
    width: 400px;
    height: 745px;
    max-height: 100%;
    background-image: url(${({ bgImage }) => bgImage});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: top right;
    z-index: 200;
  `}

  @media screen and (min-height: 1050px) {
    margin-bottom: 43.5vh;
  }

  @media screen and (min-height: 1200px) {
    margin-bottom: 28.5vh;
  }
`

export const SpeakerDetail = styled.span`
  color: #ffffff;
`