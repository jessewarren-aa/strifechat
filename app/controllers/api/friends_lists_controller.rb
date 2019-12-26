class Api::FriendsListsController < ApplicationController
  def index
    @friends = FriendsList.where("receiver_id = #{current_user.id} OR sender_id = #{current_user.id}")
    friendIds = []
  end

  def is_new_request?(sender, receiver)
    found_matches = []
    found_matches += FriendsList.where("sender_id = #{sender} AND receiver_id = #{receiver} AND status != 'REJECTED'").to_a

    found_matches += FriendsList.where("receiver_id = #{sender} AND sender_id = #{receiver} AND status != 'REJECTED'").to_a

    return found_matches.compact.length == 0
  end

  def create
    sender_id = request_params['sender_id']
    receiver = User.find_by(friend_code: request_params['friend_code'])
    if receiver && is_new_request?(sender_id.to_i, receiver['id'].to_i)
      @request = FriendsList.new({sender_id: sender_id, receiver_id: receiver['id'], status: "PENDING"})
      if @request.save
        render json: ["Success! Request sent."], status: 200
      else
        render json: ["This request couldn't be created!"], status: 400
      end
    else
      if not(receiver) 
        render json: ["User doesn't exist."], status: 400
      else
        render json: ["This request already exists, checking your pending!"], status: 409
      end
    end
  end

  private
  def request_params
    self.params.require(:friend_request).permit(:sender_id, :friend_code)
  end
end
