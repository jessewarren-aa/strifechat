class Api::UsersController < ApplicationController
  def index
    @users = User.all
  end

  def show
    @user = User.find_by(id: self.params[:id])
  end

  def create
    @user = User.new(user_params)
    if User.find_by(email: @user.email)
      render json: ["Email address already in use!"], status: 409
    else
      if @user.save
        # success!
        login!(@user)
        render :show
      else
        # fail!
        render json: ["Please be sure to fill out all the forms!"], status: 422
      end
    end
  end

  def update
    @user = current_user
    if @user.update(user_update_params)
      render :update
    else
      render json: ["Updating failed!"], status: 400
    end
  end

  private
  def user_params
    self.params.require(:user).permit(:username, :email, :password)
  end

  def user_update_params
    self.params.require(:user).permit(:current_status)
  end
end
