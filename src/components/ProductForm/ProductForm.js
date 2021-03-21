import React, { useState, useContext } from 'react'
import MyButton from '../MyButton/MyButton'

import './ProductForm.css'
import ProductContext from '../../context/ProductContext'

const NewProductForm = () => {
  const [newProduct, updateNewProduct] = useState()
  const { handlerAddProduct } = useContext(ProductContext)
  const handlerNameProductChange = (e) => {
    updateNewProduct(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    document.querySelector('#product-form').reset()
    handlerAddProduct(newProduct)()
  }

  return (
    <form className="ProductForm" id="product-form" onSubmit={onSubmit}>
      <input onChange={handlerNameProductChange} />
      <MyButton isDisabled={!newProduct}>+ Añadir producto</MyButton>
    </form>
  )
}

NewProductForm.displayName = 'NewProductForm'

export default NewProductForm
