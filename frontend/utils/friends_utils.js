export const getFriends = () => {
  return $.ajax({
    method: "GET",
    url: "/api/friends_lists"
  })
}

export const postFriend = (friend) => {
  return $.ajax({
    method: "POST",
    url: "/api/friends_lists",
    data: friend
  })
}

export const patchFriend = (friend) => {
  return $.ajax({
    method: "PATCH",
    url: `/api/friends_lists/${friend.friend_request.id}`,
    data: friend
  })
}

export const deleteFriend = (friendId) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/friends_lists/${friendId}`
  })
}