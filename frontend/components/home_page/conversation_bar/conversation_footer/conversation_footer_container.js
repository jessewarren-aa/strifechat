import { connect } from 'react-redux';
import ConversationFooter from './conversation_footer';
import { logout } from '../../../../actions/session_actions';


const mapStateToProps = (state) => {
  let user = state.entities.users[state.session.currentUser]
  // if (Array.isArray(user)) {
  //   user = user[1]
  // }

  return {
    friendCode: user ? user.friend_code : null
  }
};

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConversationFooter);