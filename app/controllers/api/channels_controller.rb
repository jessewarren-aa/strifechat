class Api::ChannelsController < ApplicationController
  def index
    @channels = Channel.all
  end

  def show
    @channel = Channel.find_by(id: self.params[:id])
  end

  def create
    @channel = Channel.new(channel_params)

    if @channel.save
      render :show
    else
      render json: ["Channel creation failed!"], status: 422
    end
  end

  def update
    @channel = Channel.find_by(id: self.params[:id])

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
    self.params.require(:channel).permit(:name, :description, :server_id)
    # [DEV] do I need to permit :id? I do it in servercontroller
  end
end

