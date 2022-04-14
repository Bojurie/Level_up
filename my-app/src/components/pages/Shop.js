import React, { Component } from 'react'
import Products from '../Products';


 class Shop extends Component {
  render() {
    return (
      <div className='shop'>
        <h1>Shop</h1>
        <Products  />
      </div>
    )
  }
}
export default Shop;