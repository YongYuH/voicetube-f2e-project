import { connect } from 'react-redux';
import FilterConditionBar from './FilterConditionBar';
import { setSortCondition } from '../routes/Videos/modules/video';

const mapDispatchToProps = dispatch => ({
  setFilterAction: (condition) => {
    dispatch(setSortCondition(condition));
  },
});
const mapStateToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(FilterConditionBar);
