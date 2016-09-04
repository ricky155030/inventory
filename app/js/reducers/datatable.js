'use strict'

const initialState = {
  colAll: [],
  colDisplay: [],
  colSortable: [],
  colFilterable: [],
  displayName: {},
  itemsPerPage: 10,
  filterString: ''
}


export const datatable = (state = initialState, action) => {
  switch(action.type) {
    case 'SET_DATATABLE':
      return Object.assign({}, state, action.object)
    default:
      return state
  }
}
