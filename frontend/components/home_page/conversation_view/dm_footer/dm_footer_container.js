import { connect } from 'react-redux';
import DMFooter from './dm_footer';
import { get_dm_users, message } from '../../../../actions/message_actions'


const mapStateToProps = (state) => {
  return {
    users: state.entities.users,
    currentUser: state.entities.users[state.session.currentUser],
    // messages: state.entities.messages
  }
};

const mapDispatchToProps = (dispatch) => ({
  getDirectMessageUsers: () => dispatch(get_dm_users()),
  sendMessage: (theMessage) => dispatch(message(theMessage))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DMFooter);