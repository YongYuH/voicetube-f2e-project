import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const checkedStyle = `
  background-color: #4283E4;
  color: white;
  cursor: pointer;
`;

const StyledInput = styled.input`
  appearance: none;
  position: absolute;
`;

const StyledLabel = styled.label`
  background-color: white;
  border: none;
  border-radius: 4px;
  color: #787878;
  margin: ${props => props.margin};
  padding: ${props => props.padding};

  ${props => props.checked ? checkedStyle : ''}

  &:hover, &:focus, &:active {
    ${checkedStyle}
  }
`;

const RadioButton = ({
  checked,
  id,
  label,
  margin,
  onClick,
  padding,
  value,
}) => (
  <StyledLabel
    checked={checked}
    htmlFor={id}
    margin={margin}
    padding={padding}
  >
    <StyledInput
      id={id}
      onClick={onClick}
      type="radio"
      value={value}
    />
    {label}
  </StyledLabel>
);

RadioButton.defaultProps = {
  checked: false,
  margin: 'auto',
  padding: '5px 10px',
};

RadioButton.propTypes = {
  checked: PropTypes.bool,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  margin: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  padding: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
};

export default RadioButton;
