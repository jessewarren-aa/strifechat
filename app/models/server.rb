class Server < ApplicationRecord
  validates :name, presence: true
  validates :description, presence: true
  validates :owner_id, presence: true
  validates :unique_id, presence: true, uniqueness: true
  validates :server_icon, presence: true

  after_initialize :set_temp_unique_id
  after_initialize :generate_default_avatar
  after_initialize :set_description

  after_create :set_unique_id 

  belongs_to :user,
  foreign_key: :owner_id,
  class_name: 'User'

  has_many :users,
  foreign_key: :server_id,
  class_name: 'ServerUser',
  dependent: :destroy

  # [DEV]
  # has_many :channels,
  # foreign_key: :server_id,
  # class_name: 'Channel',
  # dependent: :destroy

  def self.generate_session_token
    SecureRandom.urlsafe_base64
  end

  def filtered
    return {
      id: self.id,
      name: self.name,
      description: self.description,
      server_icon: self.server_icon,
      unique_id: self.unique_id,
      owner_id: self.owner_id
    }
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

  def set_description
    self.description ||= "Welcome to the server! The owner can update this description whenever they'd like to."
  end

  def set_temp_unique_id
    self.unique_id ||= "s#{self.class.generate_session_token}"
  end

  def set_unique_id
    self.unique_id = "s#{self.id}#{self.class.generate_session_token}"
    self.save
  end

end
