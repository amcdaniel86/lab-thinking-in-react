import React, { Component } from 'react';

class ProductItemRow extends Component {

  state = {



  }
  


  showInStock = () =>{
    if(! this.props.stocked){
      return(
        <span class="no-stock">
            {this.props.name}
        </span>
      )
    }
  }


  
  
  
  render() {
    return (
      <div className="product-item-row">
        
        <ProductCategoryRow />

          <ul>{() => {this.data.name} {this.data.price} </ul>


      </div>
    );
  }
}

export default ProductItemRow;
