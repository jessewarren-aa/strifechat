import { connect } from 'react-redux';
import SNMPModal from './snmp_modal';

const mapStateToProps = (state) => ({
  users: state.entities.dmUsers,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SNMPModal);