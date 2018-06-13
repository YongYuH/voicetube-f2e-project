import React from 'react';
import styled from 'styled-components';
import CircularProgress from 'material-ui/CircularProgress';
import { withCondition } from '../utils/hoc';

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  height: 180px;
  justify-content: center;
  width: 100%;
`;

const isNotLoading = props => !props.isLoading;
const Icon = () => (
  <Wrapper>
    <CircularProgress />
  </Wrapper>
);
const FetchingLoadingIcon = withCondition(isNotLoading)(Icon);

export default FetchingLoadingIcon;
