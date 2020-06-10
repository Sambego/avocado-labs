import styled, { css, keyframes } from 'styled-components'
import { media } from '../../../utilities/style-utils-new'

export const FadeIn = keyframes `
  0% {
    transform: translateY(2rem);
    opacity: 0;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
`

export const NavContainer = styled.div `
  width: 100%;
  position: relative;
  opacity: 0;
  animation: ${FadeIn} 1s cubic-bezier(0.4, 0, 0.2, 1) 0.85s forwards;

  ${media.md`
    position: absolute;
    margin-top: -61px;
  `}

  ${media.lg`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 122px;
    margin-top: 0;
    z-index: 600;

    ${({ navIsFixed }) =>
      navIsFixed &&
      css`
        position: fixed;
        top: 0;
        left: 0;
      `};
  `}
`

export const Nav = styled.nav`
  position: relative;
  display: flex;
  align-items: center;
  max-width: 100%;
  max-width: 98rem;
  padding: 0 2rem;
  margin: 0 auto;
  border-radius: 6px 6px 0 0;
  z-index: 200;
  transition: all 0.5s ease;
  background-color: white;
  overflow: hidden;

  ${media.lg`
    max-width: 102rem;
    height: 122px;
    padding: 0;
    border-radius: 10px 10px 0 0;

    ${({ navIsFullyVisible }) =>
      navIsFullyVisible &&
      css`
        max-width: 100vw;
        box-shadow: 0 4px 5px -2px rgba(136, 136, 136, 0.24);
        border-radius: 0;
      `};
  `};
`

export const NavInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  padding: 8rem 0;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    padding: 0;
  }

  ${media.lg`
    position: absolute;
    padding: 0 9rem 0 0;
  `}
`

export const ButtonWrapper = styled.div`
  display: none;

  ${media.lg`
    display: block;
  `}
`

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  list-style: none;
  padding: 0;
  margin: 0 auto;
  background-color: white;

  ${media.md`
    flex: 1 1 100%;
    flex-direction: row;
    margin: initial;
    margin-right: auto;
    justify-self: flex-start;
    padding: 3.4rem 9rem;
  `}

  ${media.lg`
    flex: 0 0 980px;
  `}
`

export const NavListItem = styled.li`
  display: flex;
  list-style: none;
  flex-direction: column;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 4rem;
  }

  ${media.md`
    flex-direction: row;
    justify-content: initial;

    &:not(:last-child) {
      margin-bottom: 0;
    }
  `}

  figure {
    display: flex;

    ${media.md`
      margin-right: 2rem;
    `}
  }

  figcaption {
    text-align: center;
    ${media.md`
      text-align: left;
    `}
  }

  span {
    margin: 0;
    font-size: 1rem;
    line-height: 1.6;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    color: rgba(0, 0, 0, 0.87);
  }

  h2 {
    margin: 0;
    font-size: 2rem;
    line-height: 1.2;
    letter-spacing: 0.2px;
    color: rgba(0, 0, 0, 0.86);
  }
`