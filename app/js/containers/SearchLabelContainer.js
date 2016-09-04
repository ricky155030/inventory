'use strict';

import { connect } from 'react-redux'
import { SetDataTable } from '../actions'
import SearchLabel from '../components/SearchLabel'

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

const SearchLabelContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchLabel)

export default SearchLabelContainer
