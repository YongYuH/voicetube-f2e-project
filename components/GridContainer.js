import { connect } from 'react-redux';
import Grid from './Grid';
import { getVideos } from '../routes/Videos/modules/video';

const mapStateToProps = state => ({
  videos: getVideos(state),
});

export default connect(mapStateToProps)(Grid);
