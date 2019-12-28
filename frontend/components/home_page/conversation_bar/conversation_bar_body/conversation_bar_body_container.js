import { connect } from 'react-redux';
import ConversationBarBody from './conversation_bar_body';
import { messages, get_dm_users } from '../../../../actions/message_actions'


const mapStateToProps = (state) => ({
  messages: state.entities.messages,
  users: state.entities.users,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  getMessages: () => dispatch(messages()),
  getDirectMessageUsers: () => dispatch(get_dm_users()),
  // getUser: (userId) => dispatch(user(userId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConversationBarBody);