Rails.application.routes.draw do
  # get 'serverusers/index'

  # get 'serverusers/show'

  # get 'serverusers/create'

  # get 'serverusers/destroy'

  # get 'servers/index'

  # get 'servers/show'

  # get 'servers/create'

  # get 'servers/update'

  # get 'servers/destroy'

  root to: 'root#root'
  namespace :api, defaults: {format: :json} do
    resources :messages, except: [:show, :new, :edit]
    get '/messages/index_dms', to: 'messages#index_direct_messages'
    resources :friends_lists, only: [:index, :create, :update, :destroy]
    resources :users, except: [:new, :edit]
    resource :session, only: [:create, :destroy]
    resources :servers, only: [:index, :show, :create, :update, :destroy]
    resources :serverusers, only: [:index, :show, :create, :destroy]
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
