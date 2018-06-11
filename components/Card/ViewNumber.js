import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const headSet = '/static/baseline-headset-24px.svg';

const Icon = styled.img`
`;

const Number = styled.div`
`;

const Wrapper = styled.div`
  background-color: white;
  color: black;
`;

const ViewNumber = ({
  views,
}) => (
  <Wrapper>
    <Icon src={headSet} />
    <Number>
      {views}
    </Number>
  </Wrapper>
);

ViewNumber.propTypes = {
  views: PropTypes.number.isRequired,
};

export default ViewNumber;
