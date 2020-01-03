# StrifeChat Overview
[![W3C Validation](https://img.shields.io/w3c-validation/html?style=for-the-badge&targetUrl=https%3A%2F%2Fstrifechat.herokuapp.com%2F)](https://validator.nu/?doc=https%3A%2F%2Fstrifechat.herokuapp.com%2F) [![David](https://img.shields.io/david/jessewarren-aa/strifechat?style=for-the-badge)](https://github.com/jessewarren-aa/strifechat/network/dependencies) [![GitHub language count](https://img.shields.io/github/languages/count/jessewarren-aa/strifechat?style=for-the-badge)](https://github.com/jessewarren-aa/strifechat/search?l=Ruby) [![GitHub repo size](https://img.shields.io/github/repo-size/jessewarren-aa/strifechat?style=for-the-badge)](https://github.com/jessewarren-aa/strifechat) [![GitHub issues](https://img.shields.io/github/issues/jessewarren-aa/strifechat?style=for-the-badge)](https://github.com/jessewarren-aa/strifechat/issues)
---
## Introduction
Link: [StrifeChat](https://strifechat.herokuapp.com/)  
  
StrifeChat is an MIT licensed application and digital platform designed for programming communities, that specializes in text communication between users in a chat channel. [Synopsis Credit](https://en.wikipedia.org/wiki/Discord_(software))

## Technologies
Database Management: Postgresql  
Front-end Development: React, AJAX, HTML5, CSS4, JS ES6, jQuery  
Back-end Development: Ruby on Rails  

## Sample Features
### Direct Messages & Server Channels

A great example of reusable components is found in [StrifeChat's](https://strifechat.herokuapp.com/) conversational view. Here, it renders either direct messages between users or public messages to channels. 
  
To succeed at this solution, a unique id has to be created for servers, channels, and users.  
  
Thus, the route `/:server_id/:channel_id` can not only reference a server/channel conversation view, but can also be "tricked" into displaying private messages without compromising privacy.  
  
Next time you log into [StrifeChat](https://strifechat.herokuapp.com/), watch the URL bar!

```ruby
  class Server < ApplicationRecord
    ...
    after_initialize :set_temp_unique_id
    after_create :set_unique_id 
    ...
    def set_temp_unique_id
      self.unique_id ||= "s#{self.class.generate_token}"
    end

    def set_unique_id
      self.unique_id = "s#{self.id}#{self.class.generate_token}"
      self.save
    end
  end
```

### Abstracted JBuilder filters 

To simplify our state receiving various views, the decision was made to remove most Rails view-level filtering (via json extraction) and instead implement it at the model.  
  
This allows us to create slices of state succinctly inside of the Jbuilder view, as seen below.

```ruby
class User < ApplicationRecord
  ...
  def filtered
    return {
      id: self.id,
      username: self.username,
      email: self.email,
      image_url: self.image_url,
      friend_code: self.friend_code,
      unique_id: self.unique_id
    }
  end
  ...
end
```
  
```javascript
@users.each do |user|
  json.set! user.id, user.filtered
end
```