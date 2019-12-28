class Server < ApplicationRecord
  validates :name, presence: true
  validates :description, presence: true
  validates :owner_id, presence: true
  validates :unique_id, presence: true, uniqueness: true
  validates :server_icon, presence: true

  after_initialize :set_unique_id
  after_initialize :generate_default_avatar

  belongs_to :user,
  foreign_key: :owner_id,
  class_name: 'User'

  def self.generate_session_token
    SecureRandom.urlsafe_base64
  end

  def generate_default_avatar
    possible_avatars = [
      "beach.png",
      "cape.png",
      "desert-1.png",
      "fields.png",
      "fields-1.png",
      "forest.png",
      "hills.png",
      "iceberg.png",
      "island.png",
      "mountains.png",
      "mountains-1.png",
      "river.png",
      "spruce.png",
      "trees.png",
      "waterfall.png",
      "waterfall-1.png"
    ]
    self.server_icon ||= possible_avatars.sample
  end

  def set_unique_id
    self.unique_id ||= "s#{self.id}#{self.class.generate_session_token}"
  end

end
