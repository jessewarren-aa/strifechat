@users.each do |user|
  json.set! user.id, user.filtered
end