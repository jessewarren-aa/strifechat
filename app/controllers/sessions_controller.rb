class SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      self.params[:user][:username], 
      self.params[:user][:password]
    )
    if @user.nil?
      # not valid user
    else
      # valid user
      login!(@user)
    end
  end

  def destroy
    logout!
  end
end
