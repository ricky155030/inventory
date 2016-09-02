'use strict';

import { combineReducers } from 'redux'
import { alert } from './alert'
import { threepar } from './threepar'

const MyReducer = combineReducers({
  alert,
  threepar
})

export default MyReducer
