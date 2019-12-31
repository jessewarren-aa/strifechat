class ServerUser < ApplicationRecord
  validates :server_id, presence: true
  validates :user_id, presence: true

  def filtered
    return {
      id: self.id,
      server_id: self.server_id,
      user_id: self.user_id
    }
  end
end
