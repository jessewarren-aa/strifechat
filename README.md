# StrifeChat Overview
[![W3C Validation](https://img.shields.io/w3c-validation/html?style=for-the-badge&targetUrl=https%3A%2F%2Fstrifechat.herokuapp.com%2F)](https://validator.nu/?doc=https%3A%2F%2Fstrifechat.herokuapp.com%2F) [![David](https://img.shields.io/david/jessewarren-aa/strifechat?style=for-the-badge)](https://github.com/jessewarren-aa/strifechat/network/dependencies) [![GitHub language count](https://img.shields.io/github/languages/count/jessewarren-aa/strifechat?style=for-the-badge)](https://github.com/jessewarren-aa/strifechat/search?l=Ruby) [![GitHub repo size](https://img.shields.io/github/repo-size/jessewarren-aa/strifechat?style=for-the-badge)](https://github.com/jessewarren-aa/strifechat) [![GitHub issues](https://img.shields.io/github/issues/jessewarren-aa/strifechat?style=for-the-badge)](https://github.com/jessewarren-aa/strifechat/issues)
---
## Introduction
Link: [StrifeChat](https://strifechat.herokuapp.com/)  
Explanation of app

## Technologies
Database Management: Postgresql  
Front-end Development: React, AJAX, HTML5, CSS4, JS ES6, jQuery  
Back-end Development: Ruby on Rails  

## Sample Features
### Direct Messages & Server Channels

A great example of reusable components is found in StrifeChat's conversational view. Here, it renders either direct messages between users or public messages to channels. 
  
To succeed at this solution, a unique_id had to be created for servers, channels, and users.  
  
Thus, the route `/:server_id/:channel_id` could not only reference a server/channel conversation view, but could also be "tricked" into displaying private messages.

![Unique ID](/app/assets/images/unique_id_code.png)
```ruby
  class Server < ApplicationRecord
    ...
    after_initialize :set_temp_unique_id
    after_create :set_unique_id 
    ...
    def set_temp_unique_id
      self.unique_id ||= "s#{self.class.generate_token}"
    end
    ...
  end
```


