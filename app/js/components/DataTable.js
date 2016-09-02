'use strict';

import React from 'react';
import { Table, Th, Tr, Td, Tbody, Thead, unsafe } from 'reactable'

const wrap = (val) => {
  return(
    <a href={val}>{val}</a>
  )
}

class DataTable extends React.Component {
  static propsTypes = {
    definition: React.PropTypes.object.isRequired,
    itemsPerPage: React.PropTypes.number.isRequired
  };

  constructor(props) {
    super(props)
    this.state = {
      colDisplay: [],
      colSortable: [],
      colFilterable: [],
      displayName: {},
      data: [],
      itemsPerPage: 10,
      filterString: '',
    }
  }
  
  componentDidMount() {
    this.refresh(this.props)
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
    this.refresh(nextProps)
  }

  refresh(props) {
    let definition = props.definition
    let itemsPerPage = props.itemsPerPage
    let filterString = props.filterString
    let data = props.data
    let colSortable = []
    let colDisplay = []
    let colFilterable = []
    let colWrapper = {}
    let displayName = {}

    Object.keys(definition).forEach((key) => {
      if(definition[key].show)
        colDisplay.push(key)
      if(definition[key].sortable)
        colSortable.push(key)
      if(definition[key].filterable)
        colFilterable.push(key)

      displayName[key] = definition[key].name
      colWrapper[key] = definition[key].wrapper
    })

    this.setState({
      colDisplay,
      colSortable,
      colFilterable,
      displayName,
      itemsPerPage,
      data,
      filterString,
      colWrapper
    })
  }

  generateTh(displayName, colDisplay) {
    return colDisplay.map((item) => {
      return (
        <Th column={item}>{displayName[item]}</Th>
      )
    })
  }

  generateTd(row, colDisplay, colWrapper) {
    return colDisplay.map((col) => {
      let result = row[col]

      if(colWrapper[col]) 
        result = colWrapper[col](row)

      return (
        <Td column={col} value={row[col]}>{result}</Td>
      )
    })
  }

  generateTr(data) {
    return data.map((row) => {
      return (
        <Tr>
          {this.generateTd(row, this.state.colDisplay, this.state.colWrapper)}
        </Tr>
      )
    })
  }
  
  render() {
    return (
      <Table
        className="table"
        itemsPerPage={this.state.itemsPerPage} 
        sortable={this.state.colSortable}
        filterable={this.state.colFilterable}
        filterBy={this.state.filterString}
      >
        <Thead>
          {this.generateTh(this.state.displayName, this.state.colDisplay)}
        </Thead>
        {this.generateTr(this.state.data)}
      </Table>
    )
  }
}

export default DataTable;
