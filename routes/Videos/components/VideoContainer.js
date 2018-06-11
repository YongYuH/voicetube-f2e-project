import { connect } from 'react-redux';
import Video from './Video';
import { fetchVideosRequest } from '../modules/video';

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
  fetchVideosRequestAction: () => {
    dispatch(fetchVideosRequest());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Video);
