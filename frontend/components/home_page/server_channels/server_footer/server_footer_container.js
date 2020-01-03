import { connect } from 'react-redux';
import Serverfooter from './server_footer';
import { logout } from '../../../../actions/session_actions';

import { get_dm_users} from '../../../../actions/message_actions'


const mapStateToProps = (state) => {
  let user = state.entities.dmUsers[state.session.currentUser]

  return {
    friendCode: user ? user.friend_code : null,
    currentStatus: user ? user.current_status : "OFFLINE"
  }
};

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  getDirectMessageUsers: () => dispatch(get_dm_users()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Serverfooter);