'use strict';

import React from 'react';
import { Card, CardText, CardHeader } from 'material-ui/Card';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton/IconButton';
import RaisedButton from 'material-ui/RaisedButton'
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import Divider from 'material-ui/Divider';
import Popover from 'material-ui/Popover';
import IconDelete from 'material-ui/svg-icons/action/delete';
import IconEdit from 'material-ui/svg-icons/editor/mode-edit';
import IconSearch from 'material-ui/svg-icons/action/search';
import IconViewList from 'material-ui/svg-icons/action/view-list';
import IconFilter from 'material-ui/svg-icons/content/filter-list';
import IconError from 'material-ui/svg-icons/alert/error';
import IconPoll from 'material-ui/svg-icons/social/poll';
import IconMenu from 'material-ui/svg-icons/navigation/menu';
import * as Colors from 'material-ui/styles/colors';
import { Grid, Row, Col } from 'react-flexbox-grid'
import { wrapperProps, CardWrapper, loadingWrapper, HocRaisedButton } from '../utils'
import SearchBarContainer from '../containers/SearchBarContainer'
import SearchLabelContainer from '../containers/SearchLabelContainer'
import DataTableContainer from '../containers/DataTableContainer'
import ColumnFilterContainer from '../containers/ColumnFilterContainer'
import { StickyContainer, Sticky } from 'react-sticky';
import CircularProgress from 'material-ui/CircularProgress';
import withWidth from 'material-ui/utils/withWidth';

import { Bar as BarChart } from 'react-chartjs'

const barData = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
      {
          label: "My First dataset",
          fillColor: "rgba(220,220,220,0.5)",
          strokeColor: "rgba(220,220,220,0.8)",
          highlightFill: "rgba(220,220,220,0.75)",
          highlightStroke: "rgba(220,220,220,1)",
          data: [65, 59, 80, 81, 56, 55, 40]
      },
      {
          label: "My Second dataset",
          fillColor: "rgba(151,187,205,0.5)",
          strokeColor: "rgba(151,187,205,0.8)",
          highlightFill: "rgba(151,187,205,0.75)",
          highlightStroke: "rgba(151,187,205,1)",
          data: [28, 48, 40, 19, 86, 27, 90]
      }
  ]
};

const barOption = {
  responsive: true
}

/* High Order Components */
const HocCol = wrapperProps(Col, {
  style: {
    marginBottom: '20px'
  }
})

const CenterCol = wrapperProps(HocCol, {
  style: {
    textAlign: 'center'
  }
})

const HocDivider = wrapperProps(Divider, {
  style: {
    marginTop: '10px',
    marginBottom: '10px'
  }
})

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
      },
      filterOpen: false,
      filterAnchor: null
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

  componentWillUpdate() {
    console.log(this.props.width)
  }

  render() {
    return (
      <StickyContainer>
        <Sticky style={{ zIndex: 9999 }}>
          <Toolbar
            style={{ backgroundColor: Colors.grey500 }}
          >
            <ToolbarGroup>
              {
                this.props.sidebarOpen ? null : 
                <IconButton 
                  style={{ height: '56px' }}
                  onClick={() => {
                    this.props.setSidebar(true)
                  }}
                >
                  <IconMenu color="#FFF" />
                </IconButton>
              }
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
            <HocCol lg={4} md={10} sm={12} xs={12}>
              <CardWrapper
                avatar={<IconPoll color="#FFF" />}
                avatarColor={Colors.pink300}
                title="F14A 3PAR Count"
                titleColor="#FFF"
              >
                <div
                  style={{ textAlign: 'center' }}
                >
                  <BarChart data={barData} options={barOption} />
                </div>
              </CardWrapper>
            </HocCol>
          </Row>
          <Row>
            <HocCol lg={12} md={12} sm={12} xs={12}>
              <CardWrapper
                avatar={<IconViewList color="#FFF" />}
                avatarColor={Colors.grey500}
                title="List"
                titleColor="#FFF"
              >
                <Grid fluid style={{ padding: 0 }}>
                  <Row>
                    <CenterCol lg={1} md={1} sm={12} xs={12}>
                      <HocRaisedButton
                        ref="filter"
                        icon={<IconFilter color="#FFF" />}
                        backgroundColor={Colors.grey500}
                        labelColor="#FFF"
                        clicked={this.state.filterOpen}
                        width="50px"
                        onTouchTap={(e) => { 
                          this.setState({
                            filterAnchor: e.currentTarget,
                            filterOpen: true
                          })
                        }}
                      />
                      <Popover
                        anchorEl={this.state.filterAnchor}
                        open={this.state.filterOpen}
                        anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                        targetOrigin={{horizontal: 'left', vertical: 'top'}}
                        onRequestClose={() => {
                          this.setState({
                            filterOpen: false
                          })
                        }}
                      >
                        <CardWrapper
                          avatar={<IconViewList color="#FFF" />}
                          avatarColor={Colors.grey500}
                          header={false}
                        >
                          <ColumnFilterContainer
                            colAll={this.props.colAll}
                            colDisplay={this.props.colDisplay}
                            displayName={this.props.displayName}
                          />
                        </CardWrapper>
                      </Popover>
                    </CenterCol>
                    <CenterCol lg={4} md={6} sm={12} xs={12}>
                      <SearchBarContainer />
                    </CenterCol>
                  </Row>
                </Grid>
                <DataTableContainer
                  definition={definition}
                  itemsPerPage={10}
                  data={this.state.data}
                  filterString={this.props.searchText}
                />
              </CardWrapper>
            </HocCol>
          </Row>
        </Grid>
      </StickyContainer>
    )
  }
}

export default withWidth()(List);
