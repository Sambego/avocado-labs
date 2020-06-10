import React from 'react';
import PropTypes from 'prop-types';
import GridStyled from './styled';

const Grid = ({
  distribution,
  children,
  outerGutter,
  gridGutter,
}) => (
  <GridStyled
    distribution={distribution}
    gridGutter={gridGutter}
    outerGutter={outerGutter}
  >
    {children}
  </GridStyled>
);

Grid.propTypes = {
  /** removes the outer gutter in case you need content to touch the edges */
  outerGutter: PropTypes.bool,
  /** Regulates the size of the gutter betwen each column */
  gridGutter: PropTypes.oneOf(['none', 'xsmall', 'small', 'medium', 'large']),
  /** Defines the distribution and amount of columns */
  distribution: PropTypes.oneOf([
    '1/2 1/2',
    '1/3 1/3 1/3',
    '2/3 1/3',
    '1/3 2/3',
    '1/4 1/4 1/4 1/4',
    '2/4 1/4 1/4',
    '1/4 2/4 1/4',
    '1/4 1/4 2/4',
    '3/4 1/4',
    '1/4 3/4',
  ]),
  children: PropTypes.node.isRequired,
};

Grid.defaultProps = {
  gridGutter: 'medium',
  outerGutter: true,
  distribution: '1/2 1/2',
};

export default Grid;
