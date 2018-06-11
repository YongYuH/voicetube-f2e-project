import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Duration = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
`;

const StyledImage = styled.img`
  background-color: white;
`;

const Wrapper = styled.div`
`;

const Thumbnail = ({
  duration,
  thumbnail,
}) => (
  <Wrapper>
    <StyledImage src={thumbnail} />
    <Duration>
      {duration}
    </Duration>
  </Wrapper>
);

Thumbnail.propTypes = {
  duration: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
};

export default Thumbnail;
