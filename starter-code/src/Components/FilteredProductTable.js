import React, { Component } from 'react';

import listOfProducts from '../data.json';

// data json file only needs to be in the most overlying component. Its data will then be passed down to other components down the line through the default state and then through subsequent props.
import SearchBar from './SearchBar';

class FilterProductTable extends Component {

  
  
  
  
  
  render() {
    return (
      <div className="filter-product-table">
        
         <SearchBar />

         



      </div>
    );
  }
}

export default FilterProductTable;

// Parent components always announce its child components in its body of code.
// children DO NOT announce parent components in their code.