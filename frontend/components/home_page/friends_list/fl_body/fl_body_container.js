import { connect } from 'react-redux';
import FLBody from './fl_body';

import { getFriendsList } from '../../../../actions/friends_actions'


const mapStateToProps = (state, ownProps) => ({
  friends: state.entities.friends,
  users: state.entities.users,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  getFriendsList: () => dispatch(getFriendsList())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FLBody);