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
`;

const Card = ({
  captions,
  duration,
  level,
  thumbnail,
  title,
  views,
}) => (
  <Wrapper>
    <Thumbnail
      duration={duration}
      src={thumbnail}
    />
    <Title>
      {title}
    </Title>
    <ViewNumber views={views} />
    {/* <Tag label={captions[0]} /> */}
    <Tag label={level} />
  </Wrapper>
);

Card.propTypes = {
  captions: PropTypes.arrayOf(PropTypes.string).isRequired,
  duration: PropTypes.number.isRequired,
  level: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  views: PropTypes.number.isRequired,
};

export default Card;
