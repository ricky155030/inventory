'use strict';

import React from 'react';
import { wrapperStyle, CardWrapper, loadingWrapper } from '../utils'
import Chip from 'material-ui/Chip'

const Test = wrapperStyle(Chip, {
  style: {
    backgroundColor: '#000',
    borderRadius: '5px'
  },
  labelStyle: {
    color: '#FFF',
    fontWeight: 'bold'
  },
  children: "Test"
}, 'Test')

const Hello = wrapperStyle(Test, {
  style: {
    backgroundColor: '#F00',
  },
  labelStyle: {
    color: '#000',
  }
}, "Hello")

class Sidebar extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <div
        style={{ margin: '20px' }}
      >
        <Test
          style={{ backgroundColor: '#F00' }}
        >
        </Test>
        <h1>Test</h1>
        <Hello
          style={{ backgroundColor: '#FF0' }}
        >
          haha
        </Hello>
      </div>
    )
  }
}

export default Sidebar
