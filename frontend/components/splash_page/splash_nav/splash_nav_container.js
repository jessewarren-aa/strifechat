import { connect } from 'react-redux';
import { logout } from '../../../actions/session_actions';
import SplashNav from './splash_nav';


const mapStateToProps = (state) => ({
  currentUser: state.entities.dmUsers[state.session.currentUser]
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SplashNav);