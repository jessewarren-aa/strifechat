# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(username: "guest_account", email:"guest@strifechat.herokupapp.com", password:"password")

User.create(username: "welcome_bot", email:"welcome_bot@strifechat.herokupapp.com", password:"9=mrfpGM5RT!*Mc%%!m*FBw@Xuj48tf&Nqdh8kKg2zLFYqS@R?")

User.create(username: "Always Screaming Steve", email: "screamnonstop@strifechat.herokuapp.com", password:"*8RYXY$_-;quGESk", image_url: "https://avataaars.io/?accessoriesType=Prescription01&avatarStyle=Transparent&clotheColor=PastelBlue&clotheType=GraphicShirt&eyeType=Happy&eyebrowType=DefaultNatural&facialHairColor=Auburn&facialHairType=Blank&graphicType=Cumbia&hairColor=Auburn&mouthType=ScreamOpen&skinColor=Black&topType=WinterHat2")

User.create(username: "Devious Daniella", email: "notplanningmutiny@strifechat.herokuapp.com", password: "w**6,BKLE`@Q2L6'", image_url:"https://avataaars.io/?accessoriesType=Prescription02&avatarStyle=Transparent&clotheColor=PastelYellow&clotheType=BlazerShirt&eyeType=Squint&eyebrowType=AngryNatural&facialHairColor=Blonde&facialHairType=Blank&graphicType=Cumbia&hairColor=BrownDark&hatColor=PastelOrange&mouthType=Smile&skinColor=Brown&topType=LongHairStraight")


# 'https://avataaars.io/?avatarStyle=Transparent&topType=LongHairStraight&accessoriesType=Prescription02&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Squint&eyebrowType=AngryNatural&mouthType=Smile&skinColor=Brown'

welcome_bot = User.find_by(email: "welcome_bot@strifechat.herokupapp.com")
steve = User.find_by(email: "screamnonstop@strifechat.herokuapp.com")
daniella = User.find_by(email: "notplanningmutiny@strifechat.herokuapp.com")
target = User.find_by(email: "guest@strifechat.herokupapp.com")

Message.create(user_id: welcome_bot.id, server_id: welcome_bot.unique_id, channel_id: target.unique_id, body: "Welcome to StrifeChat.")

Message.create(user_id: steve.id, server_id: steve.unique_id, channel_id: target.unique_id, body: "NICE JOB WITH THE PROMOTION!!! IT'S WELL DESERVED, YOU DO A LOT FOR THE COMPANY!!")

Message.create(user_id: daniella.id, server_id: daniella.unique_id, channel_id: target.unique_id, body: "Are you coming to the company potluck? More importantly, will you support me when I overthrow the tech department?")