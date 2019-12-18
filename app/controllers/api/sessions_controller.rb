class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(self.params[:session][:email], self.params[:session][:password])
    if @user.nil?
      # not valid user
      render json: ["Invalid details!"], status: 401
    else
      # valid user
      login!(@user)
      render 'api/users/show'
    end
  end

  def destroy
    if current_user
      logout!
    else
      render json: ["Not logged in."], status: 404
    end
  end
end
