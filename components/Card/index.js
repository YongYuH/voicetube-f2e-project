import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import LanguageTag from './LanguageTag';
import LevelTag from './LevelTag';
import Thumbnail from './Thumbnail';
import ViewNumber from './ViewNumber';

const Content = styled.div`
  height: calc(228px - 135px);
  margin-left: calc(39px / 4.9 * 0.7);
  margin-right: calc(39px / 4.9 * 0.7);
`;

const Corner = styled.div`
  display: inline-flex;
  justify-content: flex-end;
  width: 100%;

  div {
    margin: 4px;
  }
`;

const Title = styled.div`
  font-size: 14px;
  line-height: 20px;
  height: calc(20px * 2); 
  margin-bottom: calc(20px / 3.4 * 2);
  margin-top: calc(20px / 3.4 * 0.9);
  overflow: hidden;
  position: relative;
`;

const Wrapper = styled.div`
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 1px 3px 0 rgba(0,0,0,0.30);
  color: black;
  height: 228px;
  margin: 10px 0;
  width: 240px;
`;

const Card = ({ videoInfo }) => (
  <Wrapper>
    <Thumbnail
      duration={videoInfo.duration}
      thumbnail={videoInfo.thumbnail}
    />
    <Content>
      <Title>
        {videoInfo.title}
      </Title>
      <ViewNumber views={videoInfo.views} />
      <Corner>
        <LanguageTag captions={videoInfo.captions} />
        <LevelTag level={videoInfo.level} />
      </Corner>
    </Content>
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
