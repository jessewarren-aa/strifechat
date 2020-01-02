import { connect } from 'react-redux';
import ServerConversation from './server_conversation';
import { messages, get_dm_users, message } from '../../../actions/message_actions'

const mapStateToProps = (state, ownProps) => {
  return {
    messages: state.entities.messages,
    users: state.entities.dmUsers,
    currentUser: state.entities.dmUsers[state.session.currentUser]
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMessages: () => dispatch(messages()),
    getDirectMessageUsers: () => dispatch(get_dm_users()),
    sendMessage: (theMessage) => dispatch(message(theMessage))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ServerConversation);