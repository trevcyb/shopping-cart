import Shop from "./Components/Shop";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Cart from "./Components/Cart";
import "./Styles/App.css";
import { BrowserRouter, Route } from "react-router-dom";
import React, { useState } from "react";

function App() {
  const [cartVis, setCartVis] = useState(false);

  const showCart = () => {
    setCartVis(!cartVis);
    console.log(cartVis);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar showCart={showCart} />
        <Cart />
        <Route exact path="/" component={Home} />
        <Route path="/shop" component={Shop} />
      </div>
    </BrowserRouter>
  );
}

export default App;
