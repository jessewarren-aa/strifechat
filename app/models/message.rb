class Message < ApplicationRecord
  validates :server_id, presence: true
  validates :channel_id, presence: true
  validates :user_id, presence: true
  validates :body, presence: true

  belongs_to :user,
  foreign_key: :user_id,
  class_name: 'User'

end
