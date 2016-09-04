'use strict';

import { connect } from 'react-redux'
import { SetDataTable } from '../actions'
import DataTable from '../components/DataTable'

const mapStateToProps = function(state) {
  return {
    colAll: state.datatable.colAll,
    colDisplay: state.datatable.colDisplay,
    colSortable: state.datatable.colSortable,
    colFilterable: state.datatable.colFilterable,
    displayName: state.datatable.displayName,
    itemsPerPage: state.datatable.itemsPerPage,
    filterString: state.datatable.filterString
  }
}

const mapDispatchToProps = function(dispatch) {
  return {
    setDataTable: (object) => {
      return dispatch(SetDataTable(object))
    }
  }
}

const DataTableContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DataTable)

export default DataTableContainer
