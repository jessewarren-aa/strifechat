import { connect } from 'react-redux';
import ConversationFooter from './conversation_footer';
import { logout } from '../../../../actions/session_actions';


const mapStateToProps = (state) => {
  let user = state.entities.users[state.session.currentUser]

  return {
    friendCode: user ? user.friend_code : null,
    currentStatus: user ? user.current_status : "OFFLINE"
  }
};

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConversationFooter);