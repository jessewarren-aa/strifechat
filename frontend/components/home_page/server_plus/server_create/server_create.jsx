import React from 'react';


class ServerCreate extends React.Component {
  constructor(props) {
    super(props)

    this.handleInput = this.handleInput.bind(this)
    this.createServer = this.createServer.bind(this)

    this.state = {
      search: "",
      owner_id: this.props.currentUser
    }
  }

  componentDidMount() {
    this.props.sendGetServers()
  }

  createServer(e) {
    // s2SQER1xralTo9OS4Frfqldw
    e.preventDefault()

    this.props.sendCreateServer(
      { 
        server: { 
          owner_id: this.state.owner_id, 
          name: this.state.search
        } 
      }
    )

    this.props.sendGetServers()
    this.props.modalHide()
   
  }

  handleInput(type) {
    return (e) => {
      e.preventDefault()
      e.stopPropagation()

      this.setState({ [type]: e.target.value });

      let search = this.state[type]
      if (search.length <= e.target.value.length) {
        search = search + e.target.value[e.target.value.length - 1]
      } else {
        search = e.target.value
      }

      this.setState({ [type]: search });
    };
  }

  render() {
    return (
      <div
        id="slideable-create-form"
        onClick={this.props.preventBubbling}
        className="server-options-modal hidden">
        <div className="sjf-center">
          <div className="scf-header">
            CREATE A SERVER
          </div>

          <div className="text-center sjf-info">
            By creating a server, you will have access to <strong>free</strong> text chat to use amongst your friends.
          </div>

          <div className="scf-title">
            <small>SERVER NAME</small>
          </div>

          <div className="scf-form-div">
            <form className="sjf-form">
              <input 
                onChange={this.handleInput("search")}
                className="sjf-input"></input>
            </form>
          </div>
        </div>
        <div className="scf-footer">
          <div
            onClick={this.props.slideOutCreateForm}>
            <img className="sjf-back-button" src="/assets/back.svg" />
          </div>
          <div 
            onClick={this.createServer}
            className="scf-create-button">
            Create
          </div>
        </div>
      </div>
    )
  }
}

export default ServerCreate