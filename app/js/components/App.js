'use strict';

import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Card, CardText } from 'material-ui/Card';
import withWidth, {SMALL, LARGE} from 'material-ui/utils/withWidth';

import SidebarContainer from '../containers/SidebarContainer'
import * as Config from '../config'

injectTapEventPlugin();

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const style = {
      marginLeft: this.props.sidebarOpen ? '200px' : 0
    }

    return (
      <MuiThemeProvider>
        <div>
          <SidebarContainer />
          <div
            style={style}
          >
            {this.props.children}
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default withWidth()(App);
