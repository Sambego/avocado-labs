import React from 'react';
import PropTypes from 'prop-types';
import MainContainerStyled from './styled';

const MainContainer = ({ children }) => (
  <MainContainerStyled>
    { children }
  </MainContainerStyled>
);

MainContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainContainer;
