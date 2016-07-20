class PagesController < ApplicationController
  def index
    @posts = Post.order("created_at DESC").limit(3)
  end

  def aboutus
  end

  def board
  end

  def cebell
  end

  def civics
  end

  def contact
  end

  def donors
  end

  def espanol
  end

  def fundraiser
  end

  def history
  end

  def host_application
  end

  def locations
  end

  def map
  end

  def opportunities_plus
  end

  def our_impact
  end

  def staff
  end

  def volunteer
  end

  def what_we_do
  end

  def what_you_can_do
  end

  def thank_you
    @name = params[:name]
    @email = params[:email]
    @message = params[:message]
    UserMailer.contact_form(@email, @name, @message).deliver_now
  end

end
