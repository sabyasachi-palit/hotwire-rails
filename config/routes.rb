Rails.application.routes.draw do
  get 'search/index'
  get 'hello/index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root 'hello#index'
  get 'search', to: 'search#index'
end
