json.array! @messages do |message|
  json.extract! message, :body, :user_id, :channel_id, :server_id
end