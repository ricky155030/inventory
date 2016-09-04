'use strict';

import { combineReducers } from 'redux'
import { alert } from './alert'
import { threepar } from './threepar'
import { datatable } from './datatable'

const MyReducer = combineReducers({
  alert,
  threepar,
  datatable
})

export default MyReducer
