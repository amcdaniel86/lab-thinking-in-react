import React, { Component } from 'react';
// above imports are only what are not in parent components, but are required in this specific component.
import ProductTable from './ProductTable';

class SearchBar extends Component {

  state = {


      
  }
  
  
  render() {
    return (
      <div className="search-bar">
        <ProductTable />
        
          <input placeholder="Search..." class="search-field" type="text" />
          <input class="search-box" type="checkbox" />
          <p class="search-message">Only show products in stock</p>

      </div>
    );
  }
}

export default SearchBar;