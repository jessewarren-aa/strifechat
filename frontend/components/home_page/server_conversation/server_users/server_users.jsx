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

  sort_by_key (array, key) {
    return array.sort((a, b) => {
      let x = a[key]; let y = b[key];
      return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
  }

  render() {
    const ordered = this.sort_by_key(Object.values(this.props.users), "username");
    
    return (
      <div className="server-friends-master hidden">
        {Object.values(ordered).map((user, index) => {
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