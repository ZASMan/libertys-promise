class UserMailer < ApplicationMailer
	default from: "from@example.com"

	def contact_form(email, name, message)
		@message = message
			mail(:from => email,
				:to => 'info@libertyspromise.org',
				:subject => "New contact form message from #{name}")
		end
	end
end