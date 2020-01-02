export const getChannel = channelId => {
  return $.ajax({
    method: "GET",
    url: `/api/channels/${channelId}`
  })
};

export const getChannels = () => {
  return $.ajax({
    method: "GET",
    url: "/api/channels"
  })
};

export const postChannel = channel => {
  return $.ajax({
    method: "POST",
    url: "/api/channels",
    data: channel
  })
}

export const patchChannel = channel => {
  return $.ajax({
    method: "PATCH",
    url: `/api/channels/${channel.id}`,
    data: channel
  })
}

export const deleteChannel = channelId => {
  return $.ajax({
    method: "DELETE",
    url: `/api/channels/${channelId}`
  })
}