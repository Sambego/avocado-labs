import React from 'react';
import PropTypes from 'prop-types';
import IndexTitleStyled from './styled';

const IndexTitle = ({ children }) => (
  <IndexTitleStyled>
    {children}
  </IndexTitleStyled>
);

IndexTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

export default IndexTitle;
