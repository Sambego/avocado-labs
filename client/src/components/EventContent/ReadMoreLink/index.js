import React from 'react';
import PropTypes from 'prop-types';
import ReadMoreLinkStyled from './styled';

const ReadMoreLink = ({ Href, children, center }) => (
  <ReadMoreLinkStyled href={Href} center={center}>
    {children}
  </ReadMoreLinkStyled>
);

ReadMoreLink.propTypes = {
  Href: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
  center: PropTypes.bool.isRequired,
};

export default ReadMoreLink;
