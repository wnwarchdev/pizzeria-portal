import { connect } from 'react-redux';
import Waiter from './Waiter';
import { getAll, fetchFromAPI, getLoadingState, postToAPI } from '../../../redux/tablesRedux';

const mapStateToProps = (state) => ({
  tables: getAll(state),
  loading: getLoadingState(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchTables: () => dispatch(fetchFromAPI()),
  toggleTableStatus: (tableData, newStatus) => dispatch(postToAPI(tableData, newStatus)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Waiter);