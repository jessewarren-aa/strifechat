import { connect } from 'react-redux';
import FLBody from './fl_body';

import { getFriendsList, createFriend, updateFriend, destroyFriend } from '../../../../actions/friends_actions'
import { friendSelector } from '../../../../reducers/friends_reducer'


const mapStateToProps = (state, ownProps) => {
  return {
    friendRequests: friendSelector(state.entities.friendRequests, state.ui.friendsListFilter),
    users: state.entities.users,
    currentUser: state.session.currentUser,
    status: state.ui.friendsListFilter,
    errors: state.errors.friendRequests
  }
};

const mapDispatchToProps = (dispatch) => ({
  getFriendsList: (status) => friendSelector(dispatch(getFriendsList()), status),
  createFriend: (friend) => dispatch(createFriend(friend)),
  updateFriend: (friend) => dispatch(updateFriend(friend)),
  destroyFriend: (friendId) => dispatch(destroyFriend(friendId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FLBody);