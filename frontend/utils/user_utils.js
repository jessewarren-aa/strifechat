export const getUser = (userId) => {
  return $.ajax({
    method: "GET",
    url: `/api/users/${userId}`
  })
};

export const getUsers = () => {
  return $.ajax({
    method: "GET",
    url: `/api/users`
  })
};

export const patchUser = (user) => {
  return $.ajax({
    method: "PATCH",
    url: `/api/users/${user.id}`,
    data: user
  })
};