import React from 'react';

class ConversationHeader extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
    <div className="conversation-bar-header-master">
      <form className="conversation-search-form">
        <label>
          <input
            className="conversation-search-input"
            type="text"
            placeholder="Find or start a conversation">
          </input>
        </label>
      </form>
    </div>
    )
  }
}

export default ConversationHeader
