# StrifeChat Overview
[![Website](https://img.shields.io/website?down_color=red&down_message=dyno%20down&style=for-the-badge&up_message=dyno%20up&url=https%3A%2F%2Fstrifechat.herokuapp.com)](https://strifechat.herokuapp.com/) [![W3C Validation](https://img.shields.io/w3c-validation/html?style=for-the-badge&targetUrl=https%3A%2F%2Fstrifechat.herokuapp.com%2F)](https://validator.nu/?doc=https%3A%2F%2Fstrifechat.herokuapp.com%2F) [![David](https://img.shields.io/david/jessewarren-aa/strifechat?style=for-the-badge)](https://github.com/jessewarren-aa/strifechat/network/dependencies) [![GitHub language count](https://img.shields.io/github/languages/count/jessewarren-aa/strifechat?style=for-the-badge)](https://github.com/jessewarren-aa/strifechat/search?l=Ruby) [![GitHub repo size](https://img.shields.io/github/repo-size/jessewarren-aa/strifechat?style=for-the-badge)](https://github.com/jessewarren-aa/strifechat) [![GitHub issues](https://img.shields.io/github/issues/jessewarren-aa/strifechat?style=for-the-badge)](https://github.com/jessewarren-aa/strifechat/issues)
---
## Introduction
Link: [StrifeChat](https://strifechat.herokuapp.com/)
Explanation of app

## Technologies
Database Management: Postgresql
Front-end Development: React, AJAX, HTML5, CSS4, JS ES6, jQuery
Back-end Development: Ruby on Rails

## Sample Major Features
### Direct Messages & Server Channels

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
    def set_unique_id
      self.unique_id = "s#{self.id}#{self.class.generate_token}"
      self.save
    end
  end
```


