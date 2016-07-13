class JobOpening < ActiveRecord::Base
	belongs_to :user

	#Must validate all field except for comments
	validates :company, presence: true
	validates :location, presence: true
	validates :position, presence: true



end
