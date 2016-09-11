'use strict';

import { connect } from 'react-redux'
import { SetSidebar } from '../actions'
import Sidebar from '../components/Sidebar'

const mapStateToProps = function(state) {
  return {
    open: state.sidebar.open
  }
}

const mapDispatchToProps = function(dispatch) {
  return {
    setSidebar: (open) => {
      return dispatch(SetSidebar(open))
    }
  }
}

const SidebarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar)

export default SidebarContainer
