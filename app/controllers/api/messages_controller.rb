class Api::MessagesController < ApplicationController
  def index
    @user = current_user
    @messages = @user.direct_messages
  end

  def index_direct_messages
    @user = current_user
    @users = @user.find_unique_direct_messages
    # @users = Hash[ @users.map {|user| [user[:id], user]}]
    # [DEV] this correctly maps the hash, just gotta not "array!"
  end

  def create
    @message = Message.new(message_params)
    if @message.save
      render :show
    else
      render json: ["Message could not be sent! Please email the developer!"], status: 422
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
