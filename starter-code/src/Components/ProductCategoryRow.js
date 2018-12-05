import React, { Component } from 'react';

import ProductItemRow from './ProductItemRow';
// above is from child component, imported from 'child component.

class ProductCategoryRow extends Component {

  state = {
      category : '',
      price : '',
      stocked : true,
      name: ''

      
  }
  
  
  
  render() {
    return (
      <div className="product-category-row">
        
      <ProductItemRow />
{/* // this part announces the child component, that the parent is passing its component state into. */}

          {/* <h5>Sporting Goods</h5>

          <h5>Electronics</h5> */}


      </div>
    );
  }
}

export default ProductCategoryRow;