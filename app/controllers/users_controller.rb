class UsersController < ApplicationController
  def index
    @users = User.all
  end

  def show
    @user = User.find_by(id: self.params[:id])
  end

  def create
    @user = User.new(user_params)
    if @user.save
      # success!
    else
      # fail!
    end
  end

  def update
    @user = User.find_by()
  end

  def destroy

  end

  def user_params
    self.params.require(:user).permit(:username, :email, :password)
  end
end
