import { getFriends, postFriend, patchFriend, deleteFriend } from '../utils/friends_utils'

export const RECEIVE_FRIENDS = "RECEIVE_FRIENDS";
export const FILTER_FRIENDS = "FILTER_FRIENDS";
export const CREATE_FRIEND = "CREATE_FRIEND";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const UPDATE_FRIEND = "UPDATE_FRIEND";

export const DELETE_FRIEND = "DELETE_FRIEND";

const deleteAFriend = (friendId) => ({
  type: DELETE_FRIEND,
  friendId
})

const receiveFriends = (friends) => ({
  type: RECEIVE_FRIENDS,
  friends
})

const createAFriend = (friend) => ({
  type: CREATE_FRIEND,
  friend
})

const updateAFriend = (friend) => ({
  type: UPDATE_FRIEND,
  friend
})

export const filterFriends = (status) => ({
  type: FILTER_FRIENDS,
  status
})

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const getFriendsList = () => dispatch => getFriends()
  .then(
    friends => dispatch(receiveFriends(friends))
  )

export const destroyFriend = (friendId) => dispatch => deleteFriend(friendId)
  .then(
    friendId => dispatch(deleteAFriend(friendId)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  )

export const createFriend = (friend) => dispatch => postFriend(friend)
    .then(
      friend => dispatch(createAFriend(friend)),
      errors => dispatch(receiveErrors(errors.responseJSON))
    )
  
export const updateFriend = (friend) => dispatch => patchFriend(friend)
  .then(
    friend => dispatch(updateAFriend(friend)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  )