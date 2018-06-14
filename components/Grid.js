import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import EmptyDescription from './EmptyDescription';
import LoadingIcon from './LoadingIcon';
import Card from './Card';

const Wrapper = styled.div`
  color: black;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 auto;
  margin-top: calc(20px / 3.4 * 7.5);
  width: 1030px;
`;

const Grid = ({
  isFetchingVideos,
  isPristine,
  videos,
}) => (
  <Wrapper>
    <LoadingIcon isLoading={isFetchingVideos} />
    <EmptyDescription
      arrayLength={videos.length}
      isPristine={isPristine}
      description="沒有篩選結果"
    />
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
  isFetchingVideos: PropTypes.bool.isRequired,
  isPristine: PropTypes.bool.isRequired,
  videos: PropTypes.arrayOf(PropTypes.shape({
    captions: PropTypes.arrayOf(PropTypes.string),
    duration: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    views: PropTypes.number.isRequired,
  })).isRequired,
};

export default Grid;
