class AddUserIdToJobOpenings < ActiveRecord::Migration
  def change
  	add_column :job_openings, :user_id, :integer
  end
end
