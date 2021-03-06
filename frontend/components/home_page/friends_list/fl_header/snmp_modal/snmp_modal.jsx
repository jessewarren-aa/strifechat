import React from 'react';

class SNMPModal extends React.Component {
  constructor(props) {
    super(props)

    this.handleInput = this.handleInput.bind(this)

    this.state = {
      search: "",
      renderSearch: false
    }
  }

  toConversation (uniqueId) {
    this.props.history.push(`/channels/@me/${uniqueId}`);
  }

  handleInput(type) {
    return (e) => {

      this.setState({ [type]: e.target.value });

      let search = this.state[type]
      if (search.length <= e.target.value.length) {
        search = search + e.target.value[e.target.value.length - 1]
      } else {
        search = e.target.value
      }

      if (search.length > 0) {
        this.state.renderSearch = true
      } else {
        this.state.renderSearch = false
      }

      this.setState({ [type]: search });
    };
  }

  filterSearch (search) {
    const regexSearch = new RegExp(search, "i")
    const searchResults = []

    Object.values(this.props.users).forEach((user, index) => {
      if (regexSearch.test(user.friend_code) && user.id !== this.props.currentUser) {
        
        const username = user.username
        const addCode = user.friend_code
        const avatar = user.image_url
        const uniqueId = user.unique_id

        searchResults.push(
          <div 
            onClick={() => this.toConversation(uniqueId)}
            key={index} className="search-result-row">
            <div className="flex">
              <div>
                <img className="search-result-avatar" src={avatar} />
              </div>
              <div>
                {username.length > 8 ? username.slice(0, 8) + "..." : username}
              </div>
            </div>
            <div>{addCode}</div>
          </div>
        )
      }
    })

    return searchResults
  }

  stopBubbling (e) {
    e.stopPropagation()
  }

  render() {
    return (
      <div 
        onClick={this.stopBubbling}
        className="hidden start-new-message-popup-background">
        <div
          className="start-new-message-popup">
          <div className="snmp-text-box">
            <div className="snmp-text-box-title">SELECT FRIEND</div>
            <div className="snmp-text-box-text">
              {/* <small>
                You can add 1 more friend (group chat isn't a thing yet).
              </small> */}
              {/* [DEV] GROUP chat stuff */}
            </div>
          </div>

          <div className="snmp-input-div">
            <form className="snmp-form-div">
              <input
                className="snmp-input"
                onChange={this.handleInput("search")}
                placeholder="Type the username of a friend"></input>
            </form>
          </div>

          <div className="snmp-friend-list">
            {this.state.renderSearch ? this.filterSearch(this.state.search) : ""}
          </div>

          {/* <div className="snmp-button-div">
            <div className='disabled'>
              Create Group DM
            </div>
          </div> */}
          {/* [DEV] GROUP CHAT EVENTUALLY - remove 40px from snmp-friend-list */}

        </div>
      </div>
    )
  }
}

export default SNMPModal