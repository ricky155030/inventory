'use strict';

import React from 'react';
import TextField from 'material-ui/TextField';
import Avatar from 'material-ui/Avatar';
import ListItem from 'material-ui/List/ListItem';
import { Card, CardText } from 'material-ui/Card';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import { Link } from 'react-router'
import IconButton from 'material-ui/IconButton/IconButton';
import IconClose from 'material-ui/svg-icons/navigation/close';
import IconDelete from 'material-ui/svg-icons/action/delete';
import IconEdit from 'material-ui/svg-icons/editor/mode-edit';
import { Table, Th, Tr, Td, Tbody, Thead, unsafe } from 'reactable'
import { grey500, green200 } from 'material-ui/styles/colors';
import { Grid, Row, Col } from 'react-flexbox-grid'
import { wrapperProps } from '../utils'
import DataTable from './DataTable'

class SearchBar extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Card>
        <Toolbar
          style={{ backgroundColor: green200, height: '5px' }}
        />
        <CardText>
          <TextField 
            floatingLabelText="Search"
            fullWidth
            onChange={(e) => {
              let value = e.target.value
              this.props.setSearchText(value)
            }}
          />
        </CardText>
      </Card>
    )
  }
}

export default SearchBar;
