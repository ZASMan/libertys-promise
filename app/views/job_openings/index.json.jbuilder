json.array!(@job_openings) do |job_opening|
  json.extract! job_opening, :id, :company, :location, :position, :comment
  json.url job_opening_url(job_opening, format: :json)
end
