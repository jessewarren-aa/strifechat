export const getMessages = () => {
  return $.ajax({
    method: "GET",
    url: "/api/messages"
  })
};

export const createMessage = (message) => {
  return $.ajax({
    method: "POST",
    url: "/api/messages",
    data: message
  })
}

export const getDMUsers = () => {
  return $.ajax({
    method: "GET",
    url: "/api/messages/index_dms"
  })
};