import Shop from "./Components/Shop";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Cart from "./Components/Cart";
import "./Styles/App.css";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Cart />
        <Route exact path="/" component={Home} />
        <Route path="/shop" component={Shop} />
      </div>
    </BrowserRouter>
  );
}

export default App;
