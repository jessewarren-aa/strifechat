class Api::ChannelsController < ApplicationController
  def index
    @channels = Channel.all
  end

  def show
    @channel = Channel.find_by(id: self.params[:id])
  end

  def create
    new_channel_data = channel_params

    if channel_params[:unique_id]
      new_channel_data[:server_id] = Server.find_by(unique_id: channel_params[:unique_id]).id
    end

    
    @channel = Channel.new(new_channel_data)

    if @channel.save
      render :show
    else
      render json: ["Channel creation failed!"], status: 422
    end
  end

  def update
    if self.params[:id] != "undefined"
      @channel = Channel.find_by(id: self.params[:id])
    else
      @channel = Channel.find_by(unique_id: channel_params[:unique_id])
    end

    if @channel.server.owner_id == current_user.id
      if @channel.update(channel_params)
        render :show
      else
        render json: ["Updating failed!"], status: 400
      end
    else
      render json: ["Uh, you don't have permissions to do that."], status: 401
    end
  end

  def destroy
    @channel = Channel.find_by(id: self.params[:id])
    if @channel
      @channel.destroy
      render :delete
    else
      render json: ["That channel wasn't found."], status: 404
    end
  end

  private
  def channel_params
    self.params.require(:channel).permit(:name, :description, :server_id, :unique_id)
  end
end

