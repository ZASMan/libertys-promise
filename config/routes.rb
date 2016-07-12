Rails.application.routes.draw do
  resources :posts
  devise_for :users
  resources :users
  resources :job_openings
  
  get 'pages/index'

  get 'pages/about_us'

  get 'pages/board'

  get 'pages/cebell'

  get 'pages/civics'

  get 'pages/contact'

  get 'pages/donors'

  get 'pages/espanol'

  get 'pages/fundraiser'

  get 'pages/history'

  get 'pages/host_application'

  get 'pages/locations'

  get 'pages/map'

  get 'pages/opportunities_plus'

  get 'pages/results'

  get 'pages/staff'

  get 'pages/volunteer'

  get 'pages/what_we_do'

  get 'pages/what_you_can_do'

  post 'pages/thank_you'

  root 'pages#index'

end
