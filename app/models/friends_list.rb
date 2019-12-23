class FriendsList < ApplicationRecord

  friend_list_statuses = ["PENDING", "ACCEPTED", "REJECTED", "BLOCKED"]

  validates :sender_id, presence: true
  validates :receiver_id, presence: true
  validates :status, inclusion: { in: friend_list_statuses }
end
