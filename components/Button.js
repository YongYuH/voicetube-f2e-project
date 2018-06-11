import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.button`
  background-color: white;
`;

const Button = ({ label }) => (
  <Wrapper>
    {label}
  </Wrapper>
);

Button.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Button;
