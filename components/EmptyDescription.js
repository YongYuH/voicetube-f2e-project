import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withCondition } from '../utils/hoc';

const Wrapper = styled.div`
  align-items: center;
  color: #787878;
  display: flex;
  height: 180px;
  justify-content: center;
  width: 100%;
`;

const isEmpty = props => props.isPristine || props.arrayLength !== 0;
const Description = ({ description }) => (
  <Wrapper>
    {description}
  </Wrapper>
);

Description.propTypes = {
  description: PropTypes.string.isRequired,
};

const EmptyDescription = withCondition(isEmpty)(Description);

export default EmptyDescription;
