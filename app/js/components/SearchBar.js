'use strict';

import React from 'react';
import TextField from 'material-ui/TextField';
import IconSearch from 'material-ui/svg-icons/action/search';
import * as Colors from 'material-ui/styles/colors';
import { HocRaisedButton } from '../utils'

const textFieldStyle = { marginRight: '20px', height: '44px' }
const buttonStyle = { height: '36px' }
const buttonIconStyle = { marginTop: '6px' }

class SearchBar extends React.Component {
  constructor(props) {
    super(props)
  }

  update() {
    let value = this.refs.search.input.value
    this.props.setDataTable({filterString: value})
  }

  render() {
    return (
      <div
        style={{ display: 'flex' }}
      >
        <TextField 
          fullWidth
          ref="search"
          hintText="Search"
          underlineStyle={{ borderColor: Colors.grey500 }}
          underlineFocusStyle={{ borderColor: Colors.grey800 }}
          hintStyle={{ color: Colors.grey500 }}
          style={textFieldStyle}
          onKeyDown={(e) => {
            switch(e.which) {
              case 13:
                this.update()
                break;
              default:
                break;
            }
          }}
        />
        <HocRaisedButton 
          icon={<IconSearch color="#FFF" style={buttonIconStyle} />}
          backgroundColor={Colors.grey500}
          style={buttonStyle}
          labelColor="#FFF"
          width="50px"
          onClick={() => {
           this.update()
          }}
        />
      </div>
    )
  }
}

export default SearchBar;
