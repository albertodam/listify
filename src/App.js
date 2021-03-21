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
    const newProductsAdded = [...products, { id: getId(), name: newProduct }]
    updateProducts(newProductsAdded)
    saveList(newProductsAdded)
  }

  const handlerRemoverProduct = (productId) => () => {
    const productListUpdated = products.filter((product) => product.id !== productId)
    updateProducts(productListUpdated)
    saveList(productListUpdated)
  }

  return (
    <div className="App">
      <Logo />
      <ProductContext.Provider value={{ products, handlerAddProduct, handlerRemoverProduct }}>
        <ProductForm />
        <ProductList />
      </ProductContext.Provider>
    </div>
  )
}

export default App
