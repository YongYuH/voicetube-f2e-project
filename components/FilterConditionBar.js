import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import RadioButton from './RadioButton';

const Condition = styled.ul`
  display: inline-flex;
  font-size: 12px;
`;

const Label = styled.span`
  color: #787878;
  font-weight: bold;
  font-size: 14px;
  margin: 0 20px;
`;

const ListItem = styled.li`
  list-style-type: none;
`;

const Wrapper = styled.span`
  margin: 0 20px;
`;

class FilterConditionBar extends PureComponent {
  constructor(props) {
    super();
    this.state = {
      selectedValue: props.filterCondition.conditions[0].value,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    const selectedValue = String(event.currentTarget.value);
    this.setState({ selectedValue });
    this.props.setFilterAction(selectedValue);
  }

  render() {
    const { selectedValue } = this.state;
    const { filterCondition } = this.props;
    return (
      <Wrapper>
        <Label>
          {filterCondition.label}
        </Label>
        <Condition>
          {
            filterCondition.conditions.map(condition => (
              <ListItem key={condition.id}>
                <RadioButton
                  checked={selectedValue === condition.value}
                  id={condition.id}
                  label={condition.label}
                  onClick={this.handleClick}
                  value={condition.value}
                />
              </ListItem>
            ))
          }
        </Condition>
      </Wrapper>
    );
  }
}

FilterConditionBar.propTypes = {
  filterCondition: PropTypes.shape({
    label: PropTypes.string.isRequired,
    conditions: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
      ]).isRequired,
    }).isRequired),
  }).isRequired,
  setFilterAction: PropTypes.func.isRequired,
};

export default FilterConditionBar;
