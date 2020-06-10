import styled, { css, keyframes } from 'styled-components';

const sizes = {
  sm: '(min-width: 600px)',
  md: '(min-width: 900px)',
  lg: '(min-width: 1200px)',
  xl: '(min-width: 1500px)',
  xxl: '(min-width: 1800px)',
};

export const theme = {
  dark: {
    backgroundColor: '#000000',
    defaultTextColor: '#ffffff',
    textColor1: 'rgba(255, 255, 255, .7)',
    textColor2: 'rgba(255, 255, 255, .2)',
  },
  light: {
    backgroundColor: '#ffffff',
    defaultTextColor: '#333333',
    textColor1: 'rgba(0, 0, 0, .7)',
    textColor2: 'rgba(0, 0, 0, .2)',
  },
  placeHolderBg: '#666666',
  emphasis: '#eb5424',
  defaultLinkColor: '#0D96C6',
  defaultLinkBg: 'rgba(0, 0, 0, 0.05)',
  defaultLinkBgHover: 'rgba(0, 0, 0, 0.1)',
};

export const getValueFromTheme = value => ({ dark }) => dark
  ? theme.dark[value]
  : theme.light[value];

export const media = Object.keys(sizes).reduce((accumulator, label) => {
  const query = sizes[label];
  accumulator[label] = (...args) => css`
    @media screen and ${query} {
      ${css(...args)}
    }
  `;
  return accumulator;
}, {});

export const grid = css`
  width: 100%;
  display: grid;
  align-items: center;
  margin: 12rem auto;
  ${media.md`
    text-align: left;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 12.6rem;
    padding: 0;
  `}
`;

export const SlideInTop = keyframes`
    0% { max-height: 0px; }
    100% { max-height: 500px; }
`;

export const Navigation = styled.nav`
  grid-template-columns: 1fr;
  align-content: space-evenly;
  visibility: collapse;
  opacity: 0;
  max-height: 0;
  display: none;
  transition-property: all;
  transition-duration: 1s;
  transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  ${media.md`
    &.sticky {
      overflow-y: hidden;
      max-height: 50rem;
      visibility: visible;
      position: sticky;
      align-content: start;
      z-index: 999;
      display: grid;
      opacity: 1;
    }
    &.scrolling {
      top: 8rem;
    }
    &.loaded {
      transition-property: all;
      transition-duration: 1s;
      transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
    }
    &.bottom {
    visibility: visible;
    opacity: 1;
    display: grid;
    transform: translateY(-100%);
    max-height: 50rem;
    padding: 0 0 8rem 0;
    position: relative;
    }
  `}
`;

export const Page = styled.div`
  width: 100%;
  max-width: 60rem;
  margin: 0 auto;
  display: grid;
  grid-auto-flow: dense;
  grid-template-columns: repeat(auto-fit, minmax(4.8rem, 1fr));
  column-gap: 0.8rem;
  grid-gap: 1.6rem;
  grid-template-areas:
  "hero hero
  sidebar content";
  ${media.sm`
    text-align: left;
    grid-template-columns: repeat(auto-fit, minmax(4.3rem, 1fr));
    max-width: 120rem;
    column-gap: 1.6rem;
    padding: 0;
    align-items: center;
  `}
    ${media.md`
    text-align: left;
    grid-template-columns: repeat(auto-fit, minmax(7.8rem, 1fr));
    column-gap: 2.4rem;
    padding: 0;
    align-items: center;
  `}
  ${media.lg`
    grid-template-columns: repeat(12, minmax(7.8rem, 1fr));
  `}
  & .learn-hero {
    grid-column: 1 / 12;
    grid-row: 1;
   ${media.md`
    grid-column: 4 / 12;
  `}
  }
  & .learn-body {
    grid-column: 1 / 12;
    grid-row: row 2;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(4.8rem, 1fr));
    column-gap: 2.4rem;
    ${media.sm`
    grid-template-columns: repeat(auto-fit, minmax(4.3rem, 1fr));
  `}
    ${media.md`
    grid-template-columns: repeat(4,minmax(28.2rem,1fr));
  `}
  }
  & .learn-body > .sidebar {
    grid-column: 1;
    grid-row: 2;
    ${media.md`
    grid-column: 1 / 2;
  `}
    ${media.lg`
    grid-column: 1 / 2;
  `}
  }
  & .learn-body > .content {
    grid-column: 1;
    grid-row: 2;
    ${media.md`
    grid-column: 2 / 5;
    max-width: 90%;
  `}
  }
`;

export const Content = styled.div`
`;

export const Container = styled.div`
  display: grid;
  height: inherit;
`;

export const NavListTitle = styled.h3`
  font-weight: 600 !important;
  display: grid;
  font-size: 13px !important;
  line-height: 2.4rem !important;
  letter-spacing: 0.135rem !important;
  margin: 0 0 1.6rem 3.2rem !important;
  color: #606060;
`;
export const NavList = styled.ul`
  display: grid;
  padding-inline-start: 0;
`;
