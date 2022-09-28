
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Products from "./components/Product/Products";
import Cart from "./components/Cart/Cart";
import SingleProduct from './SingleProduct'
import Error from "./Error";
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/singleproduct/:id" element={<SingleProduct/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="*" element={<Error/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
