json.server do
  json.extract! @server, :id, :name, :description, :server_icon, :unique_id, :owner_id
end

json.join do
  json.extract! @server_user, :id, :user_id, :server_id
end