Rails.application.routes.draw do
  get 'catalogue/index'

	#root 'application'	
	root  'pages#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
