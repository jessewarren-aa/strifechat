require 'bcrypt'

class User < ApplicationRecord
  attr_accessor :password

  validates :username, presence: true
  validates :email, presence: true, uniqueness: true
  
  validates :password, length: {minimum: 6}, allow_nil: true
  # validates :password_digest, :session_token, presence: true

  validates :image_url, presence: true
  validates :friend_code, presence: true, uniqueness: true

  after_initialize :ensure_session_token
  after_initialize :generate_default_avatar
  after_initialize :set_last_server
  after_initialize :generate_friend_code

  def self.find_by_credentials(email, password)
    user = user.find_by(email: email)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

  def generate_default_avatar
    self.image_url = "https://icon-library.net/images/discord-icon-colors/discord-icon-colors-28.jpg"
  end

  def generate_friend_code
    while not(self.valid?)
      p self
      random_code = Array.new(5) {rand(5)}.join("")
      self.friend_code ||= "#{self.username}##{random_code}"
    end
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save
    self.session_token
  end

  def set_last_server
    self.last_server_id = nil
  end


end
