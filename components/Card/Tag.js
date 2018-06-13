import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withCondition } from '../../utils/hoc';

const Wrapper = styled.div`
  align-items: center;
  background-color: ${props => props.backgroundColor || 'white'};
  border-radius: 2px;
  color: ${props => props.color || 'black'};
  display: inline-flex;
  font-size: 12px;
  height: 21px;
  justify-content: center;
  width: 40px;
`;

const isLabelInValid = props => (!props.label);

const Tag = ({
  backgroundColor,
  color,
  label,
}) => (
  <Wrapper
    backgroundColor={backgroundColor}
    color={color}
  >
    {label}
  </Wrapper>
);

Tag.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

const EnhancedTag = withCondition(isLabelInValid)(Tag);

export default EnhancedTag;
