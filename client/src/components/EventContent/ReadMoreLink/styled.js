import styled from 'styled-components';

export default styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 1.3rem;
  font-weight: 600;
  letter-spacing: 0.135rem;
  line-height: 1.7;
  color: #0d96c6;
  transition: color 0.25s ease-in;
  cursor: pointer;

  &:after {
    content: '';
    display: inline-block;
    width: 0;
    height: 0;
    margin-top: -0.15rem;
    margin-left: 1rem;
    border-top: 0.5rem solid transparent;
    border-right: 0.5rem solid transparent;
    border-bottom: 0.5rem solid transparent;
    border-left: 0.5rem solid #0d96c6;
    transition: border 0.25s ease-in;
  }

  &:hover,
  &:focus {
    color: #053b4e;
    transition: color 0.25s ease-in;
    &:after {
      border-left: 0.5rem solid #053b4e;
      transition: border 0.25s ease-in;
    }
  }
`;
