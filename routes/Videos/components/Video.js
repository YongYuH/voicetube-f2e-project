import React, {
  Fragment,
  PureComponent,
} from 'react';
import PropTypes from 'prop-types';
import FilterConditionBar from '../../../components/FilterConditionBar';
import GridContainer from '../../../components/GridContainer';

class Video extends PureComponent {
  componentDidMount() {
    this.props.fetchVideosRequestAction();
  }

  render() {
    return (
      <Fragment>
        <FilterConditionBar />
        <GridContainer />
      </Fragment>
    );
  }
}

Video.propTypes = {
  fetchVideosRequestAction: PropTypes.func.isRequired,
};

export default Video;
