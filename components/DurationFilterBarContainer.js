import { connect } from 'react-redux';
import FilterConditionBar from './FilterConditionBar';
import { setDurationFilterIndex } from '../routes/Videos/modules/video';

const SECONDS_PER_MINUTE = 60;

function getDurationRangeFromIndex(index) {
  switch (index) {
    case 0:
    default:
      return {
        max: Number.MAX_SAFE_INTEGER,
        min: 0,
      };
    case 1:
      return {
        max: 4 * SECONDS_PER_MINUTE,
        min: 0,
      };
    case 2:
      return {
        max: 10 * SECONDS_PER_MINUTE,
        min: 4 * SECONDS_PER_MINUTE,
      };
    case 3:
      return {
        max: Number.MAX_SAFE_INTEGER,
        min: 10 * SECONDS_PER_MINUTE,
      };
  }
}

const mapDispatchToProps = dispatch => ({
  setFilterAction: (index) => {
    dispatch(setDurationFilterIndex(getDurationRangeFromIndex(Number(index))));
  },
});
const mapStateToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(FilterConditionBar);
