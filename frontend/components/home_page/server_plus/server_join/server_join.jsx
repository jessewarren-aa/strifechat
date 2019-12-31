import React from 'react';


class ServerJoin extends React.Component {
  constructor(props) {
    super(props)

    this.handleInput = this.handleInput.bind(this)
    this.joinServer = this.joinServer.bind(this)

    this.state = {
      search: "",
      user_id: this.props.currentUser,
      server_id: undefined
    }
    // [DEV] remember to clear the input between forms
  }

  componentDidMount () {
    this.props.sendGetServers()
  }

  joinServer(e) {
    // s2SQER1xralTo9OS4Frfqldw
    e.preventDefault()

    const currentServer = this.props.servers[this.state.search[1]]

    if (currentServer.unique_id === this.state.search) {
      this.props.sendCreateServerUser({ server_user: { user_id: this.state.user_id, server_id: currentServer.id } })
    } else {
      this.props.sendCreateServerUser({ server_user: { user_id: this.state.user_id, server_id: null } })
    }
  }

  handleInput(type) {
    // [DEV] this doesn't seem to be firing off :(
    return (e) => {
      e.preventDefault()
      e.stopPropagation()

      this.setState({ [type]: e.target.value });
    };
  }

  render() {
    return (
      <div
        id="slideable-join-form"
        onClick={this.props.preventBubbling}
        className="server-options-modal hidden">
        <div className="sjf-center">
          <div className="sjf-header">
            JOIN A SERVER
          </div>

          <div className="text-center sjf-info">
            Enter an invite below to join an existing server.
            The invite will look something like these:
          </div>

          <div className="sjf-example-invites">
            <div className="text-center">
              https://strifechat.gg/sqTTJj7rhrpKqL5hjJkFSMg
            </div>
            <div className="text-center">
              sqTTJj7rhrpKqL5hjJkFSMg
            </div>
          </div>

          <div className="sjf-form-div">
            <form className="sjf-form">
              <input
                onChange={this.handleInput("search")}
                className="sjf-input"></input>
            </form>
          </div>
        </div>
        <div className="sjf-footer">
          <div
            onClick={this.props.slideOutJoinForm}>
            <img className="sjf-back-button" src="/assets/back.svg" />
          </div>
          <div
            onClick={this.joinServer}
            className="sjf-join-button">
            Join
          </div>
        </div>
      </div>
    )
  }
}

export default ServerJoin