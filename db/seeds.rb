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

User.create(username: "Talkative Terry", email: "mistertalkalot@strifechat.herokuapp.com", password: "k-Q:]jvA3xtU^3C~", image_url:"https://avataaars.io/?accessoriesType=Blank&avatarStyle=Transparent&clotheColor=PastelOrange&clotheType=GraphicShirt&eyeType=Surprised&eyebrowType=RaisedExcitedNatural&facialHairColor=Platinum&facialHairType=Blank&graphicType=Skull&hairColor=Auburn&hatColor=White&mouthType=Tongue&skinColor=Tanned&topType=ShortHairDreads01")

User.create(username: "Devious Daniella", email: "notplanningmutiny@strifechat.herokuapp.com", password: "w**6,BKLE`@Q2L6'", image_url:"https://avataaars.io/?accessoriesType=Prescription02&avatarStyle=Transparent&clotheColor=PastelYellow&clotheType=BlazerShirt&eyeType=Squint&eyebrowType=AngryNatural&facialHairColor=Blonde&facialHairType=Blank&graphicType=Cumbia&hairColor=BrownDark&hatColor=PastelOrange&mouthType=Smile&skinColor=Brown&topType=LongHairStraight")

welcome_bot = User.find_by(email: "welcome_bot@strifechat.herokupapp.com")
steve = User.find_by(email: "screamnonstop@strifechat.herokuapp.com")
daniella = User.find_by(email: "notplanningmutiny@strifechat.herokuapp.com")
target = User.find_by(email: "guest@strifechat.herokupapp.com")
terry = User.find_by(email: "mistertalkalot@strifechat.herokuapp.com")

Message.create(user_id: terry.id, server_id: terry.unique_id, channel_id: target.unique_id, body: "Hey buddy, it's Terry. I was thinking about starting up an after-hours soccer game between our department and data... ")
Message.create(user_id: terry.id, server_id: terry.unique_id, channel_id: target.unique_id, body: "Would you be interested in rounding up some players?")
Message.create(user_id: terry.id, server_id: terry.unique_id, channel_id: target.unique_id, body: "It would be great to get out on the field again, it's been years!")
Message.create(user_id: terry.id, server_id: terry.unique_id, channel_id: target.unique_id, body: "Also, I think the new boss arrives tomorrow.")
Message.create(user_id: terry.id, server_id: terry.unique_id, channel_id: target.unique_id, body: "Her name's Rosie, she has five dogs, and she once fought a shark.")
Message.create(user_id: terry.id, server_id: terry.unique_id, channel_id: target.unique_id, body: "Like, in the water fought a shark.")
Message.create(user_id: terry.id, server_id: terry.unique_id, channel_id: target.unique_id, body: "I'm Terryfied and excited all at once.")
Message.create(user_id: terry.id, server_id: terry.unique_id, channel_id: target.unique_id, body: "Super ready for a change of management, so I'm interested in seeing how she'll lead the team.")
Message.create(user_id: terry.id, server_id: terry.unique_id, channel_id: target.unique_id, body: "Actually, maybe it's better to plan the AH soccer game once she arrives and settles in...")
Message.create(user_id: terry.id, server_id: terry.unique_id, channel_id: target.unique_id, body: "What do you think?")
Message.create(user_id: terry.id, server_id: terry.unique_id, channel_id: target.unique_id, body: "Maybe that's just me being silly, but on the flip side maybe she would want to be involved!")
Message.create(user_id: terry.id, server_id: terry.unique_id, channel_id: target.unique_id, body: "What if she's a soccer legend!?")
Message.create(user_id: terry.id, server_id: terry.unique_id, channel_id: target.unique_id, body: "Either way, I need to do a bit of work to get scheduled time on the Midway field.")
Message.create(user_id: terry.id, server_id: terry.unique_id, channel_id: target.unique_id, body: "It's a bit of a hassle, nothing too bad, but paperwork... you know how I feel about paperwork.")
Message.create(user_id: terry.id, server_id: terry.unique_id, channel_id: target.unique_id, body: "But, what with the weather being how it has been recently...")
Message.create(user_id: terry.id, server_id: terry.unique_id, channel_id: target.unique_id, body: "It may be better to wait until spring.")
Message.create(user_id: terry.id, server_id: terry.unique_id, channel_id: target.unique_id, body: "Speaking of, Frank and I set our date!")
Message.create(user_id: terry.id, server_id: terry.unique_id, channel_id: target.unique_id, body: "We'd love for you to attend, I'll mail you the invitation.")
Message.create(user_id: terry.id, server_id: terry.unique_id, channel_id: target.unique_id, body: "Do you still have the same mailing address?")
Message.create(user_id: terry.id, server_id: terry.unique_id, channel_id: target.unique_id, body: "I seem to remember you moving recently...")
Message.create(user_id: terry.id, server_id: terry.unique_id, channel_id: target.unique_id, body: "No wait, I updated it in my phonebook!")
Message.create(user_id: terry.id, server_id: terry.unique_id, channel_id: target.unique_id, body: "Perfect, I'll send that out after work today.")
Message.create(user_id: terry.id, server_id: terry.unique_id, channel_id: target.unique_id, body: "I'll email you the theme plans.")
Message.create(user_id: terry.id, server_id: terry.unique_id, channel_id: target.unique_id, body: "We're keeping invitations small but venue large, so consider your plus one actually a flexible plus three.")
Message.create(user_id: terry.id, server_id: terry.unique_id, channel_id: target.unique_id, body: "Frank hired peacocks...")
Message.create(user_id: terry.id, server_id: terry.unique_id, channel_id: target.unique_id, body: "Did you know you can HIRE peacocks?")
Message.create(user_id: terry.id, server_id: terry.unique_id, channel_id: target.unique_id, body: "The world is amazing.")

Message.create(user_id: welcome_bot.id, server_id: welcome_bot.unique_id, channel_id: target.unique_id, body: "Welcome to StrifeChat!")
Message.create(user_id: welcome_bot.id, server_id: welcome_bot.unique_id, channel_id: target.unique_id, body: "Feel free to explore the site, chat with your friends, and hire the developer.")

Message.create(user_id: steve.id, server_id: steve.unique_id, channel_id: target.unique_id, body: "NICE JOB WITH THE PROMOTION!!! IT'S WELL DESERVED, YOU DO A LOT FOR THE COMPANY!!")
Message.create(user_id: target.id, server_id: target.unique_id, channel_id: steve.unique_id, body: "Hey, thanks Steve, I really appreciate that!")
Message.create(user_id: steve.id, server_id: steve.unique_id, channel_id: target.unique_id, body: "OF COURSE!! HEY ARE YOU GOING TO THE COMPANY POTLUCK?? I'M GONNA MAKE MY GRAMMA'S MACARONI RECIPE!!")

Message.create(user_id: daniella.id, server_id: daniella.unique_id, channel_id: target.unique_id, body: "Are you coming to the company potluck? More importantly, will you support me when I overthrow the tech department?")

Message.create(user_id: target.id, server_id: target.unique_id, channel_id: daniella.unique_id, body: "Yes... to one of them.")

Message.create(user_id: daniella.id, server_id: daniella.unique_id, channel_id: target.unique_id, body: "I'll see you there... at one of them.")
Message.create(user_id: target.id, server_id: target.unique_id, channel_id: daniella.unique_id, body: "Uh oh...")
