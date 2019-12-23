import React from 'react';

class FLBody extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
    <div>
      <div className="friends-list-columns-master">
        <div className="friends-list-name-header">
          <small>NAME</small>
        </div>
        <div className="friends-list-status-header">
          <small>STATUS</small> 
        </div>
      </div>
      <div className="friends-list-body-master">
        friends list body
      </div>
    </div>
    )
  }
}

export default FLBody