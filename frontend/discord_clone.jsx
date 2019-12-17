import React from 'react'
import ReactDOM from 'react-dom'

import createStore from './store/store'
import Root from './components/root'

document.addEventListener('DOMContentLoaded', function () {
  const root = $('#root')

  let preloadedState = undefined;
  if (window.currentUser) {
    preloadedState = {
      session: {
        currentUser: window.currentUser
      }
    };
  }
  const store = createStore(preloadedState)

  ReactDOM.render(<Root store={store} />, root)
})
