import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Thumbnail from './Thumbnail';
import Tag from './Tag';
import ViewNumber from './ViewNumber';

const Title = styled.div`
`;

const Wrapper = styled.div`
  background-color: white;
  color: black;
  height: 228px;
  width: 240px;
`;

const Card = ({ videoInfo }) => (
  <Wrapper>
    <Thumbnail
      duration={videoInfo.duration}
      thumbnail={videoInfo.thumbnail}
    />
    <Title>
      {videoInfo.title}
    </Title>
    <ViewNumber views={videoInfo.views} />
    {/* <Tag />
    <Tag label={level} /> */}
  </Wrapper>
);

Card.propTypes = {
  videoInfo: PropTypes.shape({
    captions: PropTypes.arrayOf(PropTypes.string).isRequired,
    duration: PropTypes.number.isRequired,
    level: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    views: PropTypes.number.isRequired,
  }).isRequired,
};

export default Card;
