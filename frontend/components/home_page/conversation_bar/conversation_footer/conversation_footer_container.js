import { connect } from 'react-redux';
import ConversationFooter from './conversation_footer';
import { logout } from '../../../../actions/session_actions';
import { sendUpdateUser, users } from '../../../../actions/user_actions'


const mapStateToProps = (state) => {
  let user = state.entities.users[state.session.currentUser]

  return {
    friendCode: user ? user.friend_code : null,
    currentStatus: user ? user.current_status : "OFFLINE",
    users: state.entities.users,
    currentUser: state.session.currentUser
  }
};

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  sendUpdateUser: (user) => dispatch(sendUpdateUser(user)),
  sendGetUsers: () => dispatch(users())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConversationFooter);