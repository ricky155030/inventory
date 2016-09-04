'use strict';

import { connect } from 'react-redux'
import { SetDataTable } from '../actions'
import ColumnFilter from '../components/ColumnFilter'

const mapStateToProps = function(state) {
  return {
  }
}

const mapDispatchToProps = function(dispatch) {
  return {
    setDataTable: (object) => {
      return dispatch(SetDataTable(object))
    }
  }
}

const ColumnFilterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ColumnFilter)

export default ColumnFilterContainer
