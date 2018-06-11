import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Card from './Card';

const Wrapper = styled.div`
  background-color: white;
  color: black;
`;

const Grid = ({ cardList }) => (
  <Wrapper>
    {
      cardList.map((cardInfo) => (
        <Card
          cardInfo
        />
      ))
    }
  </Wrapper>
);

Grid.propTypes = {
  cardList: PropTypes.arrayOf(PropTypes.shape({
    captions: PropTypes.arrayOf(PropTypes.string),
    duration: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    views: PropTypes.number.isRequired,
  })).isRequired,
};

export default Grid;
