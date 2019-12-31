class Api::ServerusersController < ApplicationController
  def index
    @server_users = ServerUser.all
  end

  def show
    @server_user = ServerUser.find_by(id: self.params[:id])
  end

  def is_new_request?(user_id, server_id)
    found_matches = []
    found_matches += ServerUser.where("user_id = #{user_id} AND server_id = #{server_id}").to_a
    return found_matches.compact.length == 0
  end

  def create
    user_id = server_user_params['user_id']
    server_id = server_user_params['server_id']
    if is_new_request?(user_id.to_i, server_id.to_i)

      @server_user = ServerUser.new({user_id: user_id, server_id: server_id})
      if @server_user.save
        render :show
      else
        render json: ["This request couldn't be created!"], status: 400
      end
    else
      render json: ["You're already in this server!"], status: 409
    end
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
