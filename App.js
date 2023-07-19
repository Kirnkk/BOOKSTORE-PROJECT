
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Cart from "./Pages/Cart";
import NavigationMenu from "./Components/NavigationMenu";
import Checkout from "./Pages/Checkout";

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path="/" element={<NavigationMenu/>}/>
           <Route path='/home' element={<Home/>}/>
           <Route path='/products' element={<Products/>}/>
           <Route path='/cart' element={<Cart/>}/>
           <Route path='/checkout' element={<Checkout/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App
