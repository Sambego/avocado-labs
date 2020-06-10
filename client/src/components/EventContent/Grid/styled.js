import styled from 'styled-components';
import { media } from '../../../utilities/style-utils';

const gridTemplateColumns = {
  '1/2 1/2': 'repeat(2, 1fr)',
  '1/3 1/3 1/3': 'repeat(3, 1fr)',
  '2/3 1/3': '2fr 1fr',
  '1/3 2/3': '1fr 2fr',
  '1/4 1/4 1/4 1/4': 'repeat(4, 1fr)',
  '2/4 1/4 1/4': '2fr 1fr 1fr',
  '1/4 2/4 1/4': '1fr 2fr 1fr',
  '1/4 1/4 2/4': '1fr 1fr 2fr',
  '3/4 1/4': '3fr 1fr',
  '1/4 3/4': '1fr 3fr',
};

const gutterOptions = {
  none: '0',
  xsmall: '8px', // 8
  small: '16px', // 16
  medium: '24px', // 24
  large: '50px', // 40
  xlarge: '100px', // 40
};

export default styled.div`
  width: 100%;
  display: grid;
  align-items: center;
  display: grid;
  padding: ${({ outerGutter }) => outerGutter ? '0 15px' : '0'};
  grid-template-columns: 1fr;
  margin: 0 auto;

  ${media.md`
    grid-template-columns: repeat(12, 1fr);
    grid-template-columns: ${({ distribution }) => gridTemplateColumns[distribution]};
    grid-gap: ${({ gridGutter }) => gutterOptions[gridGutter]};
    max-width: 120rem;
    padding: 0 1.5rem;
  `}
`;
