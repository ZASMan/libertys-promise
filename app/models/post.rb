class Post < ActiveRecord::Base
	belongs_to :user

	#Posts Must Be Filled Out
	validates :title, presence: true
	validates :body, presence: true
end
