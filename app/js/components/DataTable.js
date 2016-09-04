'use strict';

import React from 'react';
import { Table, Th, Tr, Td, Tbody, Thead, unsafe } from 'reactable'

class DataTable extends React.Component {
  static propsTypes = {
    definition: React.PropTypes.object.isRequired,
    itemsPerPage: React.PropTypes.number.isRequired
  };

  constructor(props) {
    super(props)
    this.state = {
      displayName: {},
      colWrapper: {},
      status: 0
    }
  }

  componentWillMount() {
    this.refresh(this.props)
  }

  componentWillReceiveProps() {
    console.log('change')
  }

  componentWillUpdate() {
    console.log('will update')
    console.time("update");
  }

  componentDidUpdate() {
    console.log('did update')
    console.timeEnd("update");
  }
  
  refresh(props) {
    let definition = props.definition
    let itemsPerPage = props.itemsPerPage
    let filterString = props.filterString
    let colAll = []
    let colSortable = []
    let colDisplay = []
    let colFilterable = []
    let colWrapper = {}
    let displayName = {}

    Object.keys(definition).forEach((key) => {
      colAll.push(key) 

      if(definition[key].show)
        colDisplay.push(key) 
      if(definition[key].sortable)
        colSortable.push(key) 
      if(definition[key].filterable)
        colFilterable.push(key) 

      displayName[key] = definition[key].name
      colWrapper[key] = definition[key].wrapper
    })

    this.props.setDataTable({
      colAll,
      colDisplay,
      colSortable,
      colFilterable,
      itemsPerPage,
      filterString,
      displayName
    })

    this.setState({
      colWrapper
    })
  }

  generateTh(displayName, colDisplay) {
    return colDisplay.map((item, index) => {
      return (
        <Th key={index} column={item}>{displayName[item]}</Th>
      )
    })
  }

  generateTd(row, colDisplay, colWrapper) {
    return colDisplay.map((col, index) => {
      let result = row[col]

      if(colWrapper[col]) 
        result = colWrapper[col](row)

      return (
        <Td key={index} column={col} value={row[col]}>{result}</Td>
      )
    })
  }

  generateTr(data) {
    return data.map((row, index) => {
      return (
        <Tr key={index}>
          {this.generateTd(row, this.props.colDisplay, this.state.colWrapper)}
        </Tr>
      )
    })
  }
  
  render() {
    if(this.state.status == 0) {
      return (
        <h1> No data </h1>
      )
    }

    if(this.state.status == 1) {
      return (
        <Table
          className="table"
          itemsPerPage={this.props.itemsPerPage} 
          sortable={this.props.colSortable}
          filterable={this.props.colFilterable}
          filterBy={this.props.filterString}
        >
          <Thead>
            {this.generateTh(this.props.displayName, this.props.colDisplay)}
          </Thead>
          {this.generateTr(this.props.data)}
        </Table>
      )
    }
  }
}

export default DataTable;
