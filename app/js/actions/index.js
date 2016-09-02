'use strict';

import fetch from 'isomorphic-fetch'
import * as type from '../constants/ActionTypes'

export const AddCounter = function() {
  return {
    type: type.ADD_COUNTER,
  }
}

export const SetSearchText = function(value) {
  return {
    type: type.SET_SEARCH_TEXT,
    value
  }
}
