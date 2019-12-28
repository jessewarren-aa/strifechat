json.users do
  @friends.each do |friend|
    json.set! friend.sender.id, friend.sender
    json.set! friend.receiver.id, friend.receiver
  end
end

json.friends do
  json.array! @friends
end


# json.array! @friends
# json.friendRequests do
#   @friends.each do |friend|
#     json.set! friend.id, friend
#   end
# end