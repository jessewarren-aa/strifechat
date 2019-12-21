Rails.application.routes.draw do
  root to: 'root#root'
  namespace :api, defaults: {format: :json} do
    resources :messages, except: [:show, :new, :edit]
    get '/messages/index_dms', to: 'messages#index_direct_messages'
    resources :users, except: [:new, :edit]
    resource :session, only: [:create, :destroy]
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
