Rails.application.routes.draw do
  root 'express#index'

  devise_scope :user do
    get "/sign_in", to: "pages#sign_in", as: :sign_up # custom path to login/sign_in
    get "/sign_up", to: "pages#sign_up", as: "new_user_registration"
  end
  devise_for :users
  get 'dashboard/index'
  get 'catalogue/index'
  get 'pages/index' 
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
