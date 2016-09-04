'use strict';

import React from 'react';
import { Card, CardText, CardHeader } from 'material-ui/Card'

export const wrapperProps = (Component, WrapProps) => {
  return class extends React.Component {
    constructor(props) {
      super(props)
    }

    render() {
      return(
        <Component 
          {...this.props}
          {...WrapProps}
        />
      )
    }
  }
}

export class CardWrapper extends React.Component {
  static propTypes = {
    avatar: React.PropTypes.element.isRequired,
    avatarColor: React.PropTypes.string.isRequired,
    maxHeight: React.PropTypes.string
  }

  constructor(props) {
    super(props)
  }

  render() {
    return(
      <Card>
        <CardHeader 
          style={{ backgroundColor: this.props.avatarColor, height: '40px', padding: '8px' }}
          avatar={this.props.avatar}
          title={this.props.title}
          titleStyle={{ paddingTop: '3px', color: this.props.titleColor }}
        />
        <CardText
          style={{ maxHeight: this.props.maxHeight, overflow: 'scroll', paddingBottom: 0 }}
        >
          {this.props.children}
        </CardText>
      </Card>
    )
  }
}
