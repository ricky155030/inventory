'use strict';

import { connect } from 'react-redux'
import { SetSearchText } from '../actions'
import SearchBar from '../components/SearchBar'

const mapStateToProps = function(state) {
  return {
    searchText: state.threepar.searchText
  }
}

const mapDispatchToProps = function(dispatch) {
  return {
    setSearchText: (value) => {
      return dispatch(SetSearchText(value))
    }
  }
}

const SearchBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar)

export default SearchBarContainer
