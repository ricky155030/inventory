'use strict';

import React from 'react';
import { Card, CardText, CardHeader } from 'material-ui/Card';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton/IconButton';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import IconDelete from 'material-ui/svg-icons/action/delete';
import IconEdit from 'material-ui/svg-icons/editor/mode-edit';
import IconSearch from 'material-ui/svg-icons/action/search';
import IconViewList from 'material-ui/svg-icons/action/view-list';
import IconFilter from 'material-ui/svg-icons/content/filter-list';
import * as Colors from 'material-ui/styles/colors';
import { Grid, Row, Col } from 'react-flexbox-grid'
import { wrapperProps, CardWrapper, loadingWrapper } from '../utils'
import SearchBarContainer from '../containers/SearchBarContainer'
import SearchLabelContainer from '../containers/SearchLabelContainer'
import DataTableContainer from '../containers/DataTableContainer'
import ColumnFilterContainer from '../containers/ColumnFilterContainer'

/* Enhanced Components */
const enhanced = {}

enhanced.Col = wrapperProps(Col, {
  style: {
    marginBottom: '20px'
  }
})
enhanced.DataTable = loadingWrapper(DataTableContainer)

const data = (num) => {
  let arr = []
  console.log('run')
  console.time("label");

  for(var i = 0; i < num; i++) {
    arr.push({name: 'hwkao', age: i, id: i, data: 'ahah', omg: 'nono', date: 'nonono'})
  }
  
  console.timeEnd("label");

  return arr
}

const definition = {
  id: { 
    show: true,
    filterable: true,
    sortable: true,
    name: 'ID'
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
  data: { 
    show: true,
    filterable: true,
    sortable: true,
    name: 'Data' 
  },
  omg: { 
    show: true,
    filterable: true,
    sortable: true,
    name: 'OMG' 
  },
  date: { 
    show: true,
    filterable: true,
    sortable: true,
    name: 'Date' 
  }
}

class List extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    this.setState({
      data: data(10000)
    })
  }

  render() {
    return (
      <Grid fluid>
        <Row>
          <enhanced.Col lg={12} md={12} sm={12} xs={12}>
            <Grid fluid style={{ padding: 0 }}>
              <Row>
                <enhanced.Col lg={2} md={4} sm={6} xs={12}>
                  <CardWrapper
                    avatar={<IconSearch color="#FFF" />}
                    avatarColor={Colors.grey500}
                    title="Search"
                    titleColor="#FFF"
                  >
                    <SearchBarContainer />
                  </CardWrapper>
                </enhanced.Col>
                <enhanced.Col lg={2} md={4} sm={6} xs={12}>
                  <CardWrapper
                    avatar={<IconFilter color="#FFF" />}
                    avatarColor={Colors.grey500}
                    maxHeight="200px"
                    title="Column Visible"
                    titleColor="#FFF"
                  >
                    <ColumnFilterContainer
                      colAll={this.props.colAll}
                      colDisplay={this.props.colDisplay}
                      displayName={this.props.displayName}
                    />
                  </CardWrapper>
                </enhanced.Col>
              </Row>
            </Grid>
            <CardWrapper
              avatar={<IconViewList color="#FFF" />}
              avatarColor={Colors.grey500}
              title="List"
              titleColor="#FFF"
            >
              <SearchLabelContainer 
                searchText={this.props.searchText}
              />
              <DataTableContainer
                definition={definition}
                itemsPerPage={10}
                data={this.state.data}
                filterString={this.props.searchText}
              />
            </CardWrapper>
          </enhanced.Col>
        </Row>
      </Grid>
    )
  }
}

export default List;
