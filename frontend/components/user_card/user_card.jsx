import React from 'react';
// import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
  const display = currentUser ? (
    <div>
      <p>Hello, {currentUser.username}</p>
      <button onClick={logout}>Log Out!</button>
    </div>
  ) : (
      <div>
        Hey, no one's home!
      </div>
    );
  return display
}