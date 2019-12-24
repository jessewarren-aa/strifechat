class Api::FriendsListsController < ApplicationController
  def index
    @friends = FriendsList.where("receiver_id = #{current_user.id} OR sender_id = #{current_user.id}")
    friendIds = []
  end
end
