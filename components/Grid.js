import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Card from './Card';

const Wrapper = styled.div`
  color: black;
  /* display: grid;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  grid-template-columns: repeat(auto-fill, 240px); */
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 auto;
  margin-top: calc(20px / 3.4 * 7.5);
  width: 1030px;
`;

const Grid = ({ videos }) => (
  <Wrapper>
    {
      videos.map(videoInfo => (
        <Card
          key={videoInfo.id}
          videoInfo={videoInfo}
        />
      ))
    }
  </Wrapper>
);

Grid.propTypes = {
  videos: PropTypes.arrayOf(PropTypes.shape({
    captions: PropTypes.arrayOf(PropTypes.string),
    duration: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    views: PropTypes.number.isRequired,
  })).isRequired,
};

export default Grid;
