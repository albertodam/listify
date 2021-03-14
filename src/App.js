import "./App.css";
import { useState, memo } from "react";
import Product from "./components/Product/Product";
import { saveList, getList } from "./services/local.storage.service";
import Logo from "./components/Logo/Logo";
function App() {
  const [products, updateProducts] = useState(getList);
  console.log("dentro - App");
  const handlerAddProduct = (newProduct) => {
    const newProductsAdded = [...products, { id: getId(), name: newProduct }];
    updateProducts(newProductsAdded);
    document.querySelector("#product-form").reset();
    saveList(newProductsAdded);
  };

  const getId = function () {
    return "_" + Math.random().toString(36).substr(2, 9);
  };

  return (
    <div className="App">
      <Logo />
      <NewProductForm onAddProduct={handlerAddProduct} />
      <ProductList products={products} />
    </div>
  );
}

const NewProductForm = ({ onAddProduct }) => {
  console.log("dentro - NewProductForm");
  const [newProduct, updateNewProduct] = useState();
  const handlerNameProductChange = (e) => {
    updateNewProduct(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    updateNewProduct("");
    onAddProduct(newProduct);
  };

  return (
    <form id="product-form" className="form-new-product" onSubmit={onSubmit}>
      <input onChange={handlerNameProductChange} />
      <MyButton isDisabled={!newProduct} />
    </form>
  );
};

const MyButton = memo(({ isDisabled }) => {
  console.log("dentro - MyButton");
  return <button disabled={isDisabled}>+ Añadir producto</button>;
});

const ProductList = ({ products }) => {
  console.log("dentro - ProductList");
  return (
    <div className="list-product">
      {products.map((product) => (
        <Product key={product.id} name={product.name} />
      ))}
    </div>
  );
};

export default App;
