export const getServerUser = serverUserId => {
  return $.ajax({
    method: "GET",
    url: `/api/serverusers/${serverUserId}`
  })
};

export const getServerUsers = () => {
  return $.ajax({
    method: "GET",
    url: "/api/serverusers"
  })
};

// create, update, destroy
export const postServerUser = serverUser => {
  return $.ajax({
    method: "POST",
    url: "/api/serverusers",
    data: serverUser
  })
}

export const deleteServerUser = serverUserId => {
  return $.ajax({
    method: "DELETE",
    url: `/api/serverusers/${serverUserId}`
  })
}