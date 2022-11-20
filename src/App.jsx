import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {commerce} from "./lib/commerce"
import Products from "./components/products";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import Basket from "./components/basket";

const App = () => {
  const [products, setProducts] = useState([]);
  const [basketData, setBasketData] = useState({});

  const fetchProducts = async () => {
    const response = await commerce.products.list();
    setProducts((response && response.data) || []);
  };

  const fetchBasketData = async () => {
    const response = await commerce.cart.retrieve();
    setBasketData(response);
  };

  const addProduct = async (productId, quantity) => {
    const response = await commerce.cart.add(productId, quantity);
    setBasketData(response);

  };

  const updateProduct = async (productId, quantity) => {
    const response = await commerce.cart.update(productId, { quantity });
    setBasketData(response.cart);
  };

  const handleEmptyBasket = async () => {
    const response = await commerce.cart.empty();
    setBasketData(response.cart);
  };

  const RemoveItemFromBasket = async (itemId) => {
    const response = await commerce.cart.remove(itemId);
    setBasketData(response.cart);
  };

  const refreshBasket = async () => {
    const newBasketData = await commerce.cart.refresh();
    setBasketData(newBasketData);
  };

  function refreshPage() {
    window.location.reload(false);
  }

  useEffect(() => {
    fetchProducts();
    fetchBasketData();
  }, []);

  console.log({products})
  return (<Router>
    <div>
      <NavBar
          basketItems={basketData.total_items}
          totalCost={
            (basketData.subtotal &&
              basketData.subtotal.formatted_with_symbol) ||
            "00.00"
          }/>
        
      <Routes>
        <Route exact path="/" element = {<Products products={products} addProduct={addProduct}/> }/>

        <Route exact path="/basket" element = {
        <Basket
              basketData={basketData}
              updateProduct={updateProduct}
              handleEmptyBasket={handleEmptyBasket}
              RemoveItemFromBasket={RemoveItemFromBasket}
            />}/>
            
        
      </Routes>
      <Footer/>
    </div>
  </Router>);
}




export default App;
