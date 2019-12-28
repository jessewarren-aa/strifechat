json.array! @servers do |server|
  json.extract! user, :id, :name, :description, :server_icon, :unique_id, :owner_id
end