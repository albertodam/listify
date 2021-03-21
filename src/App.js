import React, { useState } from 'react'
import './App.css'

import ProductContext from './context/ProductContext'
import ProductList from './components/ProductList/index'
import ProductForm from './components/ProductForm'
import { saveList, getList } from './services/local.storage.service'
import Logo from './components/Logo/Logo'

function App() {
  const [products, updateProducts] = useState(getList)
  const getId = () => {
    return `_${Math.random().toString(36).substr(2, 9)}`
  }

  const handlerAddProduct = (newProduct) => () => {
    const newProductsAdded = [...products, { id: getId(), name: newProduct, completed: false }].sort(
      (prodcut1, product2) => prodcut1.completed - product2.completed
    )
    updateProducts(newProductsAdded)
    saveList(newProductsAdded)
  }

  const handlerRemoverProduct = (productId) => () => {
    const productListUpdated = products
      .filter((product) => product.id !== productId)
      .sort((prodcut1, product2) => prodcut1.completed - product2.completed)
    updateProducts(productListUpdated)
    saveList(productListUpdated)
  }

  const handlerCheckProduct = (productId) => () => {
    const productListUpdated = products
      .map((product) => {
        const productModified = product
        if (productModified.id === productId) {
          productModified.completed = true
        }
        return productModified
      })
      .sort((prodcut1, product2) => prodcut1.completed - product2.completed)
    updateProducts(productListUpdated)
    saveList(productListUpdated)
  }

  return (
    <div className="App">
      <Logo />
      <ProductContext.Provider value={{ products, handlerAddProduct, handlerRemoverProduct, handlerCheckProduct }}>
        <ProductForm />
        <ProductList />
      </ProductContext.Provider>
    </div>
  )
}

export default App
