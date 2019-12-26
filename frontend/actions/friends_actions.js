import { getFriends, postFriend } from '../utils/friends_utils'

export const RECEIVE_FRIENDS = "RECEIVE_FRIENDS";
export const FILTER_FRIENDS = "FILTER_FRIENDS";
export const CREATE_FRIEND = "CREATE_FRIEND";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS"

const receiveFriends = (friends) => ({
  type: RECEIVE_FRIENDS,
  friends
})

const createAFriend = (friend) => ({
  type: CREATE_FRIEND,
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

export const createFriend = (friend) => dispatch => postFriend(friend)
    .then(
      friend => dispatch(createAFriend(friend)),
      errors => dispatch(receiveErrors(errors.responseJSON))
    )