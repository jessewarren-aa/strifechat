import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props)

    this.handleInput = this.handleInput.bind(this)
    this.toggleSearchBarModal = this.toggleSearchBarModal.bind(this)
    this.filterSearch = this.filterSearch.bind(this)
    this.preventBubbling = this.preventBubbling.bind(this)

    this.state = {
      search: "",
      renderSearch: false
    }
  }

  toConversation(uniqueId) {
    const jObjectBackground = $('.search-bar-modal-background')
    jObjectBackground.toggleClass('hidden')

    this.setState({ search: "" });
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
        $('.arrow-hider').addClass('hidden')
      } else {
        this.state.renderSearch = false
        $('.arrow-hider').removeClass('hidden')
      }

      this.setState({ [type]: search });
    };
  }

  preventBubbling(e) {
    e.preventDefault()
    e.stopPropagation()
  }

  filterSearch(search) {
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
                {username}
              </div>
            </div>
            <div>{addCode}</div>
          </div>
        )
      }
    })

    return searchResults
  }

  stopBubbling(e) {
    e.stopPropagation()
  }

  toggleSearchBarModal(e) {
    e.preventDefault()
    const jObjectBackground = $('.search-bar-modal-background')
    jObjectBackground.toggleClass('hidden')

    this.setState({ search: "" });

    $('.search-bar-modal-input').focus()
  }

  render() {
    return (

      <div
        onClick={this.toggleSearchBarModal}
        className="search-bar-modal-background hidden">
        <div className="arrows mr-4">
          <img
            className="arrow-three arrow-left-three arrow-hider"
            src={window.arrowThree} />
          <img
            className="arrow-two arrow-left-two arrow-hider"
            src={window.arrowTwo} />
          <img
            className="arrow-one arrow-left-one arrow-hider"
            src={window.arrowOne}
          />
        </div>
        <div>
          <div className="search-bar-modal-header">
            <h4>Search for <span className="disabled">servers</span>, <span className="disabled">channels</span>, or direct messages.</h4>
          </div>
          <div
            onClick={this.preventBubbling}
            className="search-bar-modal">

            <form className="search-bar-form">
              <input
                type="text"
                onChange={this.handleInput("search")}
                value={this.state.search}
                className="search-bar-modal-input">

              </input>
            </form>

            <div className="snmp-friend-list-wide">
              {this.state.renderSearch ? this.filterSearch(this.state.search) : ""}
            </div>
          </div>
        </div>
        <div className="arrows ml-4">
          <img
            className="arrow-flipper arrow-one arrow-right-one arrow-hider"
            src={window.arrowOne} />
          <img
            className="arrow-flipper arrow-two arrow-right-two arrow-hider"
            src={window.arrowTwo} />
          <img
            className="arrow-flipper arrow-three arrow-right-three arrow-hider"
            src={window.arrowThree}
          />
        </div>
      </div>
    )
  }
}

export default SearchBar