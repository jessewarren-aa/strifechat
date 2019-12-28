class ServerUser < ApplicationRecord
  validates :server_id, presence: true
  validates :user_id, presence: true
end
