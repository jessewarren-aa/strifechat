import { getFriends } from '../utils/friends_utils'

export const RECEIVE_FRIENDS = "RECEIVE_FRIENDS";

const receiveFriends = (friends) => ({
  type: RECEIVE_FRIENDS,
  friends
})

export const getFriendsList = () => dispatch => getFriends()
  .then(
    friends => dispatch(receiveFriends(friends))
  )