import { connect } from 'react-redux';
import ConversationFooter from './conversation_footer';
import { logout } from '../../../../actions/session_actions';


const mapStateToProps = (state) => ({
  friendCode: state.entities.users[state.session.currentUser].friend_code
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConversationFooter);