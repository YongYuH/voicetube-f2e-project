import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Duration from './Duration';

const StyledImage = styled.img`
  background-color: white;
  height: 181px;
  position: relative;
  top: -23px;
  width: 100%;
`;

const Wrapper = styled.div`
  height: 135px;
  overflow: hidden;
  width: 100%;
`;

const Thumbnail = ({
  duration,
  thumbnail,
}) => (
  <Wrapper>
    <StyledImage src={thumbnail} />
    <Duration duration={duration} />
  </Wrapper>
);

Thumbnail.propTypes = {
  duration: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
};

export default Thumbnail;
