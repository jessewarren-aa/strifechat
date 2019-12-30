import { connect } from 'react-redux';
import SearchBar from './snmp_modal';

const mapStateToProps = (state) => ({
  users: state.entities.users,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);