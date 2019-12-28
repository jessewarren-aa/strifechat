class ServersController < ApplicationController
  def index
    @servers = Server.all
  end

  def show
    @server = Server.all(self.params[:server_id])
  end

  def create
    @server = Server.new(server_params)

    if @server.save
      render :show
    else
      render json: ["Server creation failed!"], status: 422
    end
  end

  def update
  end

  def destroy
  end

  private
  def server_params
    self.params.require(:server).permit(:name, :description, :owner_id)
    # [DEV] default blank description?
  end
end
