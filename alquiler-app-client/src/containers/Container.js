import { connect } from 'react-redux';
import { fetchDeptos, selectDepto, submitAlquiler } from '../actions/deptos';
import { getDeptos, selectedDepto, message } from '../reducers/selectors';
import Main from './Main';

const mapStateToProps = state => ({
  deptos: getDeptos(state),
  deptoSelected: selectedDepto(state),
  message: message(state)
});

export default connect(
  mapStateToProps,
  { fetchDeptos, selectDepto, submitAlquiler }
)(Main);
