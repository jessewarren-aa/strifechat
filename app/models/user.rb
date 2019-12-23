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
      "https://avataaars.io/?accessoriesType=Round&avatarStyle=Transparent&clotheColor=Black&clotheType=GraphicShirt&eyeType=Happy&eyebrowType=SadConcernedNatural&facialHairColor=Blonde&facialHairType=MoustacheMagnum&hairColor=Red&hatColor=Red&mouthType=Default&skinColor=Light&topType=ShortHairTheCaesarSidePart",
      "https://avataaars.io/?accessoriesType=Kurt&avatarStyle=Transparent&clotheColor=PastelYellow&clotheType=BlazerShirt&eyeType=Side&eyebrowType=RaisedExcited&facialHairColor=Brown&facialHairType=Blank&graphicType=Skull&hairColor=BlondeGolden&hatColor=PastelOrange&mouthType=Smile&skinColor=Black&topType=LongHairFroBand",
      "https://avataaars.io/?accessoriesType=Blank&avatarStyle=Transparent&clotheColor=Blue01&clotheType=ShirtVNeck&eyeType=Squint&eyebrowType=Default&facialHairColor=BrownDark&facialHairType=MoustacheMagnum&graphicType=Selena&hairColor=Red&mouthType=Disbelief&skinColor=Pale&topType=LongHairFrida",
      "https://avataaars.io/?accessoriesType=Kurt&avatarStyle=Transparent&clotheColor=White&clotheType=ShirtScoopNeck&eyeType=EyeRoll&eyebrowType=Default&facialHairColor=Red&facialHairType=Blank&graphicType=Skull&hairColor=PastelPink&hatColor=Blue01&mouthType=Smile&skinColor=Tanned&topType=LongHairCurvy",
      "https://avataaars.io/?accessoriesType=Prescription02&avatarStyle=Transparent&clotheColor=Pink&clotheType=GraphicShirt&eyeType=EyeRoll&eyebrowType=Angry&facialHairColor=BrownDark&facialHairType=MoustacheMagnum&graphicType=Pizza&hairColor=Black&mouthType=Default&skinColor=Brown&topType=Eyepatch",
      "https://avataaars.io/?accessoriesType=Prescription01&avatarStyle=Transparent&clotheColor=Red&clotheType=BlazerSweater&eyeType=Wink&eyebrowType=UpDown&facialHairColor=Brown&facialHairType=MoustacheFancy&graphicType=Cumbia&hairColor=Auburn&mouthType=Disbelief&skinColor=Yellow&topType=ShortHairDreads02",
      "https://avataaars.io/?accessoriesType=Prescription01&avatarStyle=Transparent&clotheColor=PastelYellow&clotheType=ShirtVNeck&eyeType=Happy&eyebrowType=RaisedExcited&facialHairColor=Platinum&facialHairType=Blank&graphicType=Selena&hairColor=Red&mouthType=Eating&skinColor=Tanned&topType=LongHairBun",
      "https://avataaars.io/?accessoriesType=Sunglasses&avatarStyle=Transparent&clotheColor=Heather&clotheType=GraphicShirt&eyeType=Side&eyebrowType=Angry&facialHairColor=Brown&facialHairType=MoustacheFancy&graphicType=Resist&hairColor=Black&hatColor=PastelRed&mouthType=Twinkle&skinColor=Light&topType=LongHairCurly",
      "https://avataaars.io/?accessoriesType=Round&avatarStyle=Transparent&clotheColor=PastelOrange&clotheType=ShirtCrewNeck&eyeType=Close&eyebrowType=SadConcerned&facialHairColor=Auburn&facialHairType=BeardMagestic&graphicType=Skull&hairColor=Black&hatColor=Black&mouthType=Smile&skinColor=Tanned&topType=WinterHat2"
    ]
    self.image_url ||= possible_avatars.sample
  end

  def generate_friend_code
    # counter = 0
    random_code = Array.new(5) {rand(5)}.join("")
    self.friend_code ||= "#{self.username}##{random_code}"
    while User.find_by(friend_code: random_code)
      random_code = Array.new(5) {rand(5)}.join("")
      self.friend_code ||= "#{self.username}##{random_code}"
      # counter += 1
      # if counter > 15 # [DEV] should be removeable with user_controller logic?
      #   # [DEV] NOT CURRENTLY REMOVEABLE, STILL INFINITE LOOP [2019-12-18]
      #   break
      # end
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
