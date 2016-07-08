class CreateJobOpenings < ActiveRecord::Migration
  def change
    create_table :job_openings do |t|
      t.string :company
      t.string :location
      t.string :position
      t.text :comment

      t.timestamps null: false
    end
  end
end
