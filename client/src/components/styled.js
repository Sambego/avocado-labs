import styled, { keyframes } from 'styled-components'
import { media } from '../utilities/style-utils-new'

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

export const HeroStyled = styled.section `
  position: relative;
  counter-reset: section;
  padding-top: 8rem;
  padding-bottom: 1.5rem;
  background-color: ${({ bgColor }) => bgColor};
  background-image: url(${({ bgImage }) => bgImage});
  background-size: cover;
  background-attachment: fixed;

  ${media.md`
    padding-top: 11.5rem;
    padding-bottom: 6rem;
  `}

  ${media.lg`
    padding-top: 11.5rem;
    padding-bottom: 12rem;
  `}
`

export const Container = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding: 0 2rem;

  ${media.lg`
    max-width: 102rem;
  `};
`

export const InnerContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem 0;
  text-align: center;
  opacity: 0;
  animation: ${FadeIn} 1s cubic-bezier(0.4, 0, 0.2, 1) 0.35s forwards;

  ${media.md`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 0 8rem;
    text-align: left;
  `}
`

export const TextContent = styled.div`
  flex: 1;
  padding: 8rem 0 6rem;

  ${media.md`
    flex: 0 1 54rem;
    padding: 0;
  `}
`

export const MediaContent = styled.div`
  width: 70%;
  margin: 0 auto;

  ${media.md`
    width: 28rem;
    margin-right: 0;
  `}

  img {
    width: 100%;
  }
`

export const Title = styled.h1`
  margin: 0 0 2rem;
  font-size: 4rem;
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: -0.7px;
  color: rgba(255, 255, 255, 0.9);

  ${media.md`
    font-size: 6rem;
  `}
`

export const Subtitle = styled.div`
  margin: 0 0 6rem;
  font-size: 2rem;
  font-weight: 400;
  line-height: 1.6;
  letter-spacing: 0.2px;
  color: rgba(255, 255, 255, 0.9);
  a {
    color: rgba(255, 255, 255, 0.9);
    text-decoration: underline;
  }
`

export const EventPreviewStyled = styled.ul`
  margin-bottom: 0px;
  gap: 3rem;
  padding: 0px;
  list-style: none;
`

export const Modal = styled.div`
  position: fixed;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  display: block;
  width: 400px;
  background: #ffffff;
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.05),
    0 1px 3px 0 rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  padding: 2rem;
`

export const ModalTitle = styled.h3`
  margin: 0 0 2rem;
`

export const Form = styled.form``

export const Label = styled.label`
  display: block;
  margin: 1rem 0;
`

export const Input = styled.input`
  transition: all 0.25s ease-in;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  display: block;
  width: 100%;
  padding: 0.3rem 1rem;
  margin: 0;

  &:hover,
  &:focus,
  &:active {
    boder-color: #08bd6e;
  }
`

export const InputCheck = styled.input`
  padding: 0 1rem;
  margin: 0 1rem 0 0;
`

export const Button = styled.button`
  display: block;
  width: 100%;
  padding: 8px 10px;

  border: 1px solid transparent;
  border-radius: 4px;
  font-size: 1.3rem;
  font-weight: 600;
  line-height: 1.4;
  letter-spacing: 1.1px;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;
  transition: all 0.25s ease-in;
  &:hover,
  &:focus,
  &:active {
    border-color: #000000;
    background-color: #000000;
    color: #ffffff;
    transition: all 0.25s ease-out;
  }
  ${media.md`
    display: initial;
  `}

  background-color: #08BD6E;
`

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.4);
`

export const BorderedContainer = styled.div`
  padding: 1.5rem 0;
  border-top: 18rem solid #00b96e;

  ${media.md`
         border-top: 13rem solid #00b96e;
  `}
`

export const VideoContainer = styled.div`
  position: relative;
  margin-top: 4rem;
  padding-bottom: 56.25%;
  padding-top: 30px;
  height: 0;
  overflow: hidden;
`
export const VideoFrame = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

export const VideoDescription = styled.p`
  margin-top: 4rem;
  font-size: 1.8rem;
`