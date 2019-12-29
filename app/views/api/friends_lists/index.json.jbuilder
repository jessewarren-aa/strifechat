json.users do
  @friends.each do |friend|
    json.set! friend.sender.id, friend.senderFiltered
    json.set! friend.receiver.id, friend.receiverFiltered 
  end
end

json.friends do
  json.array! @friends
end
