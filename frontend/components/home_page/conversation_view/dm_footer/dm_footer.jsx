import React from 'react';

class DMFooter extends React.Component {
  constructor(props) {
    super(props)
    this.handleMessage = this.handleMessage.bind(this)
    
    this.state = {
      body: "",
      server_id: undefined,
      channel_id: undefined,
      user_id: this.props.currentUser
    }  

    this.handleInput = this.handleInput.bind(this)
  }

  componentDidMount() {
    this.props.sendGetUsers()
  }

  handleMessage (e) {
    e.preventDefault()

    const pathArray = this.props.match.params[0].split("/")
    const uniqueId = pathArray[pathArray.length - 1]

    const serverId = pathArray[0]

    // [DEV] should be fine to send messages without this 
    // 
    // const messageTo = Object.values(this.props.users).filter((user) => {
    //   if (user.unique_id === uniqueId) {
    //     return user
    //   }
    // })[0]

    
    this.state.server_id = serverId === "@me" ? this.props.currentUser.unique_id : serverId
    this.state.channel_id = uniqueId

    console.log(this.state)

    this.props.sendMessage({ message: this.state })
    this.state.body = ""
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  render() {
    return (
      <div className="dm-footer-master">
        <form 
          className="dm-footer-input"
          onSubmit={this.handleMessage}>
          <label className="message-box-input-label">
            <input
              type="text"
              value={this.state.body}
              onChange={this.handleInput("body")}
              className="message-box-input"></input>
          </label>

          <input 
            type="submit" 
            style={{display: "none"}} />
        </form>
      </div>
    )
  }
}

export default DMFooter