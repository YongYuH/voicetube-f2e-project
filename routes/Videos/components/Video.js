import React, {
  Fragment,
  PureComponent,
} from 'react';
import PropTypes from 'prop-types';
import FilterConditionBar from '../../../components/FilterConditionBar';
import Card from '../../../components/Card';

class Video extends PureComponent {
  componentDidMount() {
    this.props.fetchVideosRequestAction();
  }

  render() {
    return (
      <Fragment>
        <FilterConditionBar />
        <Card />
      </Fragment>
    );
  }
}

Video.propTypes = {
  fetchVideosRequestAction: PropTypes.func.isRequired,
};

export default Video;
