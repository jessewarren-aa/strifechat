import { connect } from 'react-redux';
import DMFooter from './dm_footer';
import { get_dm_users, message, clearErrors } from '../../../../actions/message_actions'
import {users} from '../../../../actions/user_actions'


const mapStateToProps = (state, ownProps) => {
  return {
    users: state.entities.users,
    currentUser: state.session.currentUser,
    errors: state.errors.messages
    // messages: state.entities.messages
  }
};

const mapDispatchToProps = (dispatch) => ({
  getDirectMessageUsers: () => dispatch(get_dm_users()),
  sendMessage: (theMessage) => dispatch(message(theMessage)),
  sendGetUsers: () => dispatch(users()),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DMFooter);