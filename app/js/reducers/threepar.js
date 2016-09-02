'use strict'

const initialState = {
  searchText: ''
}

export const threepar = (state = initialState, action) => {
  switch(action.type) {
    case 'SET_SEARCH_TEXT':
      return Object.assign({}, state, {searchText: action.value})
    default:
      return state
  }
}
