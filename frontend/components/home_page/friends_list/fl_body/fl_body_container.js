import { connect } from 'react-redux';
import FLBody from './fl_body';

import { getFriendsList, createFriend } from '../../../../actions/friends_actions'
import { friendSelector } from '../../../../reducers/friends_reducer'


const mapStateToProps = (state, ownProps) => {
  return {
    friends: friendSelector(state.entities.friends, state.ui.friendsListFilter),
    users: state.entities.users,
    currentUser: state.session.currentUser,
    status: state.ui.friendsListFilter,
    errors: state.errors.friendRequests
  }
};

const mapDispatchToProps = (dispatch) => ({
  getFriendsList: (status) => friendSelector(dispatch(getFriendsList()), status),
  createFriend: (friend) => dispatch(createFriend(friend))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FLBody);