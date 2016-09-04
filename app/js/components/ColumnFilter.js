
'use strict';

import React from 'react';
import Checkbox from 'material-ui/Checkbox';

import { wrapperProps } from '../utils'

const checkboxStyle = {
  block: {
    maxWidth: 250
  }
}

class ColumnFilter extends React.Component {
  constructor(props) {
    super(props)
  }

  unCheck(item) {
    return this.props.colAll.filter((key) => {
      if(this.props.colDisplay.indexOf(key) != -1 || key == item)
        return true

      return false
    })
  }

  check(item) {
    let index = this.props.colDisplay.indexOf(item)
    return [
      ...this.props.colDisplay.slice(0, index),
      ...this.props.colDisplay.slice(index + 1)
    ]
  }

  generateCheckbox() {
    return this.props.colAll.map((key, index) => {
      return (
        <Checkbox
          key={index}
          label={this.props.displayName[key] || key}
          labelPosition="left"
          defaultChecked={this.props.colDisplay.indexOf(key) != -1}
          onCheck={(e, checked) => {
            var result = checked ? this.unCheck(key) : this.check(key)
            this.props.setDataTable({colDisplay: result})
          }}
          iconStyle={{ marginLeft: 'auto' }}
        />
      )
    })
  }

  render() {
    return (
      <div>
        {this.generateCheckbox()}
      </div>
    )
  }
}

export default ColumnFilter;
