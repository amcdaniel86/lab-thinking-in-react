import React, { Component } from 'react';

import ProductRow from './ProductItemRow';
// above is from child component, imported from 'child component.

class ProductCategoryRow extends Component {

  
  
  
  
  render() {
    return (
      <div className="product-category-row">
        
      <ProductRow />
{/* // this part announces the child component, that the parent is passing its component state into. */}


      </div>
    );
  }
}

export default ProductCategoryRow;