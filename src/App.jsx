import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {commerce} from "./lib/commerce"
import Products from "./components/products";
import NavBar from "./components/navbar";


const App = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const response = await commerce.products.list();
    setProducts((response && response.data) || []);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log({products})
  return (<Router>
    <div>
      <NavBar/>
      <Routes>
        <Route exact path="/" element = {<Products products={products}/>}/>
      </Routes>
    </div>
  </Router>);
}




export default App;
