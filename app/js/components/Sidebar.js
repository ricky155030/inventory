'use strict';

import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton/IconButton';
import IconInfo from 'material-ui/svg-icons/action/info';
import IconSettings from 'material-ui/svg-icons/action/settings';
import { grey800 } from 'material-ui/styles/colors';
import { wrapperProps } from '../utils'

const MyMenuItem = wrapperProps(MenuItem, {
  style: {
    color: '#FFF'
  }
})

class Sidebar extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <Drawer
        open={true}
        docked={true}
        width={200}
        containerStyle={{ backgroundColor: grey800 }}
      >
        <MyMenuItem 
          primaryText="Hello"
        />
      </Drawer>
    )
  }
}

export default Sidebar
