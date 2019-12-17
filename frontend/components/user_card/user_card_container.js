import { connect } from 'react-redux';
import UserCard from './user_card';
import { logout } from '../../actions/session_actions';

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser // [DEV] should revert to state.entities.users[state.session.currentUser] and have currentUser be just the ID
  }
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserCard);