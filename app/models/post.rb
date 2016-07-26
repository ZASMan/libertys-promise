class Post < ActiveRecord::Base
	#To Add Custom URL's
	extend FriendlyId
	friendly_id :title, use: :slugged
	#Only change Friendly ID Url If it is a new record (and not an update)
	def should_generate_new_friendly_id?
		new_record?
	end

	#For Paperclip Gem
	has_attached_file :image, styles: {large: "800x800>", medium: "600x600>", small: "350x350>", thumb: "150x150#"}
	validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/
	belongs_to :user

	#Posts Must Be Filled Out, Including Image
	validates :title, presence: true
	validates :image_file_name, presence: 'true'
	validates :body, presence: true
end
