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
    return (
      <div className="server-friends-master">
        {Object.values(this.props.users).map((user, index) => {
          return (
            <div 
              className="server-user-list-user"
              key={index}>
                <img className="server-user-list-avatar" src={user.image_url} />
              {user.username.length > 12 ? user.username.slice(0, 12) + "..." : user.username}
            </div>
          )
        })}
      </div>
    )
  }
}

export default ServerFriends