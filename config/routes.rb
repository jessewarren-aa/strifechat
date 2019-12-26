Rails.application.routes.draw do
  # get 'servers/index'

  # get 'servers/show'

  # get 'servers/create'

  # get 'servers/update'

  # get 'servers/destroy'

  root to: 'root#root'
  namespace :api, defaults: {format: :json} do
    resources :messages, except: [:show, :new, :edit]
    get '/messages/index_dms', to: 'messages#index_direct_messages'
    resources :friends_lists, only: [:index, :create, :update]
    # [DEV] create update function so users can accept/reject
    resources :users, except: [:new, :edit]
    resource :session, only: [:create, :destroy]
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
