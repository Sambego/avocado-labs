import styled from 'styled-components'
import { media } from '../../../utilities/style-utils-new'

export const StickyIllustration = styled.div`
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

export const Container = styled.div`
  max-width: 100%;
  padding: 0 2rem;
  margin: 0 auto;
  position: relative;
  z-index: 500;

  ${media.lg`
    max-width: 98rem;
  `};
`

export const Layer1 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  background-image: url(${({ bgImage }) => bgImage});
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  z-index: 100;
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
    max-height: 90%;
    background-image: url(${({ bgImage }) => bgImage});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: top right;
    z-index: 200;
  `}
`

export const Topics = styled.div``

export const Timeline = styled.ul`
  max-width: 57.4rem;
  padding: 0;
  margin: 0;
  list-style: none;
`

export const Dot = styled.span`
  flex: 0 0 22px;
  width: 22px;
  height: 22px;
  background-color: white;
  border-radius: 50%;
`

export const TimelineItem = styled.li`
  position: relative;
  display: flex;
  align-items: center;

  &:not(:last-child):after {
    content: '';
    position: absolute;
    top: 20px;
    left: 11px;
    width: 1px;
    height: 100%;
    background-color: white;
  }

  &:not(:last-child) {
    padding-bottom: 7.2rem;
  }

  time {
    padding: 0 0 0 4.2rem;
    margin: 0 3rem 0 0;
    font-size: 3.2rem;
    line-height: 4rem;
    letter-spacing: 0.15px;
    color: #ffffff;
  }

  h2 {
    margin: 0 0 3rem;
    font-size: 4rem;
    font-weight: 300;
    line-height: 48px;
    letter-spacing: 0;
    text-align: left;
    color: rgba(255, 255, 255, 0.9);
  }

  p {
    margin: 0;
    font-size: 2rem;
    font-weight: 400;
    line-height: 32px;
    letter-spacing: 0.2px;
    text-align: left;
    color: #ffffff;
  }
`

export const SpeakerDetail = styled.span`
  color: #ffffff;
`
