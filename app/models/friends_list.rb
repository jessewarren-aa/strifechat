class FriendsList < ApplicationRecord

  friend_list_statuses = ["PENDING", "ACCEPTED", "REJECTED", "BLOCKED"]

  validates :sender_id, presence: true
  validates :receiver_id, presence: true
  validates :status, inclusion: { in: friend_list_statuses }

  belongs_to :sender,
  foreign_key: :sender_id,
  class_name: 'User'

  belongs_to :receiver,
  foreign_key: :receiver_id,
  class_name: 'User'
end
