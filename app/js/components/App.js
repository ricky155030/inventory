'use strict';

import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Card, CardText } from 'material-ui/Card';

import Sidebar from './Sidebar'

injectTapEventPlugin();

class Main extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Sidebar />
          <div
            style={{ marginLeft: '200px' }}
          >
            {this.props.children}
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default Main;
