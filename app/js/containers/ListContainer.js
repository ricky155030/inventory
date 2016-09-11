'use strict';

import { connect } from 'react-redux'
import { SetDataTable, SetSidebar } from '../actions'
import List from '../components/List'

const mapStateToProps = function(state) {
  return {
    colAll: state.datatable.colAll,
    colDisplay: state.datatable.colDisplay,
    colSortable: state.datatable.colSortable,
    colFilterable: state.datatable.colFilterable,
    displayName: state.datatable.displayName,
    itemsPerPage: state.datatable.itemsPerPage,
    filterString: state.datatable.filterString,
    sidebarOpen: state.sidebar.open
  }
}

const mapDispatchToProps = function(dispatch) {
  return {
    setDataTable: (object) => {
      return dispatch(SetDataTable(object))
    },
    setSidebar: (open) => {
      return dispatch(SetSidebar(open))
    }
  }
}

const ListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(List)

export default ListContainer
