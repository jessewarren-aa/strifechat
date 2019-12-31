class Api::ServerusersController < ApplicationController
  def index
    @server_users = ServerUser.all
  end

  def show
  end

  def create
  end

  def destroy
  end
end
