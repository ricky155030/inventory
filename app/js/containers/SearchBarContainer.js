'use strict';

import { connect } from 'react-redux'
import { SetDataTable } from '../actions'
import SearchBar from '../components/SearchBar'

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

const SearchBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar)

export default SearchBarContainer
