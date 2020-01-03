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

  componentDidUpdate (prevProps) {
    if (this.props.match.params[0] !== prevProps.match.params[0]) {
      this.props.clearErrors()
    }
  }

  handleMessage (e) {
    e.preventDefault()

    const pathArray = this.props.match.params[0].split("/")
    const uniqueId = pathArray[pathArray.length - 1]

    const serverId = pathArray[0]
    
    this.state.server_id = serverId === "@me" ? this.props.currentUser.unique_id : serverId
    this.state.channel_id = uniqueId

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

        {this.props.errors.length > 0 ? <div className="session-form-errors display-mid">
          <small>
            <ul>
              {this.props.errors.map((error, i) => <li key={i}>{error}</li>)}
            </ul>
          </small>
        </div> : ""}

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