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

  toggleSearchBarModal(e) {
    e.preventDefault()
    const jObjectBackground = $('.search-bar-modal-background')
    jObjectBackground.toggleClass('hidden')

    this.setState({ search: "" });

    $('.search-bar-modal-input').focus()
  }

  preventBubbling(e) {
    e.preventDefault()
    e.stopPropagation()
  }

  render() {
    return (
    <div>
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
