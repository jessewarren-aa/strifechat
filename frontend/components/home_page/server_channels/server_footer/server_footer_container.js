import { connect } from 'react-redux';
import Serverfooter from './server_footer';
import { logout } from '../../../../actions/session_actions';


const mapStateToProps = (state) => {
  let user = state.entities.users[state.session.currentUser]

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
)(Serverfooter);