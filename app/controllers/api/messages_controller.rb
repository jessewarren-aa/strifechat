class Api::MessagesController < ApplicationController
  def index
    @messages = Message.all
  end

  def index_direct_messages
    @user = current_user
    @users = @user.find_unique_direct_messages
    # @users = Hash[ @users.map {|user| [user[:id], user]}]
  end

  def create
    user_blocked = false
    @message = Message.new(message_params)
    if message_params[:channel_id][0] == "u"
      sender_id = message_params[:user_id]
      receiver_id = User.find_by(unique_id: message_params[:channel_id]).id
      if FriendsList.where("((sender_id = #{sender_id} AND receiver_id = #{receiver_id}) OR (sender_id = #{receiver_id} AND receiver_id = #{sender_id})) AND status = 'BLOCKED'").size > 0
        render json: ["Message could not be delivered. This user may not accept private messages."], status: 418
        return
      end
    end


    if message_params[:channel_id] == current_user.unique_id
      render json: ["Why are you messaging yourself..."], status: 400
    else
      if @message.save
        render :show
      else
        render json: ["Message could not be sent! Please email the developer!"], status: 422
      end
    end
    


  end

  def update
  end

  def destroy
  end

  private
  def message_params
    self.params.require(:message).permit(:body, :user_id, :channel_id, :server_id)
  end
end
