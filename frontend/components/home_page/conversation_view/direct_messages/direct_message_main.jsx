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
    filteredMessages.sort((a, b) => (a.created_at > b.created_at) ? 1 : -1)
    return filteredMessages
  }

  componentDidMount () {
    if (!this.props.messages.length) {
      this.props.getMessages()
    }

    // if (!this.props.users.length) {
    //   this.props.getDirectMessageUsers()
    // }
  }

  render() {

    const pathArray = this.props.match.url.split("/")
    const uniqueId = pathArray[pathArray.length - 1]
    const filteredMessages = this.pullMessages(uniqueId)

    let prevMessage = {user_id: -1}
    let prevTimestamp = -1

    return (
    <div className="direct-message-main-master">
      <div>
        {filteredMessages.map((message, index) => {
 

          const year = message.created_at
            .split("T")[0].split("-")[0]
          const month = message.created_at
            .split("T")[0].split("-")[1]
          const day = message.created_at
            .split("T")[0].split("-")[2]

          const months = {
            "1":"January", "2":"February", "3":"March", "4":"April",
            "5":"May", "6":"June", "7":"July", "8":"August",
            "9":"September", "10":"October", "11":"November", "12":"December"
          }

          const timeStampHeader = months[month] + " " + day + ", " + year
          const timeStamp = months[month].slice(0,3) + " " + day

          const currentUser = Object.values(this.props.users).filter((user) => {
            if (user.id === message.user_id) {
              return user
            }
          })

          const result = (
          <div className="message-chain" key={index}>
            <div className={(timeStamp === prevTimestamp) ? "timestamp-header hidden" : "timestamp-header"} >
                {timeStampHeader}
            </div>

            <div className="full-message">
              <div
                  className={prevMessage.user_id === message.user_id ? "message-header-spacer" : "message-header-spacer hidden"}>
              </div>
              <div
                className={prevMessage.user_id === message.user_id ? "message-header hidden" : "message-header"}>
                <div className="message-avatar">
                  <img
                    className="user-avatar"
                    src={currentUser[0] ? currentUser[0].image_url : ""} />
                </div>
              </div>

              <div className="full-message-content">
                <div
                  className={prevMessage.user_id === message.user_id ? "message-header hidden" : "message-header"}>
                  <div className="message-sender">{currentUser[0] ? currentUser[0].username : ""}</div>
                  <div className="message-timestamp"><small>{timeStamp}</small></div>
                </div>
                <div className="message">


                  <div className="message-content">{message.body}</div>
                </div>
              </div>
            </div>
          </div>
          )


          prevMessage = message
          prevTimestamp = timeStamp
          return result
        })}
      </div>
    </div>
    )
  }
}

export default HomePage