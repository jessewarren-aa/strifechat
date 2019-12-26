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