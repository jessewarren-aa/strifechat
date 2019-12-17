import React from 'react';
// import { Link } from 'react-router-dom';

class UserCard extends React.Component {
  constructor (props) {
    super(props)
  }

  componentDidMount () {
    // this.props.login(this.props.currentUser)
  }

  render () {
    const display = this.props.currentUser ? (
      <div>
        <p>Hello, {this.props.currentUser.username}</p>
        <button onClick={this.props.logout}>Log Out!</button>
      </div>
    ) : (
        <div>
          Hey, no one's home!
      </div>
      );
    return display
  }

  
}

export default UserCard