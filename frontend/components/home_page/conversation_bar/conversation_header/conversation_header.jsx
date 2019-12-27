import React from 'react';

class ConversationHeader extends React.Component {
  constructor(props) {
    super(props)
    this.toggleSearchBarModal = this.toggleSearchBarModal.bind(this)
    this.preventBubbling = this.preventBubbling.bind(this)
    this.handleInput = this.handleInput.bind(this)
    this.expandSearch = this.expandSearch.bind(this)

    this.state = {
      search: ""
    }
  }

  expandSearch(type, search) {
    const jObject = $('.search-bar-results')
    jObject.empty()
    const regexSearch = new RegExp(search, "i")

    const searchResults = []

    Object.values(this.props.users).forEach((user) => {
      if (regexSearch.test(user.username)) {
        searchResults.push(user)
      }
    })

    const searchBarModal = $('.search-bar-modal')
    const baseHeight = 100
    searchBarModal.css('height', "100px")
    
    if (search !== "" && searchResults.length > 0) {
      $('.arrow-hider').addClass('hidden')
      const addedHeight = 35 * searchResults.length
      searchBarModal.css('height', `${baseHeight + addedHeight}px`)
      searchResults.forEach(user => {
        const username = user.username
        const addCode = user.friend_code
        const avatar = user.image_url

        const result = `
          <div class="search-result-row">
            <div class="flex">
              <div>
                <img class="search-result-avatar" src=${avatar} />
              </div>
              <div>${username}</div>
            </div>
            <div>${addCode}</div>
          </div>
        `

        jObject.append(result)
      })
    } else {
      $('.arrow-hider').addClass('hidden')
      setTimeout(function () {
        $('.arrow-hider').removeClass('hidden')
      }, 10)
      
    }
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


      this.expandSearch(type, search)
    };
  }

  toggleSearchBarModal(e) {
    e.preventDefault()
    const jObjectBackground = $('.search-bar-modal-background')
    jObjectBackground.toggleClass('hidden')

    this.setState({ search: "" });

    $('.search-bar-modal-input').focus()

    console.log(this.props)
  }

  preventBubbling(e) {
    e.preventDefault()
    e.stopPropagation()
  }

  render() {
    return (
    <div>
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

            <div className="search-bar-results">

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
      <div className="conversation-bar-header-master">
        <form className="conversation-search-form">
          <label>
            <input
              onFocus={this.toggleSearchBarModal}
              className="conversation-search-input"
              type="text"
              placeholder="Find or start a conversation">
            </input>
          </label>
        </form>
      </div>
    </div>
    )
  }
}

export default ConversationHeader
