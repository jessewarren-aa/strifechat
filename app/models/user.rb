class User < ApplicationRecord
  attr_accessor :password

  validates :username, presence: true
  validates :email, presence: true, uniqueness: true
  
  validates :password, length: {minimum: 6}, allow_nil: true
  validates :password_digest, :session_token, presence: true

  validates :image_url, presence: true
  # validates :friend_code, presence: true, uniqueness: true

  validates :unique_id, presence: true, uniqueness: true

  after_initialize :ensure_session_token
  after_initialize :generate_default_avatar
  after_initialize :set_last_server
  after_initialize :set_unique_id
  after_initialize :generate_friend_code

  has_many :messages_sent,
  foreign_key: :user_id,
  class_name: 'Message'

  has_many :servers,
  foreign_key: :owner_id,
  class_name: 'Server'

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def self.generate_session_token
    SecureRandom.urlsafe_base64
  end

  def ensure_session_token
    self.session_token ||= self.class.generate_session_token
  end

  def find_unique_direct_messages
    messages = self.direct_messages

    unique_ids = []
    
    unique_direct_messages = []
    for message in messages
      if not(unique_ids.include?(message.server_id))
        unique_ids.push(message.server_id)
      end

      if not(unique_ids.include?(message.channel_id))
        unique_ids.push(message.channel_id)
      end
      
    end

    unique_users = User.where(unique_id: unique_ids)
    return unique_users
  end

  def generate_default_avatar
    possible_avatars = [
      "https://avataaars.io/?avatarStyle=Transparent&topType=LongHairBun&accessoriesType=Prescription01&hairColor=Red&facialHairType=Blank&clotheType=ShirtVNeck&clotheColor=PastelYellow&eyeType=Happy&eyebrowType=RaisedExcitedNatural&mouthType=Eating&skinColor=Tanned",
      "https://avataaars.io/?avatarStyle=Transparent&topType=LongHairCurvy&accessoriesType=Kurt&hairColor=PastelPink&facialHairType=Blank&clotheType=ShirtScoopNeck&clotheColor=White&eyeType=Happy&eyebrowType=DefaultNatural&mouthType=Smile&skinColor=Tanned",
      "https://avataaars.io/?avatarStyle=Transparent&topType=LongHairFroBand&accessoriesType=Kurt&hairColor=BlondeGolden&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Happy&eyebrowType=RaisedExcitedNatural&mouthType=Smile&skinColor=Black",
      "https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairTheCaesarSidePart&accessoriesType=Round&hairColor=Red&facialHairType=MoustacheMagnum&facialHairColor=Red&clotheType=GraphicShirt&clotheColor=Black&graphicType=Skull&eyeType=Happy&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light",
      "https://avataaars.io/?avatarStyle=Transparent&topType=Hijab&accessoriesType=Wayfarers&hatColor=PastelOrange&clotheType=ShirtScoopNeck&clotheColor=Gray01&eyeType=Close&eyebrowType=DefaultNatural&mouthType=Smile&skinColor=Black",
      "https://avataaars.io/?avatarStyle=Transparent&topType=LongHairBun&accessoriesType=Prescription02&hairColor=BrownDark&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=ShirtVNeck&clotheColor=Blue01&eyeType=Squint&eyebrowType=RaisedExcitedNatural&mouthType=Smile&skinColor=Brown",
      "https://avataaars.io/?avatarStyle=Transparent&topType=LongHairFro&accessoriesType=Blank&hairColor=Black&facialHairType=BeardLight&facialHairColor=Black&clotheType=Overall&clotheColor=Gray01&eyeType=Side&eyebrowType=UpDownNatural&mouthType=Serious&skinColor=DarkBrown"
    ]
    self.image_url ||= possible_avatars.sample
  end

  def generate_friend_code
    random_code = Array.new(5) {rand(5)}.join("")
    self.friend_code ||= "#{self.username}##{random_code}"
    while User.find_by(friend_code: random_code)
      random_code = Array.new(5) {rand(5)}.join("")
      self.friend_code ||= "#{self.username}##{random_code}"
    end
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def direct_messages
    Message.all.where("channel_id = '#{self.unique_id}'") + self.messages_sent.select { |message| message.server_id[0] == "u" }
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def reset_session_token!
    self.session_token = self.class.generate_session_token
    self.save
    self.session_token
  end

  def set_last_server
    self.last_server_id = -1
  end

  def set_unique_id
    self.unique_id ||= "u#{self.id}#{self.class.generate_session_token}"
  end
end
