import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from './Button';

const Wrapper = styled.div`
`;

const FilterConditionBar = ({
  filterConditionList,
  title,
}) => (
  <Wrapper>
    {title}
    {/* {
      filterConditionList.map(filterCondition => (
        <Button
          label={filterCondition}
        />
      ))
    } */}
  </Wrapper>
);

FilterConditionBar.propTypes = {
  filterConditionList: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
};

export default FilterConditionBar;
