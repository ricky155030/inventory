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
import IconError from 'material-ui/svg-icons/alert/error';
import * as Colors from 'material-ui/styles/colors';
import { Grid, Row, Col } from 'react-flexbox-grid'
import { wrapperProps, CardWrapper, loadingWrapper } from '../utils'
import SearchBarContainer from '../containers/SearchBarContainer'
import SearchLabelContainer from '../containers/SearchLabelContainer'
import DataTableContainer from '../containers/DataTableContainer'
import ColumnFilterContainer from '../containers/ColumnFilterContainer'
import { StickyContainer, Sticky  } from 'react-sticky';
import CircularProgress from 'material-ui/CircularProgress';

/* Enhanced Components */
const enhanced = {}

enhanced.Col = wrapperProps(Col, {
  style: {
    marginBottom: '20px'
  }
})

enhanced.DataTable = loadingWrapper(DataTableContainer)

const Alarm = (content) => {
  return (
    <div
      style={{ width: '100%', height: '50px', backgroundColor: Colors.red100, border: '1px solid ' + Colors.redA100, borderRadius: '5px' }}
    >
      <IconError color={Colors.redA200} style={{ marginLeft: '20px', height: '50px' }}/>
      <span
        style={{ fontSize: '36px', lineHeight: '50px', height: '50px' }}
      >Failed</span>
    </div>
  )
}

class Loading extends React.Component {
  render() {
    let data = this.props.data
    let status = data.status

    switch(status) {
      case 'Success':
        return(
          <div>
            {this.props.children}
          </div>
        )
        break
      case 'Failed':
        return(
          <div>
            <Alarm />
            <h1>{data.status}</h1>
          </div>
        )
        break
      case 'Loading':
        return(
          <div
            style={{ width: '100%', height: '200px', textAlign: 'center', verticalAlign: 'middle' }} 
          >
            <CircularProgress size={2} color={Colors.grey500} 
              style={{ marginTop: '70px' }} 
            />
          </div>
        )
      default:
        return(
          <div>
            <h1>Undefined data</h1>
            <h4>{JSON.stringify(data)}</h4>
          </div>
        )
        break
    }
  }
}

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
      data: [],
      test: {
      }
    }
  }

  componentDidMount() {
    this.setState({
      data: data(10000)
    })

    this.fetchTestData()
  }

  fetchTestData() {
    this.setState({
      test: {
        ...this.state.test,
        status: 'Loading'
      }
    })
    console.log(this.state.test)

    return fetch('http://localhost:3000/api/test') 
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          test: json
        })
      })
  }

  render() {
    return (
      <StickyContainer>
        <Sticky
          stickyStyle={{ zIndex: 9999 }}
        >
          <Toolbar
            style={{ backgroundColor: Colors.grey500 }}
          >
            <ToolbarGroup>
              <ToolbarTitle
                style={{ color: '#FFF' }}
                text="Test"
              />
            </ToolbarGroup>
            <ToolbarGroup>
              <IconButton style={{ height: '56px' }}>
                <IconEdit color="#FFF" />
              </IconButton>
              <IconButton style={{ height: '56px' }}>
                <IconDelete color="#FFF" />
              </IconButton>
            </ToolbarGroup>
          </Toolbar>
        </Sticky>
        <br />
        <Grid fluid>
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
              <br />
              <CardWrapper
                avatar={<IconFilter color="#FFF" />}
                avatarColor={Colors.grey500}
                title="Column Visible"
                titleColor="#FFF"
              >
                <ColumnFilterContainer
                  colAll={this.props.colAll}
                  colDisplay={this.props.colDisplay}
                  displayName={this.props.displayName}
                />
              </CardWrapper>
              <br />
              <CardWrapper
                avatar={<IconFilter color="#FFF" />}
                avatarColor={Colors.grey500}
                title="Column Visible"
                titleColor="#FFF"
              >
                <Loading 
                  data={this.state.test}
                >
                  <h1>{this.state.test.status}</h1>
                </Loading>
              </CardWrapper>
            </enhanced.Col>
            <enhanced.Col lg={10} md={8} sm={6} xs={12}>
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
      </StickyContainer>
    )
  }
}

export default List;
