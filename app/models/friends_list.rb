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

  def senderFiltered
    return {
      id: self.sender.id,
      username: self.sender.username,
      email: self.sender.email,
      image_url: self.sender.image_url,
      friend_code: self.sender.friend_code,
      unique_id: self.sender.unique_id,
      current_status: self.sender.current_status
    }
  end

  def receiverFiltered
    return {
      id: self.receiver.id,
      username: self.receiver.username,
      email: self.receiver.email,
      image_url: self.receiver.image_url,
      friend_code: self.receiver.friend_code,
      unique_id: self.receiver.unique_id,
      current_status: self.receiver.current_status
    }
  end
end
