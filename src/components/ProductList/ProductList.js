import React from 'react'
import Product from '../Product/Product'
import ProductContext from '../../context/ProductContext'

const ProductList = () => {
  console.log('dentro - ProductList')

  return (
    <ProductContext.Consumer>
      {({ products }) => (
        <div className="list-product">
          {products.map((product) => (
            <Product key={product.id} id={product.id} name={product.name} />
          ))}
        </div>
      )}
    </ProductContext.Consumer>
  )
}

export default ProductList
