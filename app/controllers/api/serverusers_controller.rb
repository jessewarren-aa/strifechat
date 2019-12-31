class Api::ServerusersController < ApplicationController
  def index
    @server_users = ServerUser.all
  end

  def show
    @server_user = ServerUser.find_by(id: self.params[:id])
  end

  def create
  end

  def destroy
    @server_user = ServerUser.find_by(id: self.params[:id])
    if @server_user
      @server_user.destroy
      render :delete
    else
      render json: ["That user couldn't be found."], status: 404
    end
  end

  private
  def server_user_params
    self.params.require(:server_user).permit(:user_id, :server_id)
  end
end
