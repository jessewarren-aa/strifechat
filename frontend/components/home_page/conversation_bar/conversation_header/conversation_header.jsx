import React from 'react';
import SearchBarContainer from './search_bar/search_bar_container'

class ConversationHeader extends React.Component {
  constructor(props) {
    super(props)
    this.toggleSearchBarModal = this.toggleSearchBarModal.bind(this)
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
    <div>
      <SearchBarContainer {...this.props} />
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
