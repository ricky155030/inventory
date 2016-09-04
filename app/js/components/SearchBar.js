'use strict';

import React from 'react';
import TextField from 'material-ui/TextField';
import Avatar from 'material-ui/Avatar';
import ListItem from 'material-ui/List/ListItem';
import { Card, CardText } from 'material-ui/Card';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import { Link } from 'react-router'
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton/IconButton';
import IconClose from 'material-ui/svg-icons/navigation/close';
import IconDelete from 'material-ui/svg-icons/action/delete';
import IconEdit from 'material-ui/svg-icons/editor/mode-edit';
import { Table, Th, Tr, Td, Tbody, Thead, unsafe } from 'reactable'
import * as Colors from 'material-ui/styles/colors';
import { Grid, Row, Col } from 'react-flexbox-grid'
import { wrapperProps } from '../utils'
import DataTable from './DataTable'

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
      <div>
        <TextField 
          ref="search"
          hintText="Search"
          fullWidth
          underlineStyle={{ borderColor: Colors.grey500 }}
          underlineFocusStyle={{ borderColor: Colors.grey800 }}
          hintStyle={{ color: Colors.grey500 }}
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
        <RaisedButton 
          fullWidth
          label="Go"
          backgroundColor={Colors.grey500}
          labelColor="#FFF"
          onClick={() => {
           this.update()
          }}
        />
      </div>
    )
  }
}

export default SearchBar;
