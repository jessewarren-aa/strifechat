export const getServer = serverId => {
  return $.ajax({
    method: "GET",
    url: `/api/servers/${serverId}`
  })
};

export const getServers = () => {
  return $.ajax({
    method: "GET",
    url: "/api/servers"
  })
};