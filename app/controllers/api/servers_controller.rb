class Api::ServersController < ApplicationController
  def index
    @servers = Server.all
  end

  def show
    @server = Server.find(self.params[:id])
  end

  def create
    @server = Server.new(server_params)

    if @server.save
      @server_user = ServerUser.create(user_id: current_user.id, server_id: @server.id)
      render :show
    else
      render json: ["Server creation failed!"], status: 422
    end
  end

  def update
    @server = Server.find_by(id: self.params[:id])

    if @server.owner_id == current_user.id
      if @server.update(server_params)
        render :show
      else
        render json: ["Updating failed!"], status: 400
      end
    else
      render json: ["Uh, you don't have permissions to do that."], status: 401
    end
  end

  def destroy
    @server = Server.find_by(id: self.params[:id])
    if @server
      @server.destroy
      render json: ["Success! Server deleted."], status: 200 # [DEV] render :show/index? - check friendlists
    else
      render json: ["That server wasn't found."], status: 404
    end
  end

  private
  def server_params
    self.params.require(:server).permit(:id, :name, :description, :owner_id)
    # [DEV] default blank description?
  end
end
