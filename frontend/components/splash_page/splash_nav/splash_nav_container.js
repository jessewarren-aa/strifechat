import { connect } from 'react-redux';
import { logout } from '../../../actions/session_actions';
import SplashNav from './splash_nav';


const mapStateToProps = (state) => ({
  currentUser: state.entities.users[state.session.currentUser]
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SplashNav);