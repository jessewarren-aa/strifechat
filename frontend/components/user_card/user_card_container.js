import { connect } from 'react-redux';
import UserCard from './user_card';
import { login, logout } from '../../actions/session_actions';

const mapStateToProps = state => {
  return {
    currentUser: state.entities.users[state.session.currentUser]
  }
};

const mapDispatchToProps = dispatch => {
  return {
    login: (user) => dispatch(login(user)),
    logout: () => dispatch(logout())
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserCard);