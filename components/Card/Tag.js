import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  border-radius: 2px;
`;

const Tag = ({
  label,
}) => (
  <Wrapper>
    {label}
  </Wrapper>
);

Tag.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Tag;
