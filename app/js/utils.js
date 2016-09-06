'use strict';

import React from 'react';
import { cloneDeep } from 'lodash';
import { Card, CardText, CardHeader } from 'material-ui/Card'

const isObject = (item) => {
  return (item && typeof item === 'object' && !Array.isArray(item) && item !== null);
}

const deepAssign = (a, b) => {
  let keys = Object.keys(b) 
  let output = cloneDeep(a)
  
  if(isObject(a) && isObject(b)) {
    keys.forEach((key) => {
      let source = output[key]
      let target = b[key]
    
      if(isObject(target)) {
        if(key in output) {
          output[key] = deepAssign(source, target)
        } else {
          Object.assign(output, { [key]: target })
        }
      } else {
        Object.assign(output, { [key]: target })
      }
    })
  }

  return output
}

export const wrapperStyle = (Component, wrapProps, name) => {
  return class extends React.Component {
    render() {
      const mergedProps = deepAssign(wrapProps, this.props)

      return (
        <Component 
          {...mergedProps}
        />
      )
    }
  }
}

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

export const loadingWrapper = (Component) => {
  return class extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        status: 1
      }
    }

    shouldComponentUpdate(nextProps, nextState) {
      console.log(this.state.status, nextState.status)
      if(nextState.status != this.state.status) {
        console.log('should update')
        return true
      }
      return false
    }

    whatToRender() {
      if(this.state.status == 0) {
        return (
          <div>
            <h1> Rendering </h1>
          </div>
        )
      } else {
        return (
          <div>
            <Component 
              {...this.props}
              updateStatus={(status) => {
                console.log('update status to', status)
                this.setState({status})
              }}
            />
          </div>
        )
      }
    }

    render() {
      return(
        this.whatToRender()
      )
    }
  }
}
