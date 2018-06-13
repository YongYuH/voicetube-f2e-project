import React, {
  PureComponent,
} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import DurationFilterBarContainer from '../../../components/DurationFilterBarContainer';
import GridContainer from '../../../components/GridContainer';
import SortBarContainer from '../../../components/SortBarContainer';

const Nav = styled.div`
  border-bottom: 1px solid #D8D8D8;
  margin: 0 auto;
  padding-bottom: 10px;
  width: 1035px;
`;

const Wrapper = styled.div`
  margin-top: 60px;
  width: 1366px;
`;

const sortCondition = {
  label: '排序',
  conditions: [
    {
      id: 'sort-0',
      label: '發布時間',
      value: 'publish',
    },
    {
      id: 'sort-1',
      label: '觀看次數',
      value: 'views',
    },
    {
      id: 'sort-2',
      label: '收藏次數',
      value: 'collectCount',
    },
  ],
};

const durationCondition = {
  label: '長度',
  conditions: [
    {
      id: 'duration-0',
      label: '不限',
      value: '0',
    },
    {
      id: 'duration-1',
      label: '4分鐘以下',
      value: '1',
    },
    {
      id: 'duration-2',
      label: '5 - 10分鐘',
      value: '2',
    },
    {
      id: 'duration-3',
      label: '超過10分鐘',
      value: '3',
    },
  ],
};

class Video extends PureComponent {
  componentDidMount() {
    this.props.fetchVideosRequestAction();
  }

  render() {
    return (
      <Wrapper>
        <Nav>
          <SortBarContainer filterCondition={sortCondition} />
          <DurationFilterBarContainer filterCondition={durationCondition} />
        </Nav>
        <GridContainer />
      </Wrapper>
    );
  }
}

Video.propTypes = {
  fetchVideosRequestAction: PropTypes.func.isRequired,
};

export default Video;
