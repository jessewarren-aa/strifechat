json.array! @users do |user|
  json.extract! user, :username, :id, :email, :image_url, :friend_code, :unique_id, :current_status
end