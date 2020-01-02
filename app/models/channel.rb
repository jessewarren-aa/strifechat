class Channel < ApplicationRecord
  validates :name, presence: true
  validates_format_of :name, :with => /\A[a-zA-Z]+\z/i, :on => :initialize
  validates :server_id, presence: true
  validates :unique_id, presence: true, uniqueness: true
  validates :description, presence: true

  after_initialize :set_temp_unique_id
  after_initialize :set_description

  after_create :set_unique_id 

  belongs_to :server

  def self.generate_token
    SecureRandom.urlsafe_base64
  end

  def filtered
    return {
      id: self.id,
      name: self.name,
      description: self.description,
      server_id: self.server_id,
      unique_id: self.unique_id
    }
  end

  def set_description
    self.description ||= "Default channel description!"
  end

  def set_temp_unique_id
    self.unique_id ||= "c#{self.class.generate_token}"
  end

  def set_unique_id
    self.unique_id = "c#{self.id}#{self.class.generate_token}"
    self.save
  end

end
