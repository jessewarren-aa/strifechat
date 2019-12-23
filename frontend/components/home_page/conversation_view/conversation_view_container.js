import { connect } from 'react-redux';
import ConversationView from './conversation_view';
import { get_dm_users, message, messages } from '../../../actions/message_actions'

const mapStateToProps = (state, ownProps) => {
  // console.log(ownProps)
  // let currentUser = undefined
  // Object.values(state.entities.users).forEach(user => {
  //   console.log(ownProps.match.params[0])
  //   // console.log(user)
  //   if (user.unique_id === ownProps.match.params[0]) {
  //     currentUser = user
  //   }
  // })[0]

  // const filteredMessages = {}

  // Object.values(state.entities.messages).forEach((message, index) => {
  //   if (message.user_id === currentUser.id) {
  //     filteredMessages[index] = message
  //   } 
  // })

  // console.log(filteredMessages)
  // console.log(state.entities.messages)
  return {
    messages: state.entities.messages,
    users: state.entities.users,
    currentUser: state.entities.users[state.session.currentUser]
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