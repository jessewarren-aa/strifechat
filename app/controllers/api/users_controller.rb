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
      render json: {status: "fail", message: "Email address already in use!"}, status: 409
    else
      if @user.save
        # success!
        p "[DEBUG] SUCCESS"
        render :show
      else
        # fail!
        render json: {status: "fail", message: "Please be sure to fill out all the forms!"}
      end
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
