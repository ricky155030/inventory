'use strict'

const initialState = {
  open: false,
  callback: function(){}
}

export const alert = (state = initialState, action) => {
  switch(action.type) {
    case 'ALERT_OPEN':
      return Object.assign({}, state, {open: action.value, callback: action.callback, msg: action.msg})
    default:
      return state
  }
}
