import './App.css';
import { useState } from 'react'
import Product from './components/Product/Product'
import  {saveList, getList}  from './services/local.storage.service';
import Logo from './components/Logo/Logo'
function App() {

  const [products, updateProducts] = useState(getList);
  const [newProduct, updateNewProduct] = useState();

  const handlerAddProduct = (e) => {
    e.preventDefault();
    const newProductsAdded = [...products, { id:getId(), name: newProduct }];
    updateProducts(newProductsAdded)
    document.querySelector('#product-form').reset();
    updateNewProduct('')
    saveList(newProductsAdded)
  }

  const handlerNameProductChange = (e) => {
    updateNewProduct(e.target.value)
  }

  const getId = function () {
    return '_' + Math.random().toString(36).substr(2, 9);
  };

  return (
    <div className="App">
    <Logo />
      <form id="product-form" className="form-new-product" onSubmit={handlerAddProduct}>
        <input onChange={handlerNameProductChange} />
        <button disabled={!newProduct}>+ Añadir producto</button>
      </form>
      <div className="list-product">
      {products.map(product => <Product key={product.id} name={product.name} />)}
      </div>
    </div>
  );
}

export default App;
