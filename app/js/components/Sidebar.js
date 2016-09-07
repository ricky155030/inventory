'use strict';

import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton/IconButton';
import IconInfo from 'material-ui/svg-icons/action/info';
import IconSettings from 'material-ui/svg-icons/action/settings';
import IconLeft from 'material-ui/svg-icons/navigation/chevron-left';
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
    this.state = {
      open: true,
      width: 200
    }
  }
  
  render() {
    return (
      <Drawer
        open={this.state.open}
        docked={true}
        width={this.state.width}
        containerStyle={{ backgroundColor: grey800 }}
      >
        <IconButton
          style={{ position: 'absolute', left: 150, top: '50%' }}
          onClick={() => {
            this.setState({
              width: 100
            })
          }}
        >
          <IconLeft color="#FFF" />
        </IconButton>
        <MyMenuItem 
          primaryText="Hello"
        />
      </Drawer>
    )
  }
}

export default Sidebar
