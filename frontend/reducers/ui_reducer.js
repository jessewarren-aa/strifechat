import { combineReducers } from 'redux';

import { FILTER_FRIENDS } from '../actions/friends_actions'

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case FILTER_FRIENDS:
      return Object.assign({}, state, {friendsListFilter: action.status});
    default:
      return state;
  }
};