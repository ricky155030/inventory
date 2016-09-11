'use strict';

import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton/IconButton';
import IconInfo from 'material-ui/svg-icons/action/info';
import IconSettings from 'material-ui/svg-icons/action/settings';
import IconLeft from 'material-ui/svg-icons/navigation/chevron-left';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import * as Colors from 'material-ui/styles/colors';
import withWidth, {SMALL, LARGE} from 'material-ui/utils/withWidth';

import { wrapperProps } from '../utils'
import * as Config from '../config'

const MyMenuItem = wrapperProps(MenuItem, {
  style: {
    color: '#FFF'
  }
})

class Sidebar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      width: 200
    }
  }

  componentWillUpdate(nextProps) {
    if(nextProps.width != this.props.width)
      nextProps.width >= LARGE ? this.props.setSidebar(true) : this.props.setSidebar(false)
  }

  render() {
    return (
      <Drawer
        open={this.props.open}
        docked={true}
        width={this.state.width}
        containerStyle={{ backgroundColor: Colors.grey800 }}
        onRequestChange={(open) => this.props.setSidebar(open)}
      >
        <IconButton
          style={{ position: 'absolute', left: 160, top: '50%' }}
          onClick={() => this.props.setSidebar(false)}
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

export default withWidth()(Sidebar)
