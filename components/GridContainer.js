import { connect } from 'react-redux';
import Grid from './Grid';
import {
  getIsFetchingVideos,
  getIsPristine,
  getVideos,
} from '../routes/Videos/modules/video';

const mapStateToProps = state => ({
  isFetchingVideos: getIsFetchingVideos(state),
  isPristine: getIsPristine(state),
  videos: getVideos(state),
});

export default connect(mapStateToProps)(Grid);
