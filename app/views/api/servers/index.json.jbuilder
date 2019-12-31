json.array! @servers do |server|
  json.extract! server, :id, :name, :description, :server_icon, :unique_id, :owner_id
end