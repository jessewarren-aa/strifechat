@server_users.each do |user|
  json.set! user.id, user
end
