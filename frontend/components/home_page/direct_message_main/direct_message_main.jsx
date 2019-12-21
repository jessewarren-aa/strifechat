import React from 'react';

class HomePage extends React.Component {
  constructor(props) {
    super(props)
    this.pullMessages = this.pullMessages.bind(this)
  }

  pullMessages (uniqueId) {
    const filteredMessages = []
    Object.values(this.props.messages).forEach((message) => {
      if (message.server_id === uniqueId || message.channel_id === uniqueId) {
        filteredMessages.push(message)
      }
    })
    return filteredMessages
  }

  componentDidMount () {
    if (!this.props.messages.length) {
      this.props.getMessages()
    }

    if (!this.props.users.length) {
      this.props.getDirectMessageUsers()
    }
  }

  render() {

    const pathArray = this.props.match.url.split("/")
    const uniqueId = pathArray[pathArray.length - 1]
    const filteredMessages = this.pullMessages(uniqueId)
    return (
    <div className="direct-message-main-master">
      <div>
        {filteredMessages.map((message, index) => {
          return (
          <div className="message" key={index}>
            <div className="message-timestamp">{message.created_at.split("T")[0]}</div>
            <div className="message-content">{message.body}</div>
          </div>
          )
        })}
      </div>
    </div>
    )
  }
}

export default HomePage