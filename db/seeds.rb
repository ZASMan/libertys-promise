#Seeds for Job Openings
#job1= Job_opening.create :company => "Pizza Hutt", :location =>"Gaithersburg", :position => " ", :comment => ""
#Seeds for Posts
post1 = Post.new :title => "Liberty's Promise new website goes live!", :body => "We are excited to announce the release of our new website!"
post2 = Post.new :title => "2016 Fundraiser: Success", :body => "Thanks so much to everyone who came out to our annual fundraiser!"
#Seeds for Users
user_admin = User.create :first_name => "LP", :last_name => "Admin", :email => "info@libertyspromise.org", :password => "libertyuser1!1", :admin => true