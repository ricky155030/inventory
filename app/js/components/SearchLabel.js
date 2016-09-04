'use strict';

import React from 'react';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';

class SearchLabel extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <Chip>
        {this.props.searchText}
      </Chip>
    )
  }
}

export default SearchLabel
