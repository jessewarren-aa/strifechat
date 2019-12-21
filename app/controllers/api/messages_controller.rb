class Api::MessagesController < ApplicationController
  def index
    @user = current_user
    @messages = @user.direct_messages
  end

  def index_direct_messages
    @user = current_user
    @users = @user.find_unique_direct_messages
  end

  def create
  end

  def update
  end

  def destroy
  end
end
