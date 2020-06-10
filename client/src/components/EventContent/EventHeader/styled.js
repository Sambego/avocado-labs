import styled from 'styled-components'
import { media } from '../../../utilities/style-utils-new'

export const Container = styled.div `
  max-width: 100%;
  padding: 0 2rem;
  margin: 0 auto;

  ${media.lg`
    max-width: 102rem;
  `};
`

export const Header = styled.header`
  position: ${({ dark }) => (dark ? 'fixed' : 'absolute')};
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${({ dark }) => (dark ? '#000000' : '')};
  z-index: 1000;

  ${media.md`
    position: ${({ dark }) => (dark ? 'relative' : 'absolute')};
  `}
`

export const InnerHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;

  > a {
    padding: 2rem;
  }

  ${media.md`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: row;
  padding: 10px 0;
  height: 70px;
  height: auto;
  padding: 26px 0;

     > a {
      padding: 0;
    }
  `}

  a img {
    max-height: 3.2rem;
    display: flex;
    align-items: center;
  }
`

export const HeaderNav = styled.nav`
  display: block;
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0;
    margin: 0;
    list-style: none;
    justify-content: center;
  }

  li {
    cursor: pointer;
    display: flex;
    align-items: center;
  }

  li:not(:last-child) {
    margin: 0 20px;
    ${media.md`
           margin: 0 40px 0 0;
    `}
  }

  li(:last-child) {
    align-self: center;
  }

  .login-item {
    padding: 2rem 0;

    display: flex;
    justify-content: center;

    ${media.md`
    width: auto;
    `}
  }

  a {
    color: white;
  }
`

export const Button = styled.button`
  display: block;
  padding: 8px 10px;
  
  border: 1px solid transparent;
  border-radius: 4px;
  font-size: 1.3rem;
  font-weight: 600;
  line-height: 1.4;
  letter-spacing: 1.1px;
  text-align: center;
  text-transform: uppercase;
  color: #FFFFFF;
  transition: all .25s ease-in;
  &:hover,
  &:focus,
  &:active {
    border-color: #000000;
    background-color: #FFFFFF;
    color: #000000;
    transition: all .25s ease-out;
  }
  ${media.md`
    display: initial;
  `}

  background-color: ${({ color }) => color || '#000000'};
`
export const AvatarContainer = styled.div`
  display: block;
  width: 36px;
  height: 36px;
  position: relative;

  ${Button} {
    trasition: all 0.2s ease-in-out;
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
    width: 100px;
  }

  &:hover ${Button} {
    opacity: 1;
    left: 50px;
  }
`

export const Avatar = styled.img`
  position: relative;
  z-index: 2;
  display: block;
  width: 36px;
  height: 36px;
  object-fit: cover;
  border-radius: 50%;
  border: 1px solid #000000;
`

export const LogoLink = styled.a`
  display: flex;
  align-items: center;
`

export const PoweredBy = styled.span`
  padding-right: 1rem;
  color: #fff;
  font-size: 1.8rem;
`