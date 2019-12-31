import { connect } from 'react-redux';
import ConversationView from './conversation_view';
import { get_dm_users, message, messages } from '../../../actions/message_actions'

const mapStateToProps = (state, ownProps) => {
  return {
    messages: state.entities.messages,
    users: state.entities.dmUsers,
    currentUser: state.entities.dmUsers[state.session.currentUser]
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getDirectMessageUsers: () => dispatch(get_dm_users()),
    sendMessage: (theMessage) => dispatch(message(theMessage)),
    getMessages: () => dispatch(messages())
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConversationView);