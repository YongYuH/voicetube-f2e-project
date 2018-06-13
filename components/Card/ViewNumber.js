import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import HardwareHeadset from 'material-ui/svg-icons/hardware/headset';
import { grey600 } from 'material-ui/styles/colors';

const Number = styled.div`
  color: #787878;
  display: inline-flex;
  font-size: 14px;
`;

const Wrapper = styled.div`
  align-items: center;
  background-color: white;
  color: black;
  display: inline-flex;
  position: absolute;
`;

const ViewNumber = ({
  views,
}) => (
  <Wrapper>
    <HardwareHeadset
      color={grey600}
      style={{
        height: '19px',
        width: '19px',
      }}
    />
    <Number>
      {views}
    </Number>
  </Wrapper>
);

ViewNumber.propTypes = {
  views: PropTypes.number.isRequired,
};

export default ViewNumber;
