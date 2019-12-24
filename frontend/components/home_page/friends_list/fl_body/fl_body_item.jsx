import React from 'react';

class FLBodyItem extends React.Component {
  constructor(props) {
    super(props)
    this.friendsClicked = this.friendsClicked.bind(this)
  }

  friendsClicked(e) {
    e.preventDefault()
    this.props.history.push(`/channels/@me/${this.props.unique_id}`);
  }

  render () {
    return (
      <div>
        <div 
          onClick={this.friendsClicked}
          className="small-bottom-border friend-on-list">
          <div className="friends-list-name-header">
            <div className="fl-image pr-2">
              <img className="fl-user-avatar" src={this.props.image_url}></img>
            </div>
            <div className="fl-username">
              {this.props.username.length > 12 ? this.props.username.slice(0, 12) + " ..." : this.props.username}
            </div>
          </div>
          <div className="friends-list-status-header">
            <small className="disabled">STATUS</small>
          </div>
        </div>
      </div>
    )
  }
}

export default FLBodyItem