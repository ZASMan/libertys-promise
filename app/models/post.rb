class Post < ActiveRecord::Base
	has_attached_file :image, styles: {large: "800x800>", medium: "600x600>", small: "350x350>", thumb: "150x150#"}
	validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/
	belongs_to :user

	#Posts Must Be Filled Out
	validates :title, presence: true
	validates :image_file_name, presence: 'true'
	validates :body, presence: true
end
