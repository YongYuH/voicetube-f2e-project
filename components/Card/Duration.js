import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { formatDuration } from '../../utils/format';

const Time = styled.div`
  align-items: center;
  bottom: calc(20px / 3.4 * 1.9);
  border-radius: 2px;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  display: flex;
  font-family: "HelveticaNeue, Helvetica, Arial, sans-serif";
  font-size: 14px;
  height: 20px;
  justify-content: center;
  position: relative;
  right: calc(39px / 4.9 * 0.7);
  width: 39px;
`;

const Wrapper = styled.div`
  bottom: calc(22.5px + 180px - 135px);
  display: flex;
  position: relative;
  justify-content: flex-end;
  width: 100%;
`;

const Duration = ({ duration }) => (
  <Wrapper>
    <Time>
      {formatDuration(duration)}
    </Time>
  </Wrapper>
);

Duration.propTypes = {
  duration: PropTypes.number.isRequired,
};

export default Duration;
