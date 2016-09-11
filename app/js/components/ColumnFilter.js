
'use strict';

import React from 'react';
import * as Colors from 'material-ui/styles/colors';
import Checkbox from 'material-ui/Checkbox';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import Divider from 'material-ui/Divider';
import IconCheck from 'material-ui/svg-icons/action/check-circle';

import { wrapperProps } from '../utils'

const chipStyle = {
  margin: '4px'
}

class ColumnFilter extends React.Component {
  constructor(props) {
    super(props)
  }

  addFilter(item) {
    return this.props.colAll.filter((key) => {
      if(this.props.colDisplay.indexOf(key) != -1 || key == item)
        return true

      return false
    })
  }

  removeFilter(item) {
    let index = this.props.colDisplay.indexOf(item)
    return [
      ...this.props.colDisplay.slice(0, index),
      ...this.props.colDisplay.slice(index + 1)
    ]
  }

  generateCheckbox() {
    return this.props.colAll.map((key, index) => {

      return (
        <div>
          <Chip
            key={index}
            style={chipStyle}
            onTouchTap={(e) => {
              var result = this.props.colDisplay.indexOf(key) >= 0 ? this.removeFilter(key) : this.addFilter(key)

              this.props.setDataTable({colDisplay: result})
            }}
          >
          {
            this.props.colDisplay.indexOf(key) >= 0 ?
            <Avatar 
              backgroundColor={Colors.green500}
              icon={<IconCheck />} 
            /> :
            null
          }
            {this.props.displayName[key] || key}
          </Chip>
        </div>
      )
    })
  }

  render() {
    return (
      <div
        style={{ display: 'flex' }}
      >
        {this.generateCheckbox()}
      </div>
    )
  }
}

export default ColumnFilter;
