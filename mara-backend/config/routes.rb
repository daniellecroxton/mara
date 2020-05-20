Rails.application.routes.draw do
  resources :categories
  namespace :api do
    namespace :v1 do
      resources :thoughts, only: [:index, :create]
    end
  end
end
