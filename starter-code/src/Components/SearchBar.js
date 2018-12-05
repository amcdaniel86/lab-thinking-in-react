import React, { Component } from 'react';
// above imports are only what are not in parent components, but are required in this specific component.
import ProductTable from './ProductTable';

class SearchBar extends Component {

  
  
  
  render() {
    return (
      <div className="search-bar">
        
        <ProductTable />


      </div>
    );
  }
}

export default SearchBar;