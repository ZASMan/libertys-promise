class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  private
  	def authorize_admin
  		redirect_to new_user_session_path unless user_signed_in? && current_user.admin?
  	end
end
