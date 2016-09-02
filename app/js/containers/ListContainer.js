'use strict';

import { connect } from 'react-redux'
import List from '../components/List'

const mapStateToProps = function(state) {
  return {
    searchText: state.threepar.searchText
  }
}

const mapDispatchToProps = function(dispatch) {
  return {
  }
}

const ListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(List)

export default ListContainer
