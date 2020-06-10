import styled from 'styled-components'
import { media } from '../../../utilities/style-utils-new'

export const Section = styled.section `
  position: relative;
  padding: 6rem 0;
  background-color: ${({ isDark }) => (isDark ? '#1C1C1C' : '#FFF')};
  text-align: center;

  ${media.md`
    padding: 11rem 0;
    text-align: left;
  `}
`

export const Container = styled.div`
  margin: 0 auto;
  width: auto;
  padding: 0 2rem;
  margin: 0 auto;
  z-index: 500;

  ${media.lg`
    max-width: 102rem;
  `};
`

export const Wrapper = styled.div`
  width: 100%;
  display: grid;
  align-items: center;
  justify-items: center;
  margin: 0 auto;
  grid-gap: 4rem;

  ${media.lg`
    justify-items: start;
    padding: 0;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
  `}
`

export const Copy = styled.div`
  display: grid;
`

export const CtaTitle = styled.h1`
  margin: 0;
  font-size: 4rem;
  font-weight: 300;
  line-height: 1.3;
  color: ${({ isDark }) => (isDark ? '#FFF' : '#000')};
`

export const HighlightedWord = styled.strong`
  color: ${({ txtColor }) => txtColor || '#000000'};
  font-weight: 300;
`

export const ButtonsWrapper = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: 1fr;
  grid-gap: 1.6rem;
  width: 100%;
  height: auto;

  ${media.md`
    grid-template-columns: 1fr 1fr;
  `}
`

export const SignupButton = styled.button`
  font-size: 14px;
  line-height: 1.3333333;
  border-radius: 3px;
  width: 100%;
  height: 5rem;
  border: 1px solid transparent;
  background: ${({ overrideColor }) => overrideColor || '#000000'};
  color: #ffffff;

  &:hover,
  &:focus,
  &:active {
    border-color: #000000;
    background: #ffffff;
    color: #000000;
    transition: all 0.25s ease-out;
  }
`

export const SalesButton = styled.button`
  box-shadow: inset 0 0 0 1px #828282;
  color: ${({ isDefault }) => (isDefault ? '#FFF' : '#000000')};
  width: 100%;
  height: 5rem;

  &:hover,
  &:focus,
  &:active {
    border-color: #ffffff;
    background: #000000;
    color: #ffffff;
    transition: all 0.25s ease-out;
    text-decoration: none;
  }
`