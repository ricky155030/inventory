'use strict';

import { connect } from 'react-redux'
import App from '../components/App'

const mapStateToProps = function(state) {
  return {
    sidebarOpen: state.sidebar.open
  }
}

const mapDispatchToProps = function(dispatch) {
  return {
  }
}

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default AppContainer
