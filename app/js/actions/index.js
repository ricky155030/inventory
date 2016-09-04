'use strict';

import fetch from 'isomorphic-fetch'
import * as type from '../constants/ActionTypes'

export const SetSearchText = function(value) {
  return {
    type: type.SET_SEARCH_TEXT,
    value
  }
}

export const SetDataTable = function(object) {
  return {
    type: type.SET_DATATABLE,
    object
  }
}
