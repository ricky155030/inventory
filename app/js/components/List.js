'use strict';

import React from 'react';
import TextField from 'material-ui/TextField';
import Avatar from 'material-ui/Avatar';
import Checkbox from 'material-ui/Checkbox';
import Chip from 'material-ui/Chip';
import { Tabs, Tab } from 'material-ui/Tabs';
import ListItem from 'material-ui/List/ListItem';
import { Card, CardText } from 'material-ui/Card';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import { Link } from 'react-router'
import IconButton from 'material-ui/IconButton/IconButton';
import IconClose from 'material-ui/svg-icons/navigation/close';
import IconDelete from 'material-ui/svg-icons/action/delete';
import IconEdit from 'material-ui/svg-icons/editor/mode-edit';
import { Table, Th, Tr, Td, Tbody, Thead, unsafe } from 'reactable'
import { grey500, red200, cyan200 } from 'material-ui/styles/colors';
import { Grid, Row, Col } from 'react-flexbox-grid'
import { wrapperProps } from '../utils'
import DataTable from './DataTable'
import SearchBarContainer from '../containers/SearchBarContainer'

const CustomCol = wrapperProps(Col, {
  style: {
    marginBottom: '20px'
  }
})

const data = (num) => {
  let arr = []

  for(var i = 0; i < num; i++) {
    arr.push({name: 'hwkao', age: i, id: i})
  }
  return arr
}

class List extends React.Component {
  constructor(props) {
    super(props)
  }

  generateCheckbox(definition) {
    return Object.keys(definition).map((key) => {
      return (
        <Checkbox
          label={definition[key].name}
          defaultChecked={definition[key].show}
          onCheck={(e, checked) => {
            definition[key].show = checked
            this.forceUpdate()
          }}
          style={{ width: 'auto' }}
        />
      )
    })
  }

  render() {
    const definition = {
      id: { 
        show: true,
        filterable: true,
        sortable: true,
        name: 'ID',
        wrapper: (row) => { 
          return (
            <Chip>{row.id}</Chip>
          )
        } 
      },
      name: { 
        show: false,
        filterable: true,
        sortable: true,
        name: 'Name' 
      },
      age: { 
        show: true,
        filterable: true,
        sortable: true,
        name: 'Age' 
      },
      action: { 
        show: true,
        filterable: false,
        sortable: true,
        name: 'action',
        wrapper: (row) => {
          return (
            <div>
              <IconButton
                onClick={() => {
                  this.props.router.push('/edit/' + row.id)
                }}
              >
                <IconEdit />
              </IconButton>
              <IconButton
                onClick={() => {
                  this.props.router.push('/delete/' + row.id)
                }}
              >
                <IconDelete />
              </IconButton>
            </div>
          )
        }
      }
    }

    return (
      <Grid fluid>
        <Row>
          <CustomCol lg={2} md={4} sm={12} xs={12}>
            <SearchBarContainer />
            <br />
            <Card>
              <Toolbar
                style={{ backgroundColor: red200, height: '5px' }}
              />
              <CardText>
                {this.generateCheckbox(definition)}
              </CardText>
            </Card>
          </CustomCol>
          <CustomCol lg={10} md={8} sm={12} xs={12}>
            <Card>
              <Toolbar
                style={{ backgroundColor: cyan200, height: '5px' }}
              />
              <CardText>
                There total {data(100).length} row
              </CardText>
              <CardText>
                <DataTable
                  definition={definition}
                  itemsPerPage={10}
                  data={data(100)}
                  filterString={this.props.searchText}
                />
              </CardText>
            </Card>
          </CustomCol>
        </Row>
        <Row>
          <CustomCol lg={1} md={4} sm={8} xs={12}>
          </CustomCol>
        </Row>
      </Grid>
    )
  }
}

export default List;
