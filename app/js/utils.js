'use strict';

import React from 'react';

export const wrapperProps = (Component, WrapProps) => {
  return class extends React.Component {
    constructor(props) {
      super(props)
    }

    render() {
      return(
        <Component 
          {...WrapProps}
          {...this.props}
        />
      )
    }
  }
}
