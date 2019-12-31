import React from 'react';
// import { Route } from 'react-router-dom';

class ServerFriends extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount () {
    this.props.sendGetServerUsers()
    this.props.getUsers()
  }

  render() {
    console.log(this.props)
    return (
      <div className="server-friends-master">
        {Object.values(this.props.users).map((user, index) => {
          return (
            <div key={index}>{user.username}</div>
          )
        })}
      </div>
    )
  }
}

export default ServerFriends