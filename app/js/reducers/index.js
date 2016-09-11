'use strict';

import { combineReducers } from 'redux'
import { alert } from './alert'
import { threepar } from './threepar'
import { sidebar } from './sidebar'
import { datatable } from './datatable'

const MyReducer = combineReducers({
  alert,
  threepar,
  datatable,
  sidebar
})

export default MyReducer
