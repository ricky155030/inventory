'use strict'

const initialState = {
  open: false
}

export const sidebar = (state = initialState, action) => {
  switch(action.type) {
    case 'SET_SIDEBAR':
      return Object.assign({}, state, {open: action.open})
    default:
      return state
  }
}
