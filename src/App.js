import Shop from "./Components/Shop";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import "./Styles/App.css";
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter forceRefresh>
      <div className="App">
        <Navbar />
        <Route exact path="/home" component={Home} />
        <Route path="/shop" component={Shop} />
      </div>
    </BrowserRouter>
  );
}

export default App;
