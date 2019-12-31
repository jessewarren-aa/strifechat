import { connect } from 'react-redux';
import ServerConversation from './server_conversation';
// import { get_dm_users, message, messages } from '../../../actions/message_actions'

const mapStateToProps = (state, ownProps) => {
  return {
    messages: state.entities.messages,
    users: state.entities.users,
    currentUser: state.entities.users[state.session.currentUser]
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    // getDirectMessageUsers: () => dispatch(get_dm_users()),
    // sendMessage: (theMessage) => dispatch(message(theMessage)),
    // getMessages: () => dispatch(messages())
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ServerConversation);