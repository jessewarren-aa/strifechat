class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(self.params[:session][:email], self.params[:session][:password])
    if @user.nil?
      # not valid user
      render json: {status: "fail", message: "Invalid details!"}
    else
      # valid user
      login!(@user)
      render 'api/users/show'
    end
  end

  def destroy
    logout!
  end
end
